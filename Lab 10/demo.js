//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }
}
function multiply(){
    var x= 25;
    var y = 42;
    var total =x*y;
    alert("25*42 =" + total);
}
function pencil(){
    var pencils=48;
    var kids = 12;
    var eachkid= pencils/kids;
    alert("Each child gets"+" "+ eachkid);
}
function mean(){
   var number = [25,47,98,46,52];
   var total = number.reduce(sum);
   var avg = total/number.length;
function sum (a,b){
    return a+b;
}
    
    alert("The mean is :"+ " "+avg);
}
function greater(){
    var x=100;
    var y =1000;
    if(x<y){
        alert("No");
    }
    else if(x==y){
        alert("No");
    }
    else{
        alert("Yes");
    }
}
function calculation(){
    var x= 5;
    var y =4;
    var total =5*4;
    if (total>20){
        alert("No");
    }
    else if(total==20){
        alert("No");
    }
    else{
        alert("Yes");
    }
}