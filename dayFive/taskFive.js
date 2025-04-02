// vall function n number of times

const hi = () =>{
    console.log("hi");
}

const repeatFunc = (n, func) => {
    for (let i = 0; i < n; i++) {
        func();
    }   
}

repeatFunc(5, hi);

//  higher order takes two function and a value and apply sequencialy

const custumFunc = (func1, func2, value) => {
    return func2(func1(value));
}

const square = x => x * x;
const cube = x => x * x * x;

console.log(custumFunc(square, cube, 5));