// #1 Counting Sheep
// counts how many sheep jump over the fence
// takes a number as input (number of sheep you have)
// output should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left
// when no more sheep left, display the message "All sheep jumped over the fence"

const sheepCounter = function(number) {
    console.log(number)
    // Base case
    if(number == 0){
        return(number + ': All sheep jumped over the fence \n')
    }

    //General case
    return (number + ': Another sheep jumps over the fence \n' + sheepCounter(number-1))
}

let num = 5;
// console.log(sheepCounter(num))


// #2 Power Calculator
// powerCalculator() function takes two parameters: integer as the base, and integer as the exponent
// returns the value of the base raised to the power of the exponent
// use only exponents that are greater than or equal to zero

const powerCalculator = function(base, exponent){
    //Base case
    if(exponent < 0){
        return ('Exponent should be >= 0')
    }
    else if(exponent == 0){
        return 1
    }

    else return(base * powerCalculator(base, exponent-1))
}

let b = 2
let e = 5
// console.log(powerCalculator(b, e))


// #3 Reverse String
// write a function that reverses the string
// takesa string as input, reverses the string, and returns a new string

const reverseString = function(string){
    //base case
    if(string === ''){
        return ''
    }
    else return reverseString(string.substr(1)) + string.charAt(0)
}

// console.log(reverseString('hello'))


// #4 nth Triangular Number
// input is a number
// output is the triangular number for that number

const triangularNumber = function(number){
    if(number === 0){
        return 0
    }

    else if(number === 1){
        return 1
    }

    else return number + triangularNumber(number - 1)
}

// console.log(triangularNumber(0))


// #5 String Splitter
// input a string with separators (/)
// output an array with the strings between the separators separated

const splitter = function(string, separator){
    var result = []
    if (string.indexOf(separator) === -1){
        result.push(string)
        return result
    }
    else {
        const index = string.indexOf(separator)
        let beginningWord = string.substr(0, index)
        console.log(beginningWord)
        result.push(beginningWord)
        let restOfWord = string.substr(index+1, string.length)
        splitter(restOfWord, separator)
    }
    return result
}

console.log(splitter('02/20/2020', '/'))


// #6 Fibonacci * NEED WHOLE SEQUENCE NOT JUST LAST NUMBER OF SEQUENCE *
// input is a number
// output is the Fibonacci sequence for that number

const fibonacci = function(number){
    if (number < 2 ) {
        return number
    }
    else 
        return (fibonacci(number -1) + fibonacci(number-2))
}

// console.log(fibonacci(7))


// #7 Factorial
// finds factorial of given number

const factorial = function(num){
    if (num === 1) {
        return 1
    }
    else return num * factorial(num - 1)
}

// console.log(factorial(5))


// #8 Find a way out of the maze

const mazeSolve = function(maze, i, j){
    if(maze[i][j] === 'e'){
        let solved = ('Exit found!')
        return solved;
    }

    //down
    if(maze[i+1] && maze[i+1][j] !== '*'){
        console.log('D')
        return mazeSolve(maze, i+1, j)
    }

    //right
    if(maze[i][j+1] && maze[i][j+1] !== '*'){
        console.log('R')
        return mazeSolve(maze, i, j+1)
    }
}

let smallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

// console.log(mazeSolve(bigMaze, 0, 0))


// #9 Find ALL the ways out of the maze


// #10 Anagrams
// input a string
// output a list of all rearrangements of the string

const anagrams = function(word){
    var anagramResult = []
    if(word.length === 1){
        return [word]
    }
    for(let i = 0; i < word.length; i++){
        var restOfWord = word.substr(0, i) + word.substr(i + 1)
        var results = anagrams(restOfWord)

        for(let j = 0; j < results.length; j++){
            anagramResult.push(word[i] + results[j]);
        }
    }
    return anagramResult;
}

// console.log(anagrams('car'))



// #11 Organization Chart



// #12 Binary Representation
// input is a number
// output is the binary representation of that number

const binary = function(num){
    let mod = num % 2
    if(num === 0){
        return ''
    }
    else if(mod === 0){
        return binary(num/2) + '0'
    }
    else if(mod === 1){
        return binary((num-1)/2) + '1'
    }
}

//console.log(binary(12))




