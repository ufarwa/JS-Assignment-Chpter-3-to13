// //assignment chapter 3
// //Q1)Declare a variable called age & assign to it your age. Show
// //your age in an alert box.

// let age = 23;
// alert("I am " + age + " years old");
// //Q2)Declare & initialize a variable to keep track of how many
// //times a visitor has visited a web page. Show his/her
// //number of visits on your web page. For example: “You
// //have visited this site N times”.
// let visited= 14;
// alert("you have visited this site " + visited+" times");
// //Q3)Declare a variable called birth year and assign to it your birth year.Show the following message in your browser.
// let birthYear = 1999;
// document.write("My birth year is" + birthYear + "<br>" + "Data type of my declared variable is number");
//Q4)
// let visitorName="Jhon Doe";
// let productTitle="T-shirts";
// let quantity= 5;
// document.write(visitorName + " ordered " + quantity + productTitle + "(s)" + " on XYZ Clothing store" )

// // Chapter 4 Assignment

// //Q1)Declare 3 variables in one statement.
//let Name,Class,DOB;
//Name="Farwa";
//Class="sylani";
//DOB= 1999;

// //Q2)Declare 5 legal & 5 illegal variable names.
// legal variable names
//nameOfStudent= "farwa ";
//classOfstudent= "sylani ";
//totalFee$= 5000;
//class_Name="JS ";
//studentName_="FARWA ";
// document.write(nameOfStudent  + "<br>"+  classOfstudent +"<br>" +totalFee$ +"<br>" + class_Name +"<br>" + studentName_)
// illegal variable names
//names#Student= "farwa ";
//class(student= "sylani ";
//totalFee!= 5000;
//class Name="JS ";
//studentName%="FARWA ";
// Q3)Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
// document
// document.write("<b>Rules for naming JS variables</b>" + "<br>"+"<br>" +"Variable names can only contain, numbers, $ and _. For example : $my-1stVariable" + "<br>" + "Variable must begin with a letter, $ or _. For example : $name,_name or name" +"<br>"+ "Variable names are case sensitive" + "<br>"+ "Variable names should be JS Keywords")

// // Chapter 5 Assignment
//Q1)Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// let firstNum= 3;
// let secNum = 5;
// let sum = firstNum + secNum;
// document.write("Sum of " + firstNum  +" and " +secNum + " is " + sum )

// Q2)Repeat task1 for subtraction, multiplication, division &
// modulus.
// subtraction
// let firstNum= 3;
// let secNum = 5;
// let sub = firstNum - secNum;
// document.write("Diffrence of " + firstNum  +" and " +secNum + " is " + sub );
//multiplication
// let firstNum= 3;
// let secNum = 5;
// let mul = firstNum * secNum;
// document.write("multiplication of " + firstNum  +" and " +secNum + " is " + mul );
//division
// let firstNum= 3;
// let secNum = 5;
// let div = firstNum / secNum;
// document.write("division of " + firstNum  +" and " +secNum + " is " + div );
//modulus
// let firstNum= 3;
// let secNum = 5;
// let mod = firstNum % secNum;
// document.write("modulus of " + firstNum  +" and " +secNum + " is " + mod );
// Q3)Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
// let number;
// document.write("Value after variable declaration is: " + number + "<br>");
// number = 5;
// document.write("Initial value: " + number + "<br>");
// number++;
// document.write("Value after increment is: " + number + "<br>");
// number =number + 7;
// document.write("Value after addition is: " + number + "<br>");
// number--;
// document.write("Value after decrement is: " + number + "<br>");
// let remainder = number % 3;
// document.write("The remainder is: " + remainder + "<br>");

// Q4)Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
// let ticketPrice= 600;
// fiveTicketPrice = 600*5;
// document.write("Total cost to buy 5 tickets to a movie is " + fiveTicketPrice + "PKR");

// Q5)Write a script to display multiplication table of any
// number in your browser.
// let num = 5;
// document.write("Table of " +num +"<br>")
// for(i=1;i<=10;i++){
//     document.write(5 + "x" + i + "="+ num*i + "<br>");  
// }
// Q6)The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// let celciusTemp=70;
// let fahrenheitTemp= (celciusTemp-32)*5/9;
// document.write(celciusTemp  + "°C"+ " is " + fahrenheitTemp +"°F" +"<br>"); 
// let F=77;
// let C= (F*5/9)+32;
// document.write(F  + "°F"+ " is " + C +"°C");

