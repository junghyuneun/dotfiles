let g:mapleader=' '

set splitbelow
set splitright
set number
set numberwidth=5
set nocompatible
set hidden
colorscheme onedark

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
set ambw="double"
set whichwrap+=<,>,[,]
set listchars=tab:⇤–⇥,space:·,trail:·,precedes:⇠,extends:⇢,nbsp:×

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

map <leader>ts :tabs<cr>
map <leader>=  :tabnew<cr>
map <leader>-  :tabclose<cr>
map <leader>l  :tabn<cr>
map <leader>h  :tabp<cr>
map <expr><leader>m printf(":\<C-u>%dtabm\n", v:count1)

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

let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1
let g:airline_theme='onedark'

nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-m> :NERDTreeFind<CR>
let NERDTreeShowHidden = 1
let NERDTreeShowLineNumbers = 1
let NERDTreeDirArrows = 1
let NERDTreeQuitOnOpen = 1
let NERDTreeAutoDeleteBuffer = 1

" Exit Vim if NERDTree is the only window remaining in the only tab.
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | call feedkeys(":quit\<CR>:\<BS>") | endif

" If another buffer tries to replace NERDTree, put it in the other window, and bring back NERDTree.
autocmd BufEnter * if winnr() == winnr('h') && bufname('#') =~ 'NERD_tree_\d\+' && bufname('%') !~ 'NERD_tree_\d\+' && winnr('$') > 1 |
    \ let buf=bufnr() | buffer# | execute "normal! \<C-W>w" | execute 'buffer'.buf | endif

" Start NERDTree. If a file is specified, move the cursor to its window.
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * NERDTree | if argc() > 0 || exists("s:std_in") | wincmd p | endif

