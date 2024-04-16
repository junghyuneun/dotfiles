let mapleader=' '
let g:mapleader=' '

set splitbelow
set splitright
set number
set numberwidth=5
set nocompatible
set hidden
colorscheme koehler 

if has('persistent_undo')
  let target_path = expand('~/.vim/undo')
  if !isdirectory(target_path)
      call system('mkdir -p ' . target_path)
  endif
  let &undodir = target_path
  set undofile
endif

cnoremap <C-A> <Home>
nmap <leader>w :w!<cr>

inoremap " ""<left>
inoremap ' ''<left>
inoremap ( ()<left>
inoremap [ []<left>
inoremap { {}<left>
inoremap {<CR> {<CR>}<ESC>O
inoremap {;<CR> {<CR>};<ESC>O
nnoremap <silent> <Esc><Esc> :noh<CR> :call clearmatches()<CR>

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

let g:lasttab=1
nmap <leader>tl :exe "tabn ".g:lasttab<CR>
au TabLeave * let g:lasttab=tabpagenr()

try
  set switchbut=useopen,usetab,newtab
  set stal=2
catch
endtry

au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif

set laststatus=2
set statusline+=%#warningmsg#
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

nmap <leader>t :TagbarToggle<cr>

let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1
let g:airline_theme='wombat'

nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-m> :NERDTreeFind<CR>
let NERDTreeShowHidden = 1
let NERDTreeShowLineNumbers = 1
let NERDTreeDirArrows = 1
let NERDTreeQuitOnOpen = 1
let NERDTreeAutoDeleteBuffer = 1

