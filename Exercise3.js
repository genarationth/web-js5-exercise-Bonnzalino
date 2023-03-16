//>>>>>>> Exercise 3 <<<<<<<<<<<

//Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.

let xValue = 5;
while (xValue > 0) {
    console.log(xValue) ; xValue = xValue - 0.5;
}

//- Print all the odd numbers between 1 - 100.
const oddNumber = (n) => {
let max = 1;
while (max <= n) {
    if (max % 2 !== 0)  {
        console.log(max); 
    }
    max++;
}
}
oddNumber(100);

//Write a method with a while loop to print 1 through n in square brackets. 
//For example, if n = 6 print [1] [2] [3] [4] [5] [6]
const print = (n) =>{
    let count = 1;
    while ( count <= n) {
        console.log(`[${count}]`); count++;
    }
}
print(6);