let myLibrary = [];
let addedBook;

//Constructor function for Book
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function createNewBook() {
    addedBook = new Book(newTitle.value, newAuthor.value, newPages.value, newStatus.value);
    addBookToLibrary(addedBook);
    createBookCard();
    closeForm();
}

// Adds new book object to library array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

let addBookForm = document.getElementById("addBookForm");
let newTitle = document.getElementById("titleInput")
let newAuthor = document.getElementById("authorInput")
let newPages = document.getElementById("pagesInput")
let newStatus = document.getElementById("statusInput")
let submitButton = document.getElementById("submitButton")
let openAddForm= document.getElementById("bookForm");

// When add book button is clicked, run openForm()
openAddForm.addEventListener("click", openForm);

// When the submit button is clicked, run createNewBook()
submitButton.addEventListener("click", createNewBook);

// Function that opens the form to add a book
function openForm() {
    addBookForm.style.display = "block";
}

// Closes the add book form when submit button is clicked
function closeForm() {
    addBookForm.style.display = "none";
} 

// Create a sample element in html
var para = document.createElement("p");
var node = document.createTextNode("All the book elements here")
para.appendChild(node);

var element = document.getElementById("allBooks");
element.appendChild(para);

function createBookCard() {
    let bookSection = document.getElementById("allBooks");
    let indexNum = myLibrary.length - 1;
    let newElement = document.createElement("div");
    let idNum = (`book${indexNum + 1}`);
    newElement.id = idNum;
    newElement.classname = ("bookNumber");
    newElement.innerHTML = (`#${indexNum + 1}`);
    bookSection.appendChild(newElement);

    let idx = myLibrary.length - 1;
    let newestBook = myLibrary[idx];
    for (let property in newestBook) {
        switch (property) {
            case "title":
                createBookElement(newestBook, property, idNum);
                break;
            case "author":
                createBookElement(newestBook, property, idNum);
                break;
            case "pages":
                createBookElement(newestBook, property, idNum);
                break;
            case "status":
                createBookElement(newestBook, property, idNum);
                break;
        }
    }
    removeBook(idNum);
}

// Creates new HTML element
function createBookElement(newestBook, property, idNum) {
    let currentBookDiv = document.getElementById(idNum);
    let bookElement = document.createElement("p");
    bookElement.className = (`book${property} index${idNum.slice(-1)}`);
    bookElement.innerHTML = (newestBook[property]);
    currentBookDiv.appendChild(bookElement);
}

// Creates a remove button on each book's card
function removeBook(idNum) {
    let currentBookDiv = document.getElementById(idNum);
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    currentBookDiv.appendChild(removeButton);

    // Removes all the children of the book parent node
    removeButton.addEventListener("click", function() {
        removeButton.parentNode.parentNode.removeChild(removeButton.parentNode)
        let index = idNum.replace('book', '');
        index -= 1;
        myLibrary.splice(index, 1);
    })
}
