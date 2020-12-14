let myLibrary = [];
let addedBook;

//Constructor function for Book
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = "Unread";
}


function createNewBook() {
    addedBook = new Book(newTitle.value, newAuthor.value, newPages.value);
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


// Resets form and closes the add book form when submit button is clicked
function closeForm() {
    document.getElementById("addBookForm").reset();
    addBookForm.style.display = "none";
} 

function createBookCard() {
    let bookSection = document.getElementById("allBooks");
    let indexNum = myLibrary.length - 1;
    let newElement = document.createElement("div");
    let idNum = (`book${indexNum + 1}`);
    newElement.id = idNum;
    newElement.className = "book";
    newElement.classname = ("bookNumber");
    bookSection.appendChild(newElement);
    let bookNum = document.createElement("p")
    bookNum.className = "bookNum";
    bookNum.innerHTML = `#${indexNum + 1}`;
    newElement.appendChild(bookNum);


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
        }
    }
    createStatus(idNum);
    removeBook(idNum);
}

// Creates new HTML element.
function createBookElement(newestBook, property, idNum) {
    let currentBookDiv = document.getElementById(idNum);
    let elementTitle = document.createElement("p");
    let bookElement = document.createElement("p");
    elementTitle.className = ("elementTitle");
    elementTitle.innerHTML = (property.charAt(0).toUpperCase() + property.slice(1));
    bookElement.className = (`book${property} index${idNum.slice(-1)}`);
    bookElement.innerHTML = (newestBook[property]);
    currentBookDiv.appendChild(elementTitle);
    currentBookDiv.appendChild(bookElement);
}

// Creates a remove button on each book's card.
function removeBook(idNum) {
    let currentBookDiv = document.getElementById(idNum);
    let removeButton = document.createElement("button");
    let breakLine = document.createElement("BR");
    removeButton.innerHTML = "Remove";
    removeButton.className = "removeButton";
    currentBookDiv.appendChild(breakLine);
    currentBookDiv.appendChild(removeButton);

    // Removes book card from the parent node and the book object from myLibrary array.
    removeButton.addEventListener("click", function() {
        removeButton.parentNode.parentNode.removeChild(removeButton.parentNode)
        let index = idNum.replace('book', '');
        index -= 1;
        myLibrary.splice(index, 1);
    })
}

// Create a status select button.
function createStatus(idNum) {
    let currentBookDiv = document.getElementById(idNum);
    let statusOptions = ["Unread", "In-Progress", "Completed"];

    let statusList = document.createElement("select");
    statusList.className = idNum;
    statusList.id = "status" + idNum.replace("book", '');
    statusList.className="statusList";
    currentBookDiv.appendChild(statusList);

    for (i = 0; i < statusOptions.length; i++) {
        let option = document.createElement("option");
        option.value = statusOptions[i];
        option.text = statusOptions[i];
        statusList.appendChild(option);
    }
}

