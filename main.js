let bookName = document.getElementById('bookName');
bookName = '';
let authorName = document.getElementById('authorName');
authorName = '';
let newBook = bookName + authorName ;
let addBook = document.getElementById('addBook');

let book = [];
let books = document.getElementById('books')

addBook.addEventListener('click', () => {
 const bookItem = document.createElement('div');
 bookItem.classList.add('bookItem');
 books.appendChild(bookItem);
})
