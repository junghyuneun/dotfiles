set -gx FNM_COREPACK_ENABLED true
set -gx FNM_VERSION_FILE_STRATEGY recursive
fnm env --use-on-cd | source
