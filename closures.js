//this project is using information from the current lecture https://www.dropbox.com/home/JB22110005667/Web%20Development%20Bootcamp/T30?preview=WD+T30+-+Closures+and+Arrow+Functions.pdf

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//create outer function multiplyBy()
function multiplyBy(a){
    //create an inner function where the argument will stand for each element of the numbers array
    return function(b) {
            
        //return the template that will be applied to each element of an array
            return console.log(`${a} * ${b} = ${a * b}`)
    }
}

//outer function will later be called back with a single number multiplying each element of the array
function map(mapper){
    return function(array){
        const mappingArray = []

        for (let i = 0; i < array.length; i++) {
           mappedValue = mapper(array[i])
           mappingArray.push(mappedValue)
          }
          return mappingArray
    }
}


//create a variable multiplyBy10 to call the closure
const multiplyBy10 = map(multiplyBy(10))

multiplyBy10(numbers)