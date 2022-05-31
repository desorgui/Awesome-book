const bookName = document.getElementById('bookName');
const authorName = document.getElementById('authorName');
const newBook = bookName + authorName;
const addBook = document.getElementById('addBook');

const book = [];
const books = document.getElementById('books');

addBook.addEventListener('click', () => {
  book.nameOfBook = bookName.value;
  book.nameOfAuthor = authorName.value;
  const bookItem = document.createElement('div');
  bookItem.classList.add('bookItem');
  bookItem.innerHTML = `
  <div class="book-content">
    <p>${book.nameOfBook}</p>
    <p>${book.nameOfAuthor}</p>
    <div class="remove-book">
        <button type="button" class="remove">Remove</button>
    </div>
</div>
`;
  books.appendChild(bookItem);
  const removeBook = bookItem.querySelectorAll('.remove');

  removeBook.forEach(element => {
    element.addEventListener('click', () => {
      bookItem.remove();
    });
  });
});
