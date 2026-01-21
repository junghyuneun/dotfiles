let g:mapleader=' '
let $LANG='en'

syntax enable
filetype plugin indent on

colorscheme neuromancer
set termguicolors
set autochdir
set langmenu=en
set encoding=utf-8
set ffs=unix,dos,mac
set nobackup
set nowb
set noswapfile
set splitbelow
set splitright
set number
set numberwidth=5
set nocompatible
set path+=**
command W w !sudo tee % > /dev/null

if has('persistent_undo')
  let target_path = expand('~/.vim/undo')
  if !isdirectory(target_path)
    call system('mkdir -p ' . target_path)
  endif
  let &undodir = target_path
  set undofile
endif

set autoread
set ruler
set hid
set showcmd
set wildmenu
set history=500
set backspace=eol,start,indent
set ambw="double"
set whichwrap+=b,s,h,l,<,>,~,[,]
set list
set listchars=tab:>-,trail:\\u00B7,precedes:<,extends:>,multispace:\\u00B7,lead:\\u00B7
set wildmode=list:longest,list:full
set completeopt+=noselect

set ignorecase
set smartcase
set hlsearch
set incsearch
set lazyredraw
set magic
set showmatch
set noerrorbells
set novisualbell
set t_vb=
set t_RV=
set mat=2
set tm=500
set foldcolumn=1
" set foldmethod=indent

set ai
set si
set expandtab
set smarttab
set shiftwidth=2
set tabstop=2
set softtabstop=2

try
  set switchbuf=useopen,usetab,newtab
  set stal=2
catch
endtry

au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif

