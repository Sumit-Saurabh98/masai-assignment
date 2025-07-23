const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    isValidBook(book) {
      if (
        typeof book !== "object" ||
        typeof book.title !== "string" ||
        typeof book.author !== "string" ||
        typeof book.year !== "number"
      ) {
        return false;
      }
      return true;
    },
  
    addBook(book) {
      if (!this.isValidBook(book)) {
        console.error("Invalid book format. Please provide title, author (string) and year (number).");
        return;
      }
  
      if (this.findBookByTitle(book.title)) {
        console.warn(`Book with title "${book.title}" already exists.`);
        return;
      }
  
      this.books.push(book);
      console.log(`Book "${book.title}" added successfully.`);
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index !== -1) {
        const removed = this.books.splice(index, 1)[0];
        console.log(`Removed book: "${removed.title}"`);
      } else {
        console.warn("Book not found.");
      }
    }
  };

  library.addBook({ author: "George Orwell", year: 1949 }); // ❌ Missing title
library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // ✅ Valid
library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // ⚠️ Duplicate
library.removeBook("1984"); // ✅ Removes
library.removeBook("Unknown"); // ⚠️ Not found
console.log(library.books.length); // ✅ Consistent length

  