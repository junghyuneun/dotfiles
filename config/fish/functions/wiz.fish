function wiz
  if test (count $argv) -eq 0
    echo "Specify at least one action."
    return
  end
  # Possible commands.
  set -f cmds on off get set
  set -f action $argv[1]
  if not contains $action $cmds
    echo "Use one of 'on', 'off', 'get', 'set'."
    return
  end
  set -e argv[1]
  if test $action != "set" -a (count $argv) -gt 0
    echo "No arguments should be used with 'on', 'off' or 'get'."
    return
  end
  argparse c/color= b/brightness= s/speed= -- $argv
  or return

  # Current list of all available modes in Wiz app.
  set -f MODES {"Ocean", "Romance", "Sunset", "Party", "Fireplace", "Cozy", "Forest", "Pastel colors", "Wake-up", "Bedtime", "Warm white", "Daylight", "Cool white", "Night light", "Focus", "Relax", "True colors", "TV time", "Plant growth", "Spring", "Summer", "Fall", "Deep dive", "Jungle", "Mojito", "Club", "Christmas", "Halloween", "Candlelight", "Golden white", "Pulse", "Steampunk", "Diwali", "White", "Alarm", "Rhythm"}

  # Set the IP of my WIZ bulb in DHCP settings.
  # Also set other repetitive parameters.
  set -f WIZ 192.168.0.2
  set -f ON_OR_OFF on off
  set -f P_ID \"id\":1
  set -f P_METHOD \"method\":\"$(if contains $action $ON_OR_OFF; echo -n "setState";else; echo -n $action"Pilot"; end)\"
  set -f INNER_PARAMS \"state\":$(if test $action = "on"; echo -n true; else; echo -n false; end)

  # Set parameters in accordance with the actions.
  switch $action
    # get action doesn't take any parameters.
    case get
      set -f P_ID
      set -f INNER_PARAMS
    # set action can take "speed", "brightness" and "color (mode)".
    case set
      if set -q _flag_c
        set -f matched 0
        for i in (seq (count $MODES))
          if string match -i "*$_flag_c*" $MODES[$i] >/dev/null
            set matched 1
            break
          end
        end
        if test $matched -eq 0
          set i 13
        end
        set -f COLOR_PARAM "\"sceneId\":$i"
      end
      if set -q _flag_b
        set -f DIMMING_PARAM "\"dimming\":$_flag_b"
      end
      if set -q _flag_s
        set -f SPEED_PARAM "\"speed\":$_flag_s"
      end
      set -f INNER_PARAMS $(string join --no-empty , $COLOR_PARAM $DIMMING_PARAM $SPEED_PARAM)
  end

  set -f PARAMS "\"params\":{$INNER_PARAMS}"
  set -f PAYLOAD "{$(string join --no-empty , $P_ID $P_METHOD $PARAMS)}"
  echo $PAYLOAD
  echo -n $PAYLOAD | nc -u -w 1 $WIZ 38899
end

