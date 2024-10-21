let g:mapleader=' '
let $LANG='en'

syntax enable
filetype plugin indent on

set termguicolors
set autochdir
set langmenu=en
set encoding=utf-8
set fileencoding=utf-8
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
colorscheme dusklight
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
set listchars=tab:>-,trail:.,precedes:<,extends:>,eol:$
set wildmode=list:longest,list:full

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
map 8 <Home>
map 9 ^
map 0 $
nmap <leader>w :w!<cr>
nnoremap <silent> <Esc><Esc> :noh<CR> :call clearmatches()<CR>
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l
nnoremap <S-Right> <C-w><
nnoremap <S-Left> <C-w>>
nnoremap <S-Up> <C-w>+
nnoremap <S-Down> <C-w>-
inoremap jj <Esc>
nnoremap / /\v
cnoremap %s/ %s/\v
" auto close brackets
inoremap { {<CR><BS>}<Esc>O
inoremap \{ {

" tabs mapping
map <leader>ts :tabs<cr>
map <leader>=  :tabnew<cr>
map <leader>-  :tabclose<cr>
map <leader>l  :tabn<cr>
map <leader>h  :tabp<cr>
map <leader>+ <C-W>T
map <expr><leader>m printf(":\<C-u>%dtabm\n", v:count1)
let g:lasttab=1
nmap <leader>tl :exe "tabn ".g:lasttab<CR>
au TabLeave * let g:lasttab=tabpagenr()

fu! CleanExtraSpaces()
  let save_cursor = getpos(".")
  let old_query = getreg('/')
  silent! %s/\s\+$//e
  call setpos('.', save_cursor)
  call setreg('/', old_query)
endfun

" airline
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#left_sep = ' '
let g:airline#extensions#tabline#left_alt_sep = '|'
let g:airline#extensions#tabline#formatter = 'unique_tail'
let g:airline_powerline_fonts = 1
let g:airline_theme='base16color'

set tabline=%!TabLine()

function TabLine()
  let s = ''
  for i in range(tabpagenr('$'))
    if i + 1 == tabpagenr()
      let s ..= '%#TabLineSel#'
    else
      let s ..= '%#TabLine#'
    endif

    let s ..= '%' .. (i + 1) .. 'T'

    let s ..= ' %{TabLabel(' .. (i + 1) .. ')} '
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

" LSP
let g:easycomplete_cursor_word_hl = 1
let g:easycomplete_nerd_font = 1
let g:easycomplete_lsp_type_font = 'Meslo LG L DZ'

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

