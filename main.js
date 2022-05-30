let bookName = document.getElementById('bookName');
let authorName = document.getElementById('authorName');
let newBook = bookName + authorName ;
let addBook = document.getElementById('addBook');

let book = [];
let books = document.getElementById('books')

addBook.addEventListener('click', () => {
    book.nameOfBook = bookName.value;
    book.nameOfAuthor = authorName.value;
 const bookItem = document.createElement('div');
 bookItem.classList.add('bookItem');
 console.log(book);
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
 let removeBook = bookItem.querySelectorAll('.remove');

 removeBook.forEach(element => {
     element.addEventListener('click', () => {
        bookItem.remove();
     })
 });
})
