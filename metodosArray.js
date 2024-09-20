const array = ['A', 'B', 'C', 'F', 'R'];

let emoji = array.shift();
console.log("Dato solo:", emoji);
console.log("Array resultado", array);

let result = array.map( (elem) => { return elem + 'XX'} )
console.log(result);

console.log(array.find( elem => elem == 'B' ));



