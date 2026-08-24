const lunches = [];

function addLunchToEnd(arr, text) {
    arr.push(text);
    console.log(`${text} added to the end of the lunch menu.`);
    return arr;
}

function addLunchToStart(arr, text) {
    arr.unshift(text);
    console.log(`${text} added to the start of the lunch menu.`);
    return arr;
}

function removeLastLunch(arr) {
    const removed = arr.pop();
    arr.length === 0 ? console.log("No lunches to remove.") : console.log(`${removed} removed from the end of the lunch menu.`);
    return arr;
}


function removeFirstLunch(arr) {
    const removed = arr.shift();
    arr.length === 0 ? console.log("No lunches to remove.") : console.log(`${removed} removed from the start of the lunch menu.`);
    return arr;
}

function getRandomLunch(arr) {

    arr.length === 0
        ? console.log("No lunches available.")
        : console.log(`Randomly selected lunch: ${arr[Math.floor(Math.random() * arr.length)]}`);
}

function showLunchMenu(arr) {
    arr.length === 0
        ? console.log("The menu is empty.")
        : console.log(`Menu items: ${arr.join(", ")}`);
}

// hay que tener mas en cuenta los metodos de Array, por ejemplo el join() 