//FUNCTION TO RETURN THE SUM

let arr = [3,4,6,7,8];

function sum(newarr)
{
    let tot = 0;
    for(const i in newarr)
    {
        tot += newarr[i];
    }
    return tot;
}

console.log("The sum of the array elements is " + sum(arr));

//FUNCTION TO RETURN THE AVERAGE

function average(newarr)
{
    let tot = 0;
    for(const i in newarr)
    {
        tot+= newarr[i];
    }
    return (tot/newarr.length);
}

console.log("The average of the array elements is " + average(arr));

//FUNCTION TO RETURN THE LONGEST STRING


function longstring(newarr)
{
    let string_length = newarr[0].length;
    let longstring = newarr[0];
    for(const i in newarr)
    {
        if(newarr[i].length > string_length)
        {
            string_length = newarr[i].length;
            longstring = newarr[i];
        }
    }
    return longstring;

}
let arrstrings = ["banana","apple","watermelon","kiwi"];
console.log("The longest of all strings is " + longstring(arrstrings));

//STRINGS LONGER THAN THE GIVEN NUMBER
function longthannum(newarr, num)
{
    let newarray = [];
    for(const i in newarr)
    {
        if(newarr[i].length > num)
        {
            newarray.push(newarr[i]);
        }
        
    }
    return newarray;

}
let array = ["bue","red","orange","green"];
console.log("The strings longer than the given number " + longthannum(array, 4));

//PRINT NUMBERS FROM 1 TO N USING RECURSION
function printnum(num)
{
    if(num == 0)
        return;
    console.log(num);
    return printnum(num-1);
}
printnum(4);


