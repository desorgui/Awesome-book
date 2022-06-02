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

list.addEventListener('click', () => {
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
  list.classList.add('active');
  addNew.classList.remove('active');
  contact.classList.remove('active');
});

addNew.addEventListener('click', () => {
  addSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
  list.classList.remove('active');
  addNew.classList.add('active');
  contact.classList.remove('active');
});

contact.addEventListener('click', () => {
  contactSection.style.display = 'block';
  listSection.style.display = 'none';
  addSection.style.display = 'none';
  list.classList.remove('active');
  addNew.classList.remove('active');
  contact.classList.add('active');
});

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
    <div class="book-content d-flex">
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