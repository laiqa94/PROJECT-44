"use strict";
function makeSandwish(item) {
    console.log('Making your sandwish with:');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your sandwish');
}
makeSandwish(['Ham', 'Chesse', 'lettuce',]);
makeSandwish(['Turkey', 'Bcon']);
makeSandwish(['Peanut butter', 'Jelly']);
