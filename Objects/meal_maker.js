const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    get appetizers() {
        return this._courses.appetizers;
    },

    set appetizers(appetizerIn) {
        this._courses.appetizers = appertizerIn;
    },

    get mains() {
        return this._courses.mains;
    },

    set mains(mainsIn) {
        this._courses.mainsIn = mainsIn;
    },

    get desserts() {
        return this._courses.desserts;
    },

    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },

    get _courses() {
        return {
            appertizers: this.appertizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    
    addDishToCourse(courseName, dishName, dishPrice) {
        dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse() {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(courseName) {
        const appertizer = this.getRandonDishFromCourse('appertizers');
        const main = this.getRandonDishFromCourse('mains');
        const dessert = this.getRandonDishFromCourse('desserts');

        const totalPrice = appertizer.price + main.price + dessert.price;

        return `Your meal is ${appertizer.name}, and ${main.name}, and ${dessert.name}, and the price is ${totalPrice}`;
    }
};


menu.addDishToCourse('appertizers', 'salad', 4.00);
menu.addDishToCourse('appertizers', 'fries', 3.00);
menu.addDishToCourse('appertizers', 'wings', 5.00);

menu.addDishToCourse('mains', 'steak', 24.00);
menu.addDishToCourse('mains', 'chicken', 11.00);
menu.addDishToCourse('mains', 'tofu', 15.00);

menu.addDishToCourse('desserts', 'brownie', 5.00);
menu.addDishToCourse('desserts', 'ice cream', 6.00);
menu.addDishToCourse('desseerts', 'cake', 8.00);

let meal = generateRandonMeal();
console.log(meal);




