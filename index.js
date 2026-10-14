const myLibrary = ["happiness,Love,Peace, Joy"];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
};

const items = ["item1", "item2", "item3"];

for (let i = 0; i < items.length; i++) {
  console.log(  myLibrary[i]);
}

for(let i=0;i<)

  items.forEach(item)=>
  CopyOfItems.push(items)




  function displayBooks() {
    const container = document.getElementById('book-container');
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? 'read' : 'not read'}`;
        container.appendChild(bookDiv);
    });

    false





    function displayBooks() {