// Function declaration

function calculation1(number) {
    const squared = number * number;
    const sum = squared + squared;
    return sum * sum;
}

const result1 = calculation1(16);
console.log(result1);

//Function expression

const calculation2 = function(number2) {
    const squared2 = number2 * number2;
    const sum2 = squared2 + squared2;
    return sum2 * sum2;
};

const result2 = calculation2(16);
console.log(result2);

//Arrow function
const calculation3 = number3 => {
    const squared3 = number3 * number3;
    const sum3 = squared3 + squared3;
    return sum3 * sum3;
};

const result3 = calculation3(16);
console.log(result3);