// Q7)Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// let priceOfItem1 = 650;
// let quantityOfItem1= 3;
// let priceOfItem2 = 100;
// let quantityOfItem2= 7;
// let shippingCharges = 100;
// let total = priceOfItem1 + priceOfItem2 + shippingCharges;
// document.write("<b>Shopping Cart</b>"+ "<br>" +"<br>" + "price of item 1 " + priceOfItem1 + "<br>" + "Quantity of item 1 " + quantityOfItem1 + "<br>" + "price of item 2 " + priceOfItem2 + "<br>" + "Quantity of item 2 " + quantityOfItem2 + "<br>" + "Shipping Charges " + shippingCharges + "<br>"+ "<br>"+ "Total cost of your order is " + total);

// Q8)Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
// let marksObtained = 740;
// let totalMarks = 900;
// let percent = (marksObtained/totalMarks)*100;
// document.write("<b>Marks Sheet</b>" + "<br>"+"<br>"+"<br>"+ "total marks: " + totalMarks +"<br>"+ "marks Obtained " + marksObtained +"<br>"+ "Percentage: "+ percent + "%" ) 

// Q9)Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
// Conversion rates
// const USdollersToPkr = 104.80;
// const saudiRiyalToPkr = 28;
// const USDAmount = 10;
// const SaudiRiyalAmount = 25;
// const totalPkr = (USDAmount * USdollersToPkr) + (SaudiRiyalAmount * saudiRiyalToPkr);
// document.write("<b>Currency in PKr</b>"+"Total currency in PKR: " + totalPkr);

// Q10)Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// let num = 10;
// let ans = (num +5 *10)/2;
// document.write(ans);

// Q11)The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// let currentYear = 2023;
// let DOB = 1999;
// let age= 2023-1999;
// document.write("<b>Age Calculator</b>" + "<br>" +  "<br>" +"Current Year: " + currentYear + "<br>" + "Birth Year " +DOB + "<br>" + "Your age: " + age);

// Q12)The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// let radius = 5;
// let circumference = 2*3.142 *radius;
// document.write("<b>The Geometrizer</b>" + "<br>" +  "<br>" +"The circumference is: " + circumference +"<br>");
// let area = 3.142*radius^2;
// document.write( "The area is: " + area);

// Q13)The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
// let favouriteSnack = "Nuggets";
// let myAge= 24;
// let maxAge= 40;
// let estimatePerday = 3;
// let total = (maxAge - myAge)*estimatePerday
// document.write("<b>life time Supply calculator</b>" + "<br>" +  "<br>" + "You will need " + total + favouriteSnack + "to,last you until the rip old age of " + maxAge);

// chapter 6 to 9 Assignment
// Q1)Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// let number = 10;
// document.write("<b>Result</b>" + "<br>" + "The value of a is: " + number + "<br>" + "........................................." + "<br>" + "The value of ++a is: " + ++number +"<br>" + "Now the value of a is: " + number + "<br>" +  "<br>" + "The value of a++ is: " + number++ +"<br>" + "Now the value of a is: " + number + "<br>" +  "<br>" + "The value of --a is: " + --number +"<br>" + "Now the value of a is: " + number + "<br>" +  "<br>" +"The value of a-- is: " + number-- +"<br>" + "Now the value of a is: " + number )

// Q2)What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// // answer
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("The result is: " + result + "<br>")
// document.write("--a: " + --a +"<br>");
// document.write("--a - --b: " + (--a - --b) +"<br>");
// document.write("--a - --b + ++b: " + (--a - --b + ++b) +"<br>");
// document.write("--a - --b + ++b + b--: " +  (--a - --b + ++b + b--) +"<br>");

