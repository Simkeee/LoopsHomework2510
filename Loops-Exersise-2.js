// 1. Write a program that calculates the maximum of two given numbers.
function max2nmb(number1, number2)
{
    if(number1<number2)
    {
        max=number2;
    }
    else
    {
        max=number1;
    }
    return max;
}
console.log( "1.Zadatak " + max2nmb(6,5));

// 2.Zadatak Write a program that checks if a given number is odd.
function oddNumb(number3)
{
    if(number3%2)
    {
    isOdd=true;
    }
    else
    {
    isOdd=false;
    }
    return isOdd;
}
console.log("2.Zadatak "+ oddNumb(-45));

//Zadatak 3 Write a program that checks if a given
//number is a three digit long number.
function isthreeLN(number4)
{
    if(number4/100>=1 && number4/1000<1)
    {
        threeDG=true;
    }
    else
    {
        threeDG=false;
    }
    return threeDG;
}
console.log("3.Zadatak " + isthreeLN(999));

// 4. Write a program that calculates an arithmetic mean of four numbers.
function arithmeticM(n1,n2,n3,n4)
{
    n5=(n1+n2+n3+n4)/4
    return n5;
}
console.log("4.Zadatak " + arithmeticM(1,2,3,4));

// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw: 
// *****
// *   *
// *   *
// *   *
// ***** 
var it=5;
var niz="";

for (var i=0;i<=it-1;i++)
{
    if(i==0||i==it-1){
        niz= [niz+"*****\n"];
    }
    else
    {
        niz= [niz+"*"+" ".repeat(it-2)+"*\n"]
    }
    
}
console.log("5.Zadatak:\n" + niz);

// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
function horizontalChart(x)
{
var x1="*"
for (let q = 0; q < x; q++) 
{
    x1=x1+" *";
}
return x1;
}
console.log("6.Zadatak:\n" + horizontalChart(7));

// 7. Write a program that calculates a number of digits of a given number.
function numberDig(y)
{
    if(y<0)
    {
        y=y*(-1);
    }
    var y1=0;
    while(y>1)
    {
        y=y/10;
        y1=y1+1;
    }
    return y1;
}
    console.log("7.Zadatak:" + numberDig(-782345));

// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
function numberApp(arr,z)
{
    var z1=0;
for (let q = 0; q < arr.length; q++) {
    if(arr[q]==z)
    {
       z1= z1+1;
    }
}
return z1;
}
console.log("8.Zadatak: " + numberApp([0,1,3,4,3,6,98,99,4,3],3));

// 9. Write a program that calculates the sum of odd elements of a given array.
function sumOdd(arr1)
{
    var k=0;
for (let q = 0; q < arr1.length; q++) 
{
    if(arr1[q]%2)
    {
        k= arr1[q]+k;
    }
}
return k;
}
console.log("9.Zadatak: " + sumOdd([0,1,3,4,3,6,98,99,4,3]));

// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.
function numberLett(str,v)
{
    let str1 = str.toUpperCase();
    let v1=v.toUpperCase();
    var j=0;
    
for (let q = 0; q < str1.length; q++) 
{
    if(str1[q]==v1)
    {
       j= j+1;
    }
}
return j;
}
console.log("10.Zadatak: " + numberLett("Avala","a"));

// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc. 
function concatenatesStr(str2,w)
{
    var j="";
    for (let q = 0; q < w; q++) 
    {
        j=str2+j;
    }

return j;
}
console.log("11.Zadatak: " + concatenatesStr("Avala",4));