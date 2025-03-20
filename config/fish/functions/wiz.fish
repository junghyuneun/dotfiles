function wiz
  argparse -x on,off on off c/color=? b/brightness=? s/speed=? -- $argv
  or return

  set -f MODES {"Ocean", "Romance", "Sunset", "Party", "Fireplace", "Cozy", "Forest", "Pastel colors", "Wake-up", "Bedtime", "Warm white", "Daylight", "Cool white", "Night light", "Focus", "Relax", "True colors", "TV time", "Plant growth", "Spring", "Summer", "Fall", "Deep dive", "Jungle", "Mojito", "Club", "Christmas", "Halloween", "Candlelight", "Golden white", "Pulse", "Steampunk", "Diwali", "White", "Alarm", "Rhythm"}
  set -f WIZ 192.168.0.2
  if set -q _flag_off || set -q _flag_on
    set -f METHOD setState
    set -f PARAMS "\"state\":$(if set -q _flag_off; echo false; else; echo true; end)"
  else
    set -f METHOD setPilot
    if set -q _flag_c
      set -f matched 0
      for i in (seq (count $MODES))
        if string match -i "*$_flag_c*" $MODES[$i] >/dev/null
          set -f matched 1
          break
        end
      end
      if test $matched -eq 0
        set -f i 13
      end
      set -f COLOR_PARAM "\"sceneId\":$i"
    end
    if set -q _flag_b
      set -f DIMMING_PARAM "\"dimming\":$_flag_b"
    end
    if set -q _flag_s
      set -f SPEED_PARAM "\"speed\":$_flag_s"
    end
    set -f PARAMS $(string join , $COLOR_PARAM $DIMMING_PARAM $SPEED_PARAM)
  end
  set -f PAYLOAD "{\"id\":1,\"method\":\"$METHOD\",\"params\":{$PARAMS}}"
  echo $PAYLOAD
  echo -n $PAYLOAD | nc -u -w 1 $WIZ 38899 >/dev/null
end

