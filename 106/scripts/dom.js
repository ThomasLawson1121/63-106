function sayHello() {
    console.log("Hello World");
    howAreYou();
}

function sayGoodbye() {
    console.log("Goodbye World");
}

function howAreYou() {
    console.log("How are you, world?");
    sayGoodbye();
}

window.onload = howAreYou //execute the function when the page loads
// this means that i wait until the HTML and the css are loaded before i exxecute
// this is impoortant when you want to manipulate the dom