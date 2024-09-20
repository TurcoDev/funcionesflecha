let array = [1, 2, [3, 4], [5], 6, [[7, 8], [9], [10]]]
// let array = [1, 2, [3, 4], [5], 6, [7, 8],[9],[10]]
let result = []

function iteraciones() {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (typeof element == 'number') {
            result.push(element)
        } else {
            for (let i = 0; i < element.length; i++) {
                const element2 = element[i];
                result.push(element2);
            }
        }
    }
}


function recur(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (typeof element === 'number') {
            result.push(element)
        }
        else {
            recur(element)
        }
    }
}

recur(array);

console.log(result);
