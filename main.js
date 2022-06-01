const bookName = document.getElementById('bookName');
const authorName = document.getElementById('authorName');
const addBook = document.getElementById('addBook');

let booksContainer = localStorage.getItem('books') === null || localStorage.getItem('books') === undefined ? [] : JSON.parse(localStorage.getItem('books'));
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
    booksContainer.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksContainer));
    window.location.reload();
  });
});

addBook.addEventListener('click', () => {
  if (bookName.value && authorName.value) {
    book = [bookName.value, authorName.value];
    booksContainer.push(book);
    localStorage.setItem('books', JSON.stringify(booksContainer));
    window.location.reload();
  }
});