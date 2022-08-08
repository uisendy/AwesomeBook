class LocalStore {
  static idGenerator() {
    const books = LocalStore.getBooks();
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    return id;
  }

  static getBooks = () => {
    let books;
    localStorage.getItem("BookDetails") === null
      ? (books = [])
      : (books = JSON.parse(localStorage.getItem("BookDetails")));
    return books;
  };

  static addBook = (book) => {
    const books = LocalStore.getBooks();
    books.push(book);
    localStorage.setItem("BookDetails", JSON.stringify(books));
  };

  static removeBook = (id) => {
    let books = LocalStore.getBooks();
    books = books.reduce(
      (prevBook, curBook) =>
        (prevBook =
          curBook.id.toString() !== id.toString()
            ? [...prevBook, curBook]
            : [...prevBook]),
      []
    );
    localStorage.setItem("BookDetails", JSON.stringify(books));
  };
}

export default LocalStore;
