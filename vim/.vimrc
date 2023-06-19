let mapleader=' '
let g:mapleader=' '

set splitbelow
set splitright
set number
set numberwidth=5
set nocompatible
set hidden
colorscheme void

try
  set undodir=~/.vim_runtime/undodir
  set undofile
catch
endtry

cnoremap <C-A> <Home>
cnoremap <C-E> <End>
cnoremap <C-K> <C-U>
cnoremap <C-P> <Up>
cnoremap <C-N> <Down>
nmap <leader>w :w!<cr>
map <leader>h :noh<cr>

command W w !sudo tee % > /dev/null

set history=500

filetype plugin on
filetype indent on
set autoread

let $LANG='en'
set langmenu=en

set wildmenu
set wildmode=list:longest,list:full
set ruler
set hid
set showcmd
set backspace=eol,start,indent
set whichwrap=<,>,b,s
set listchars=tab:>-,trail:·,extends:»,precedes:«

set ignorecase
set smartcase
set hlsearch
:nnoremap <silent> <leader><Esc> :noh<Bar>:echo<CR>
set incsearch
set lazyredraw
set magic
set showmatch
set mat=2
set noerrorbells
set novisualbell
set t_vb=
set t_RV=
set tm=500
set foldcolumn=1

syntax enable
set encoding=utf-8
set ffs=unix,dos,mac

set nobackup
set nowb
set noswapfile

set expandtab
set smarttab
set shiftwidth=2
set tabstop=2
set softtabstop=2
set ai
set si

map <leader>tn :tabnew<cr>
map <leader>tc :tabclose<cr>
map <leader>tm :tabmove
map <leader>x :tabn<cr>
map <leader>z :tabp<cr>
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l

nmap <leader>t :TagbarToggle<cr>

let g:lasttab=1
nmap <leader>tl :exe "tabn ".g:lasttab<CR>
au TabLeave * let g:lasttab=tabpagenr()

try
  set switchbut=useopen,usetab,newtab
  set stal=2
catch
endtry

au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0

set laststatus=2
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

map 9 ^
map 0 $

fu! CleanExtraSpaces()
  let save_cursor = getpos(".")
  let old_query = getreg('/')
  silent! %s/\s\+$//e
  call setpos('.', save_cursor)
  call setreg('/', old_query)
endfun

execute pathogen#infect()

let g:airline#extensions#tabline#enabled = 1
let g:airline_theme='wombat'
