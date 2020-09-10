function fizzBuzz(num) {
    for(var i = 1; i <= num; i++) {
        if( i % 15 === 0) {
            console.log("fizzbuzz")
        }
        else if(i % 15 === 0) {
            console.log("fizz")
        }
        else if(i % 3 === 0) {
            console.log("buzz")
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz(30)

var iceCreamFlavor = prompt("what's your favorite ice cream flavor?");

switch(iceCreamFlavor) {
    case "Chocolate":
        alert("Chocolate is the best!");
        break;
    case "Vanilla":
        alert("booooooooring");
        break;
    default:
        alert(iceCreamFlavor + "is gross, but we are still friends");
        break;
}

