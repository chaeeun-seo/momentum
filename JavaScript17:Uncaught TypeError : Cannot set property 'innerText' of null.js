// Searching For Elements

// most of the time, I'm not gonna add ids
// most of the time, I'm going to use className or combination of class and id

// Uncaught TypeError : Cannot set property 'innerText' of null
// there's sth in my code whose value is null
// this error means that I'm trying to access innerText of null
// title in js file is null (there's no id called something)
// title is null but I'm trying to change the innerText of null
// title does not exist so you shouldn't call innerText of a title

// cannot change the property of a null variable

const title = document.getElementById("something");
title.innerText = "Got You!";
console.log(title.className);