// Q3)Write a program that takes input a name from user &
// greet the user.
// let Name = prompt("Enter your name");
// document.write("welcome " + Name );
// Q5)Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// let num = +prompt("Enter a number");
// document.write("Table of " +num +"<br>")
//          if(num==num){
//             for(i=1;i<=10;i++)
//                 {
//                     document.write(num + "x" + i + "="+ num*i + "<br>");}
//          }
// else{
//     for(i=1;i<=10;i++)
//     {
//         document.write(5 + "x" + i + "="+ 5*i + "<br>");}
// }
// Q6)Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
// let sub1 = prompt("enter subject 1");
// let sub2 = prompt("enter subject 2");
// let sub3 = prompt("enter subject 3");
// let totalMarks = 100;
// let mrksOfsubject1 = +prompt("enter subject 1 marks");
// let mrksOfsubject2 = +prompt("enter subject 2 marks");
// let mrksOfsubject3 = +prompt("enter subject 3 marks");
// let per1 = (mrksOfsubject1/100)*100;
// let per2 = (mrksOfsubject2/100)*100;
// let per3 = (mrksOfsubject3/100)*100;
// let obatainedTotalMarks= mrksOfsubject1+mrksOfsubject2+mrksOfsubject3;
// let perTotal = (obatainedTotalMarks/300)*100
// document.write("<b>Students Total Marks Obtained Percentage</b>"+"<br>"+ sub1 + "    100         " + mrksOfsubject1 + per1+"%" +"<br>"+ sub2 + "    100         " + mrksOfsubject2 +"    "+"    "+per2+"%" +"<br>"+ sub3 + "    100         " + mrksOfsubject3 +"    "+ per3+"%" +"<br>"+ "    300         " + obatainedTotalMarks +"    "+ perTotal+"%" )

// // Assignment Chapter 9 and 10
//Q1)Write a program to take "city name as input from user." If users enters "karachi", wlcome the users like this.
// let cityName = prompt("Enter your city");
// if(cityName==="karachi"){
//     document.write("welcome to the city of light");
// }
// else{
//     document.write("welcome to " + cityName)
// }

// //Q2)
// let gender = prompt("enter gender. male or female");
// if(gender === "male"){
//     document.write("Good Morning Sir")
// }
// else{
//     document.write("Good morning Ma'am")
// }
// //Q3)
// let color = prompt("enter color name: Red, Yellow , Green")
// if(color === "Red"){
//     document.write("Must stop")
// }
// else if(color === "Yellow"){
//     document.write("Ready to move")
// }
// else{
//     document.write("Move now")
// }

// //Q4)
// let fuel = +prompt("Enter the remaining fuel");
// if(fuel<0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("move have enough fuel")
// }
 
// //Q5)Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//a.
// var a = 4;  // ans) Displayed
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//b.
// var b = 82;   // ans) Not displayed
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// c.
// var c = 12;  // ans) Displayed
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
 // d.
//  var materialCost = 20000;  // ans) Displayed
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// c.
// if (true){  // ans) Displayed
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// f.
// if("car" < "cat"){  //ans) Displayed
//     alert("car is smaller than cat");
//     }

// Q6)Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// let english = prompt("enter the marks of english");
// let urdu = prompt("Enter the of urdu");
// let maths = prompt("Enter the marks of maths");
// let totalMarks = english+urdu+maths;
// let percent = (totalMarks/300)*100;
// document.write("<b>Marks Sheet</b>" +"<br>"+ "Total Marks: 300" +"<br>"+"Marks Obtained: " + totalMarks +"<br>" + "Percentage: " + percent+"%" +"<br>" )
// if(percent>=80 && percent<=100){
//     document.write("Grade: A1" +"<br>"+ "Remarks: Excellent");
// }
// else if(percent>=70 && percent<80){
//     document.write("Grade: A" +"<br>"+ "Remarks: Good");
// }
// else if(percent>=60 && percent<70){
//     document.write("Grade: B" +"<br>"+ "Remarks: You Need to improve");
// }
// else{
//     document.write("Grade: Fail" +"<br>"+ "Remarks: Sorry")
// }

// Q7)Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// let secretNum=5;
// let guess = +prompt("Guess the number from 0 to 9");
// if(guess===secretNum){
//     document.write("Bingo! Correct answer")
// }
// else if(guess>0 && guess<2){
//     document.write("Close enough")
// }
// else{
//     document.write("Wrong guess")
// }
// //Q8)Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// let number= +prompt("enter a number");
// if(number/3===0){
//     document.write("the number is divisible by 3")
// }
// else{
//     document.write("number is not divisible by 3")
// }

