let bonus = 20;


function sum(first, second) {
    let result = first + second + bonus;
    if(result > 9) {
        let mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";

    }
    return result;
}

const output = sum(10, 3);
console.log(bonus);
console.log(output);