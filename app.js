// const kopi = require('./coffee');
// const {firstName, lastName} = require('./user')

// console.log(kopi);
// console.log(firstName);
// console.log(lastName);

// const moment = require('moment');
 
// const date = moment().format("MMM Do YY");
// console.log(date);

const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
 
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });