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
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contact = document.getElementById('contact-nav');
const listSection = document.getElementById('books');
const addSection = document.getElementById('add-books');
const contactSection = document.getElementById('contact');
const currentActive = document.querySelector('.active');

list.addEventListener('click', () => {
  currentActive.classList.remove('active');
  listSection.classList.add('active');
});

addNew.addEventListener('click', () => {
  currentActive.classList.remove('active');
  addSection.classList.add('active');
})

contact.addEventListener('click', () => {
  currentActive.classList.remove('active');
  contactSection.classList.add('active');
})

if (localStorage.getItem('books') !== null && localStorage.getItem('books') !== undefined) {
  BookList.setBooks(JSON.parse(localStorage.getItem('books')));
}
let booksContainer = BookList.getBooks();

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
    booksContainer = BookList.getBooks();
    localStorage.setItem('books', JSON.stringify(booksContainer));
    window.location.reload();
  });
});

addBook.addEventListener('click', () => {
  if (bookName.value && authorName.value) {
    BookList.addBook(bookName.value, authorName.value);
    booksContainer = BookList.getBooks();
    localStorage.setItem('books', JSON.stringify(booksContainer));
    window.location.reload();
  }
});