// //Q9)Write a program that checks whether the given input is an
// even number or an odd number.
// let number= +prompt("enter a number");
// if(number%2===0){
//     document.write("the given number is even");
// }
// else if(number%2!==0){
//     document.write("the given number is odd")
// }
//Q10)Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// let temperature = +prompt("enter a temperature");
// if(temperature>40){
//     document.write("It is too hot outside");
// }
// else if(temperature>30){
//     document.write("The weather is normal");
// }
// else if(temperature>20){
//     document.write("Today’s Weather is cool");
// }
// else if(temperature>10){
//     document.write("OMG! Today’s weather is so Cool");
// }
// else{
//     document.write("Please write the valid temperature");
// }
// Q11)Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// Take user input for first number, second number, and operation
// let number1 = +(prompt("Enter first number: "));
// let number2 = +(prompt("Enter second number: "));
// let operation = prompt("Enter operation (+, -, *, /, %): ");
// let result;
// if (operation === '+') {
//     result = number1 + number2;
// } else if (operation === '-') {
//     result = number1 - number2;
// } else if (operation === '*') {
//     result = number1 * number2;
// } else if (operation === '/') {
//     if (number2 === 0) {
//         document.write("Error: division by zero");
//     } else {
//         result = number1 / number2;
//     }
// } else if (operation === '%') {
//     if (number2 === 0) {
//         document.write("Error: division by zero");
//     } else {
//         result = number1 % number2;
//     }
// } else {
//     document.write("Error: invalid operation");
// }
// document.write("Result: " + result);
//   Assignment Chapter 12 and 13
// Q1)Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// let character = prompt("Enter a character: ");
// if (character.charCodeAt(0) >= 48 && character.charCodeAt(0) <= 57) {
//     document.write("The given character is a number");
// } else if (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
//     document.write("The given character is an uppercase letter");
// } else if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
//     document.write("The given character is a lowercase letter");
// } else {
//     document.write("The given character is not a number or letter");
// }

// Q2)Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// Take user input for two integers
// let num1 = +(prompt("Enter the first integer: "));
// let num2 = +(prompt("Enter the second integer: "));
// if (num1 > num2) {
//    document.write("The larger integer is: " + num1);
// } else if (num2 > num1) {
//    document.write("The larger integer is: " + num2);
// } else {
//    document.write("The two integers are equal.");
// }

// Q3)Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// Take user input for a number
// let num = +(prompt("Enter a number: "));
// if (num > 0) {
//     document.write("The number is positive");
// } else if (num < 0) {
//     document.write("The number is negative");
// } else {
//     document.write("The number is zero");
// }

// Q4)Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
// Take user input for a character
// let alphabet = prompt("Enter a character: ");
// if (alphabet === "a" || alphabet === "e" || alphabet === "i"|| alphabet === "o" || alphabet==="u" ||
//     alphabet === "A" || alphabet === "E" || alphabet === "I" || alphabet === "O" || alphabet === "U") {
//     document.write("The character is a vowel");
//     return true;}
//  else {
//     document.write("The character is not a vowel");
//     return false;
// }

// Q5)Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
// let password = "Pakistan#1";
// let userPass = prompt("Enter a password");
// if(password===userPass){
// document.write("Correct! The password you entered matches the original password")
// }
// else if(password!==userPass){
//     document.write("Incorrect password")
// }
// else{
//     document.write("Please enter your password")
// // }

// Q6)This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting)
// }
// else{
// greeting = "Good evening";
// document.write(greeting)
// }

// Q8)Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// Take user input for a time in 24-hour clock format
// let time = +(prompt("Enter a time in 24-hour clock format (e.g. 1900 for 7pm): "));
// if (time >= 0000 && time < 1200) {
//     let hours = time / 100;
//     if (hours == 0) {
//         document.write("The time is 12am");
//     } else {
//         document.write("The time is " + hours + "am");
//     }
// } else if (time >= 1200 && time < 2400) {
//     let hours = time / 100 - 12;
//     if (hours == 0) {
//         document.write("The time is 12pm");
//     } else {
//         document.write("The time is " + hours + "pm");
//     }
// } else {
//     document.write("Invalid time input.");
// }
