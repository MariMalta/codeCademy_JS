class Media {
    constructor(title) {
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    get title() {
        return this._title;
    }
    get ratings() {
        return this._ratings;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        const ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        return Math.floor(ratingsSum / this.ratings.length);
    }
    addRating(inputValue) {
        this.ratings.push(inputValue);
    }
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
}
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = 368;
    }
    get pages() {
        return this._pages;
    }
    get author() {
        return this._author;
    }
}
class Movie extends Media {
    constructor(director, title, runtime, isCheckedOut, ratings) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }
}
const book1 = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

book1.toggleCheckOutStatus();
console.log(book1.isCheckedOut);

book1.addRating(4);
book1.addRating(5);
book1.addRating(5);

console.log(book1.getAverageRating());

const movie1 = new Movie('Jan de Bont', 'Speed', 116);

movie1.toggleCheckOutStatus();
console.log(movie1.isCheckedOut);

movie1.addRating(1);
movie1.addRating(1);
movie1.addRating(5);

console.log(movie1.getAverageRating());

