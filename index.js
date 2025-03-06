//FUNCTION TO RETURN THE SUM

let arr = [3, 4, 6, 7, 8];

function sum(newarr) {
    let tot = 0;
    for (const i in newarr) {
        tot += newarr[i];
    }
    return tot;
}

console.log("The sum of the array elements is " + sum(arr));

//FUNCTION TO RETURN THE AVERAGE

function average(newarr) {
    let tot = 0;
    for (const i in newarr) {
        tot += newarr[i];
    }
    return (tot / newarr.length);
}

console.log("The average of the array elements is " + average(arr));

//FUNCTION TO RETURN THE LONGEST STRING


function longstring(newarr) {
    let string_length = newarr[0].length;
    let longstring = newarr[0];
    for (const i in newarr) {
        if (newarr[i].length > string_length) {
            string_length = newarr[i].length;
            longstring = newarr[i];
        }
    }
    return longstring;

}
let arrstrings = ["banana", "apple", "watermelon", "kiwi"];
console.log("The longest of all strings is " + longstring(arrstrings));

//STRINGS LONGER THAN THE GIVEN NUMBER
function longthannum(newarr, num) {
    let newarray = [];
    for (const i in newarr) {
        if (newarr[i].length > num) {
            newarray.push(newarr[i]);
        }

    }
    return newarray;

}
let array = ["bue", "red", "orange", "green"];
console.log("The strings longer than the given number " + longthannum(array, 4));

//PRINT NUMBERS FROM 1 TO N USING RECURSION
function printnum(num1, n) {
    if (num1 == n + 1)
        return;
    console.log(num1);
    return printnum(num1 + 1, n);
}
printnum(1, 4);

//PART2
//THINKING METHODICALLY
console.log("SORTING THE ARRAY BY AGE");
let result = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
result.sort((a, b) => a.age - b.age);
console.log(result);

//FILTER ARRAY TO REMOVE AGE GREATER THAN 50
console.log("FILTERING THE ARRAY TO REMOVE AGE GREATER THAN 50");
const filtered_array = result.filter((ages) => ages.age > 50)
console.log(filtered_array);

//MAP ARRAY TO PERFORM THE GIVEN CHANGES
console.log("MAPPING ARRAY TO CHANGE KEY");
const map1 = result.map(({ "occupation": value }) => ({ "job": value }))
console.log(map1);

//MAP ARRAY TO INCREMENT AGE BY 1
console.log("INCREMENTING AGE BY ONE");
const map2 = result.map((incre) => parseInt(incre.age) + 1);
console.log(map2);

//REDUCE TO CALCULATE SUM OF AGES
const sum1 = result.reduce((accumulator, currentValue) => (parseInt(accumulator.age) + parseInt(currentValue.age), 0));
console.log(sum1);

//PART3
//THINK CRITICALLY
function incrage(obj2) {
    obj2.age = parseInt(obj2.age) + 1;
    const now = new Date();
    obj2.updated_at = now;
    return obj2;
}
const obj1 = { id: "42", name: "Bruce", occupation: "Knight", age: "41" };
console.log("The object before incrementing age -  ");
console.log(obj1);
console.log("The object after incrementing age -  ");
console.log(incrage(obj1));

//INCREMENTING AGE ON OBJECT COPY
function incrcopy(obj) {
    obj.age = parseInt(obj.age) + 1;
    const now = new Date();
    now.setMonth(4);
    obj.updated_at = now;
    return obj;
}
let jsonString = JSON.stringify(obj1);
const objcopy = JSON.parse(jsonString);
console.log("The copied object after incrementing age ");
console.log(incrcopy(objcopy));