" mappings
map <C-0> <Home>
map 9 ^
map 0 $
nmap <leader>w :w!<cr>
nnoremap <silent> <Esc><Esc> :noh<CR> :call clearmatches()<CR>
nnoremap <C-.> :cnext<CR>
nnoremap <C-,> :cprev<CR>
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
nnoremap <S-Right> <C-w><
nnoremap <S-Left> <C-w>>
nnoremap <S-Up> <C-w>+
nnoremap <S-Down> <C-w>-
nnoremap <S-t> :LastWindow<CR>
nnoremap / /\v
nnoremap <C-;> gg=G
cnoremap %s/ %s/\v
" auto close brackets
inoremap { {}<Left>
inoremap [ []<Left>
inoremap ( ()<Left>
inoremap \{ {
inoremap jj <Esc>
inoremap <C-m> <Plug>EasycompleteClosePum
vnoremap <C-c> "*y
nnoremap d "dd
nnoremap D "dD
nnoremap dd "ddd
nnoremap x "_x
nnoremap <leader>p "dp
nnoremap <leader>P "dP
nnoremap <leader>q :bd<CR>
" tabs mapping
nmap <leader>1 <Plug>AirlineSelectTab1
nmap <leader>2 <Plug>AirlineSelectTab2
nmap <leader>3 <Plug>AirlineSelectTab3
nmap <leader>4 <Plug>AirlineSelectTab4
nmap <leader>5 <Plug>AirlineSelectTab5
nmap <leader>6 <Plug>AirlineSelectTab6
nmap <leader>7 <Plug>AirlineSelectTab7
nmap <leader>8 <Plug>AirlineSelectTab8
nmap <leader>9 <Plug>AirlineSelectTab9
nmap <leader>0 <Plug>AirlineSelectTab0
map <leader>b :ls<cr>
map <leader>bb :ls!<cr>
map <expr><leader>c printf(":\<C-u>%dbw\n", v:count)
map <leader>t :tabs<cr>
map <leader>= :tabnew<cr>
map <leader>+ :tabnew<Space>
map <leader>- :tabclose<cr>
map <leader>l :tabn<cr>
map <leader>h :tabp<cr>
map <expr><leader>m printf(":\<C-u>%dtabm\n", (tabpagenr() > v:count) ? v:count - 1 : v:count)
map <Tab> <C-w><C-w>
let g:lasttab = 1
nmap <leader>e :exe "tabn ".g:lasttab<CR>
au TabLeave * let g:lasttab = tabpagenr()

fu! CleanExtraSpaces()
  let save_cursor = getpos(".")
  let old_query = getreg('/')
  silent! %s/\s\+$//e
  call setpos('.', save_cursor)
  call setreg('/', old_query)
endfun

" airline
let g:airline_mode_map = {
      \ '__'     : '-',
      \ 'c'      : 'C',
      \ 'i'      : 'I',
      \ 'ic'     : 'I',
      \ 'ix'     : 'I',
      \ 'n'      : 'N',
      \ 'multi'  : 'M',
      \ 'ni'     : 'N',
      \ 'no'     : 'N',
      \ 'R'      : 'R',
      \ 'Rv'     : 'R',
      \ 's'      : 'S',
      \ 'S'      : 'S',
      \ ''       : 'S',
      \ 't'      : 'T',
      \ 'v'      : 'V',
      \ 'V'      : 'V',
      \ }
let g:airline_stl_path_style = 'short'
let g:airline_powerline_fonts = 1
let g:airline_theme='dark'
let g:airline_detect_modified = 1
let g:airline#extensions#tabline#buffer_nr_show = 1
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#left_sep = ' '
let g:airline#extensions#tabline#left_alt_sep = '|'
let g:airline#extensions#tabline#formatter = 'unique_tail'
let g:airline#extensions#tabline#show_buffers = 1
let g:airline#extensions#tabline#show_tabs = 1
let g:airline#extensions#tabline#buffer_idx_mode = 1
" lsp
let g:airline#extensions#lsp#enabled = 1
let g:airline#extensions#lsp#error_symbol = 'E:'
let g:airline#extensions#lsp#warning_symbol = 'W:'
let g:airline#extensions#lsp#show_line_numbers = 1
let g:airline#extensions#lsp#open_lnum_symbol = '(L'
let g:airline#extensions#lsp#close_lnum_symbol = ')'
let g:airline#extensions#lsp#progress_skip_time = 0.3
" others
let g:airline#extensions#searchcount#enabled = 1
let g:airline#extensions#searchcount#show_search_term = 1
let g:airline#extensions#whitespace#enabled = 1
let g:airline#extensions#wordcount#enabled = 1

set tabline=%!TabLine()

function TabLine()
  let s = ''
  for i in range(tabpagenr('$'))
    if i + 1 == tabpagenr()
      let s ..= '%#TabLineSel#'
    else
      let s ..= '%#TabLine#'
    endif

    let s ..= '%' .. (i+1) .. 'T'

    let s ..= ' %{TabLabel(' .. (i+1) .. ')} '
  endfor

  let s ..= '%#TabLineFill#%T'

  if tabpagenr('$') > 1
    let s ..= '%=%#TabLine#%999Xclose'
  endif
  return s
endfunction

function TabLabel(n)
  let buflist = tabpagebuflist(a:n)
  let winnr = tabpagewinnr(a:n)
  return bufname(buflist[winnr - 1])
endfunction

" NerdTree
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-m> :NERDTreeFind<CR>
nnoremap <leader>r :NERDTreeRefreshRoot<CR>
let NERDTreeShowHidden = 1
let NERDTreeShowLineNumbers = 1
let NERDTreeDirArrows = 1
let NERDTreeQuitOnOpen = 0
let NERDTreeAutoDeleteBuffer = 1

" Exit Vim if NERDTree is the only window remaining in the only tab.
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | call feedkeys(":quit\<CR>:\<BS>") | endif

" If another buffer tries to replace NERDTree, put it in the other window, and bring back NERDTree.
autocmd BufEnter * if winnr() == winnr('h') && bufname('#') =~ 'NERD_tree_\d\+' && bufname('%') !~ 'NERD_tree_\d\+' && winnr('$') > 1 |
      \ let buf=bufnr() | buffer# | execute "normal! \<C-W>w" | execute 'buffer'.buf | endif

" Start NERDTree. If a file is specified, move the cursor to its window.
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * NERDTree | if argc() > 0 || exists("s:std_in") | wincmd p | endif

" Whitespace
let g:better_whitespace_enabled=1
let g:strip_whitespace_on_save=1

" Easycomplete
let g:easycomplete_diagnostics_enable = 1
let g:easycomplete_signature_enable = 1
let g:easycomplete_enable = 1
let g:easycomplete_cursor_word_hl = 1
let g:easycomplete_nerd_font = 1
let g:easycomplete_lsp_type_font = 'Meslo LG L DZ'
let g:easycomplete_pum_format = ["kind", "abbr", "menu"]
let g:easycomplete_cmdline = 1
let g:easycomplete_winborder = 1
let g:easycomplete_ghost_text = 1
let g:easycomplete_pum_noselect = 1
let g:easycomplete_pum_pretty_style = 1
set updatetime=150
hi FloatBorder     guifg=green
hi PmenuKind       guifg=LightSteelBlue   guibg=#2c2c3e
hi Pmenu           guifg=Lavender         guibg=#2c2c3e
hi PmenuExtra      guifg=SlateGray        guibg=#2c2c3e
hi PmenuSel        guifg=white            guibg=#3a3a4c
hi EasyFuzzyMatch  guifg=#75adf3

" GoTo code navigation
noremap gr :EasyCompleteReference<CR>
noremap gd :EasyCompleteGotoDefinition<CR>
noremap rn :EasyCompleteRename<CR>
noremap gb :BackToOriginalBuffer<CR>
noremap pd :EasyCompletePreviousDiagnostic<CR>
noremap nd :EasyCompleteNextDiagnostic<CR>
noremap pb :EasyCompleteProfileStart<CR>
noremap ps :EasyCompleteProfileStop<CR>
noremap el :EasyCompleteLint<CR>

let g:easycomplete_diagnostics_next = '<C-n>'
let g:easycomplete_diagnostics_prev = '<C-p>'

augroup bufclosetrack
  au!
  autocmd BufLeave * let g:lastBufNr = bufnr('%')
augroup END
function! LastWindow()
  if exists("g:lastBufNr") && empty(win_findbuf(g:lastBufNr))
    exe "sb " . bufname(g:lastBufNr)
  endif
endfunction
command -nargs=0 LastWindow call LastWindow()

augroup Binary
  au!
  au BufReadPre  *.bin let &bin=1
  au BufReadPost *.bin if &bin | %!xxd
  au BufReadPost *.bin set ft=xxd | endif
  au BufWritePre *.bin if &bin | %!xxd -r
  au BufWritePre *.bin endif
  au BufWritePost *.bin if &bin | %!xxd
  au BufWritePost *.bin set nomod | endif
augroup END

