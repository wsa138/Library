let myLibrary = [];
let addedBook;

let addBookForm = document.getElementById("addBookForm");
let newTitle = document.getElementById("titleInput")
let newAuthor = document.getElementById("authorInput")
let newPages = document.getElementById("pagesInput")
let submitButton = document.getElementById("submitButton")
let openAddForm= document.getElementById("bookForm");


loadLibrary();
recreateLibrary(myLibrary);


//Constructor function for Book
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = "Unread";
}

// Opens new book form.
openAddForm.addEventListener("click", openForm);

// Creates the new book object in myLibrary and creates a new book card.
submitButton.addEventListener("click", createNewBook);

function createNewBook() {
    addedBook = new Book(newTitle.value, newAuthor.value, newPages.value);
    addBookToLibrary(addedBook);
    createBookCard();
    closeForm();
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Makes book form visible.
function openForm() {
    addBookForm.style.display = "block";
}


// Resets form and closes add book form.
function closeForm() {
    document.getElementById("addBookForm").reset();
    addBookForm.style.display = "none";
} 

function createBookCard() {
    removeAllBooks();
    recreateLibrary(myLibrary)
}

// Creates new HTML element.
function createBookElement(newestBook, property, idNum) {
    let currentBookDiv = document.getElementById(idNum);
    let elementTitle = document.createElement("p");
    let bookElement = document.createElement("p");
    elementTitle.className = ("elementTitle");
    elementTitle.innerHTML = (property.charAt(0).toUpperCase() + property.slice(1) + ":");
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

        removeAllBooks();

        //Recreate myLibrary books as book cards
        recreateLibrary(myLibrary);
    })
}
                        
// Create a status select button.
function createStatus(idNum) {
    let currentBookDiv = document.getElementById(idNum);
    let statusOptions = ["Unread", "In-Progress", "Completed"];

    let statusList = document.createElement("select");
    statusList.id = "status" + idNum.replace("book", '');
    statusList.className="statusList";
    currentBookDiv.appendChild(statusList);

    for (z = 0; z < statusOptions.length; z++) {
        let option = document.createElement("option");
        option.value = statusOptions[z];
        option.text = statusOptions[z];
        statusList.appendChild(option);
    }
    document.getElementById(statusList.id).addEventListener("change", updateStatus);

    checkStatus(idNum);
}

// Function to recreate myLibrary book objects as book cards.
function recreateLibrary(myLibrary) {
    for (i = 0; i < (myLibrary.length); i++) {
        let bookSection = document.getElementById("allBooks");
        //The new book card element
        let newCard = document.createElement("div");
        //Set book card id and class.
        let idNum = (`book${i + 1}`);
        newCard.id = idNum;
        newCard.className = "book";
        //newCard.classname = ("bookNumber");
        bookSection.appendChild(newCard);
        // Create element for book index display number.
        let newBookIndex = document.createElement("p")
        newBookIndex.className = "bookNum";
        newBookIndex.innerHTML = `#${i + 1}`;
        newCard.appendChild(newBookIndex);

        // Create title, author and pages elements.
        let currentBook = myLibrary[i];
        for (let property in currentBook) {
            switch (property) {
                case "title":
                    createBookElement(currentBook, property, idNum);
                    break;
                case "author":
                    createBookElement(currentBook, property, idNum);
                    break;
                case "pages":
                    createBookElement(currentBook, property, idNum);
                    break;
            }
        }
        createStatus(idNum);
        removeBook(idNum);
        addLocalStorage();
    }
}

// Sends myLibrary array of objects to local storage.
function addLocalStorage() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
}

function loadLibrary() {
    if (localStorage.length < 1) {
        console.log("no local storage")
      } else {
        console.log("some local storage")
        myLibrary = (JSON.parse(localStorage.getItem("library")))
      }
}

function removeAllBooks() {
    let allBookCards = document.getElementById("allBooks");
        while (allBookCards.firstChild) {
            allBookCards.removeChild(allBookCards.firstChild);
        }
}

// Stores cnaged status in book object.
function updateStatus() {
    let index = this.parentElement.id.replace("book", "") - 1;
    myLibrary[index].status = this.value;
    addLocalStorage();
}

function checkStatus(idNum) {
    let cardNum = idNum.replace("book", "");
    let bookIndex = cardNum - 1;
    let statusId = "status" + cardNum;
    let cardStatus = document.getElementById(statusId)
    let status = myLibrary[bookIndex].status;
    cardStatus.value = status;
}