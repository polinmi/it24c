//input
let num1 = 4;
let num2 = 76;
let string1 = "PAULINE";

// process
function showSum() {
    let sum = num1 + num2;
    return `Addition: ${sum}`; 
}

function showDifference() {
    let diff = num1 - num2;
    return `Subtraction: ${diff}`; 
}

function showProduct() {
    let prod = num1 * num2;
    return `Multiplication: ${prod}`; 
}

function showQuotient() {
    let quot = num1 / num2;
    return `Division: ${quot}`; 
}
//Odd or Even
function showOddOrEven(num) {
    if (num >=0 )  {
         switch (num % 2 === 0) {
        case true :
        return`${num} is even.`;
         
        case false  :
        return`${num} is odd.`;
         }
    }
    
}
//Determine a number if its a prime number
function showPrime(num) {
    if (num <= 1) {
        return `${num} is neither a prime number or composite number.`;
    } else if (num === 2) {
        return `${num} is a prime number.`;
    } else if (num % 2 === 0) {
        return `${num} is not a prime number.`;
    } else {
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) {
                return `${num} is not a prime number.`;
            }
        }
        return `${num} is a prime number.`;
    }
}
//Determine a string if its a palindrome
function showPalindrome(string) {
    let cleanedString = string.toLowerCase(); 
    let len = cleanedString.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanedString[i] !== cleanedString[len - 1 - i]) {
            return `'${string}' is not a palindrome.`;
        }
    }
    return `'${string}' is a palindrome.`;
}

// output
console.log(showSum());
console.log(showDifference());
console.log(showProduct());
console.log(showQuotient());
console.log(showOddOrEven(num1));
console.log(showOddOrEven(num2));
console.log(showPrime(num1));
console.log(showPrime(num2));
console.log(showPalindrome(string1));
