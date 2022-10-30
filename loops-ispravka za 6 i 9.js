//1. Zadatak Write a for loop that will iterate from 0 to 15. For each iteration,
//  it will check if the current
// number is odd or even, and display a message to the screen.
for (var i = 0; i < 16; i++) 
{
    if(i%2)
    {
    console.log("1. ZADATAK: Number is odd:  "+ i);
    }
    else
    {
        console.log("1. ZADATAK:Number is even:  "+ i);
    }
}
//2. Zadatak Write a program to sum the multiples of 3 and 5 under 1000.
var rez = 0;
for (var g = 0; g < 1000; g++)
{
    if (g % 3 == 0 && g % 5 == 0)
    {
       rez += g;
    }
}
console.log("2. ZADATAK:Sum is : "+ rez);


//3. Zadatak Write a program that will iterate from 0 to 10 and display squares of numbers.
result=1;
for (var j = 1; j < 11; j++) 
{
    result=j*j;
    console.log("3. ZADATAK: " +result);
}
//4. Zadatak Write a program to compute the sum and product of an array of integers.

niz=[1,2,3,4,5,6,14];
sum=0;
product=1;

for(k=0;k<niz.length; k++)
{
sum += niz[k];
product*=niz[k];
}
console.log("4. ZADATAK:Sum is " + sum + " and product is " + product);

//5. Zadatak Write a program which prints the elements of the following array as a single string.

var  result1=0;
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
for(m=0;m<x.length; m++)
{
    result1 += x[m];
}
    console.log("5. ZADATAK:Elements of the following array as a single string: " + result1);

//6. Zadatak Write a program that prints the elements of the following array.
var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];
console.log("6. ZADATAK:var a=[ ")
for(s=0;s<a.length; s++){
console.log("[");
for (var s1 in a[s]) 
{
 console.log(a[s][s1]+",");
}
console.log("],");
}
console.log("]")
//7. Zadatak Write a program that outputs the sum of squares of the first 20 numbers.
var z=20;
var result4=0;
var result5=0;

for (var l = 0; l <= z; l++) 
{
    result4=l*l;
    result5+=result4;
}
console.log("7. ZADATAK:sum of squares of the first 20 numbers: " + result5);

//8. Zadatak Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.
var niz1 =[80, 77, 88, 95, 68];
var niz2=["David ","Mark ","Dany ", "John ","Thomas "];

for(p=0; p< niz2.length; p++)
{
if (niz1[p] < 60)
{
    console.log("8. ZADATAK:" +niz2[p] +"marks is: F");
}
else if(60 <= niz1[p] && niz1[p]< 70)
{
    console.log(niz2[p] +"marks is: D");
}
else if(70 <= niz1[p] && niz1[p] < 80)
{
    console.log(niz2[p] +"marks is: C");
}
else if(80 <= niz1[p] && niz1[p] < 90){
    console.log(niz2[p] +"marks is: B");
}
else if( 90 <= niz1[p]){
    console.log(niz2[p] +"marks is: A");
}
else
{
    console.log("Error!");
}
console.log(niz1[p]);
}

//Zadatak 9
var result6=0;
for (var h = 1; h <= 100; h++)
{
if(h%15==0)
{
    result6="FizzBuzz ";
}
else if(h%3==0)
{ 
    result6="Fizz";
}
else if(h%5==0)
{
    result6="Buzz";
}
else{
    result6=h;
}
console.log("9. ZADATAK:Numbers from 1 to 100, with two exceptions " + result6);
}