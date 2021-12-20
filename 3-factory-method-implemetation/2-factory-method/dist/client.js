"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const burger_creator_1 = require("./burger_creator");
const kebab_creator_1 = require("./kebab_creator");
const pizza_creator_1 = require("./pizza_creator");
function client(creator) {
    console.log("Client: I'm not aware of the creator's class, but it still works.");
    console.log(creator.someOperation());
}
const pizzaCreator = new pizza_creator_1.PizzaCreator();
const burgerCreator = new burger_creator_1.BurgerCreator();
const kebabCreator = new kebab_creator_1.KebabCreator();
console.log("App: Launched with the PizzaCreator");
client(pizzaCreator);
console.log("----------");
console.log("App: Launched with the BurgerCreator");
client(burgerCreator);
console.log("----------");
console.log("App: Launched with the KebabCreator");
client(kebabCreator);
