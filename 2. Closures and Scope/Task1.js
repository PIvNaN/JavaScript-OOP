function solve() {

    var library = (function () {
        var books = [];
        var categories = [];
        let counterID = 1;

        function listBooks() {
            let book = arguments[0];

            if (!book) {
                return books;
            }
            if (book.category) {
                return books.filter(x => x.category === book.category);
            }
            if (book.author) {
                return books.filter(x => x.author === book.author);
            }

            return books;
        }

        function addBook(book) {

            let titleLength = book.title.length;

            if (titleLength < 2 || titleLength > 100) {
                throw Error('Invalid title name');
            }

            if (book.author === '') {
                throw Error('Invalid author name');
            }

            if (!book.isbn.match(/^[0-9]{10}$/) && !book.isbn.match(/^[0-9]{13}$/)) {
                throw "Invalid ISBN format";
            }

            books.forEach(b => {
                if (b.title === book.title || b.isbn === book.isbn) {
                    throw new Error('Book title and ISBN should be unique!');
                }
            });

            if (categories.indexOf(book.category) < 0) {
                categories.push(book.category);
            }

            book.ID = counterID;
            counterID += 1;
            books.push(book);
            return book;
        }

        function listCategories() {
            return categories;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());
    return library;
}