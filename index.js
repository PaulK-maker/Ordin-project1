const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  displayBooks();
}

function displayBooks() {
  const container = document.getElementById("book-container");
  if (!container) {
    throw new Error('Element with id "book-container" was not found.');
  }

  container.replaceChildren();

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? "read" : "not read"}`;
    container.appendChild(bookDiv);
  });
}
