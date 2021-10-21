// learn Objects

// world without object
const playerName = "name";
const playerPoints = 12345;
const playerNice = false;
const playerBad = "little bit";


// everything above describes properties of an entity
// we want to express these in "xx.xx" form
// player.name
// player.points
// player.nice
// player.bad


// by using array, we cannot tell what each one means
// all the values of a list hold the same meaning
const playerList = ["name", 12345, false, "little bit"];


// use object
const player = {
    name: "name",
    points: 12345,
    nice: false,
};
console.log(player);
console.log(player.points);
console.log(player["points"]);


// able to update an object
// objectName.presentProperty = newValue;
console.log(player);
player.nice = true;
player.points += 5;
console.log(player);


// add sth to the object
// objectName.newProperty = newValue;
console.log(player)
player.lastName = "potato";
console.log(player)


// we can't modify a constant
// it's possible to change something inside an object b/c the object is still same
// the error happens when you try to update the whole constant as a value
// when you try to change constant(object) to constant(boolean), there will be an error
// no problem changing something in a constant(object)
player = false;
