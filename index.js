// Write your code here
class Breakfast{
    constructor (food,drink){
        this.food = food;
        this.drink = drink;
    }
}
const breakfast = new Breakfast("bread", "porridge");

class Lunch{
    constructor(salad, soup, drink){
        this.salad= salad;
        this.soup = soup;
        this.drink = drink
    }
}
const newlunch = new Lunch("tomato salad", "broccoli cheddar soup", "water" );


class Dinner{
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}
const newdinner = new Dinner( "side salad", "soup", "steak", "chocolate cake");