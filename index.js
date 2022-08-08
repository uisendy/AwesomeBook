import Books from "./module/BooksClassFile.js";
import LocalStore from "./module/LocalStorage.js";
import Display from "./module/DisplayUI.js";
import { DateTime } from "./luxon.js";

const navLink = document.querySelectorAll(".nav");
const contact = document.querySelector(".contact");
const bookSection = document.querySelector(".display-area");
const addBook = document.querySelector(".add-book");

document.addEventListener("DOMContentLoaded", Display.displayBooks);
const addToBook = document.querySelector(".book-form");
addToBook.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = LocalStore.idGenerator();
  const title = document.getElementById("Title").value;
  const author = document.getElementById("Author").value;
  const book = new Books(id, title, author);
  Display.addBook(book);
  LocalStore.addBook(book);
  Display.clearForm();
});

const displayContainer = document.querySelector(".book-display-container");
displayContainer.addEventListener("click", (e) => {
  Display.deleteBook(e.target);
  LocalStore.removeBook(e.target.id);
});

navLink.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (index === 2) {
      contact.classList.add("active");
      addBook.classList.remove("active");
      bookSection.classList.remove("active");
    } else if (index === 0) {
      bookSection.classList.add("active");
      contact.classList.remove("active");
      addBook.classList.remove("active");
    } else {
      addBook.classList.add("active");
      bookSection.classList.remove("active");
      contact.classList.remove("active");
    }
  });
});
const Time = document.querySelector(".time");
Time.textContent = DateTime.now().toLocaleString(
  DateTime.DATETIME_MED_WITH_SECONDS
);
