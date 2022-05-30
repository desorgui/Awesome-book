let bookName = document.getElementById('bookName');
bookName = '';
let authorName = document.getElementById('authorName');
authorName = '';
let newBook = bookName + authorName ;
let addBook = document.getElementById('addBook');

let book = [
    {nameOfBook: bookName,
     nameOfAuthor: authorName}
];
let books = document.getElementById('books')

addBook.addEventListener('click', () => {
 const bookItem = document.createElement('div');
 bookItem.classList.add('bookItem');
 console.log("clicked");
 bookItem.innerHTML = `
 <div class="book-content">
    <p>${book.bookName}</p>
    <p>${book.authorName}</p>
    <div class="remove-book">
        <button type="button" id="remove">Remove</button>
    </div>
</div>
`;
 books.appendChild(bookItem);
})
