class Books {
  constructor() {
    this.title = '';
    this.author = '';
    this.books = [];
  }

  addBook(title, author) {
    this.title = title;
    this.author = author;
    this.books.push([this.title, this.author]);
  }

  removeBook(index) {
   this.books.splice(index, 1);
  }

  getBooks() {
    return this.books;
  }

  setBooks(storage) {
    this.books = storage;
  }
}

const BookList = new Books();

const bookName = document.getElementById('bookName');
const authorName = document.getElementById('authorName');
const addBook = document.getElementById('addBook');



let book = [];
const books = document.getElementById('books');

const bookItem = document.createElement('div');
if (booksContainer.length > 0) {
  booksContainer.forEach((element) => {
    bookItem.classList.add('bookItem');
    bookItem.innerHTML += `
    <div class="book-content">
      <p>${element[0]} by ${element[1]}</p>
      <div class="remove-book">
          <button type="button" class="remove">Remove</button>
      </div>
    </div>
  `;
    books.appendChild(bookItem);
  });
} else booksContainer = [];

const removeBook = bookItem.querySelectorAll('.remove-book');

removeBook.forEach((element, index) => {
  element.addEventListener('click', () => {
    BookList.removeBook(index);
    
    window.location.reload();
  });
});

addBook.addEventListener('click', () => {
  if (bookName.value && authorName.value) {
    
    window.location.reload();
  }
});