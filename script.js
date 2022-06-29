let libraryBooks = [];

// Book object constructor.
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    /*this.info = () => {
        let readStatus = "";
        if(this.hasRead){
            readStatus = "have been read";
        } else {
            readStatus = "not read yet";
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    }*/
}

// Methods.
function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages =  document.getElementById("Pages").value;
    let haveRead = document.getElementById("read").checked;

    libraryBooks.push(new Book(title, author, pages, haveRead));
}


function displayAllBooks () {
    // Create new row for every book.
    let table = document.querySelector("tbody");
    for (let i = libraryBooks.length; i >= 0; i--) {
        let row = document.createElement("tr");

        let book = libraryBooks[i];

        for (let j in book){
            let cellData = document.createElement("td");
            cellData.appendChild(document.createTextNode(book[j]));
            row.appendChild(cellData);
        }
        table.appendChild(row);
    }
}

// Add new book into dom
const displayNewBook = () => {
    let table = document.querySelector("tbody");
    let row = document.createElement("tr");
    let book = libraryBooks[libraryBooks.length -1];    

    for (let j in book){
        let cellData = document.createElement("td");
        cellData.appendChild(document.createTextNode(book[j]));
        row.appendChild(cellData);
    }
    table.appendChild(row);
}



let lotr = new Book("Lord of the Rings", "J.R.R Tolkien", 295, false);
let nonnii = new Book("Life of Kekkonen", "Urho Kekkonen", 300, false);
let kekkonen = new Book("MeNaiset", "Pirkko-Liisa", 40, true);



libraryBooks.push(lotr, nonnii, kekkonen);

displayAllBooks();


// Add eventListener for new book button
document.querySelector(".btn-newBook").addEventListener("click", () => {
    addBookToLibrary();
    displayNewBook();
})

