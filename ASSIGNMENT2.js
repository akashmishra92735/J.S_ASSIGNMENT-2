                            //JAVASCRIPT ASSIGNMENT-2
//Q.1 Q1.Find Grades
//Answers-->                       
let M = 1; // You can change this value to test with different marks
let gradeCategory;
if (M <= 10) {
  gradeCategory = 1;
} else if (M <= 20) {
  gradeCategory = 2;
} else if (M <= 30) {
  gradeCategory = 3;
} else if (M <= 40) {
  gradeCategory = 4;
} else {
  gradeCategory = 5;
}

switch (gradeCategory) {
  case 1:
    console.log("E");
    break;
  case 2:
    console.log("D");
    break;
  case 3:
    console.log("C");
    break;
  case 4:
    console.log("B");
    break;
  case 5:
    console.log("A");
    break;
  default:
    console.log("Invalid Marks");
}

//Q.2 Q2. Get Value
//Answers--->
let C = 'E';  // Input character, you can change this to test
let output;
switch (C) {
  case 'P':
  case 'p':
    output = "PrepBytes";
    break;
  case 'Z':
  case 'z':
    output = "Zenith";
    break;
  case 'E':
  case 'e':
    output = "Expert Coder";
    break;
  case 'D':
  case 'd':
    output = "Data Structure";
    break;
  default:
    output = "Invalid Character";
}
console.log(output);

//Q3. Find the maximum out of three numbers?.
//Answers-->
let A = 2;
let B = 5;
let C = 4;
let max;
if (A === B && B === C) {
  max = -1;
} else if (A >= B && A >= C) {
  max = A;
} else if (B >= A && B >= C) {
  max = B;
} else {
  max = C;
}
console.log(max);

//Q4. Second Smallest
//Answers-->
let X = 2;
let Y = 9;
let Z = 23;
let secondSmallest;
if ((X > Y && X < Z) || (X > Z && X < Y)) {
  secondSmallest = X;
} else if ((Y > X && Y < Z) || (Y > Z && Y < X)) {
  secondSmallest = Y;
} else {
  secondSmallest = Z;
}
console.log(secondSmallest);

//Q5. Check whether the triangle is Acute or Obtuse
//Answers-->
let A = 60;
let B = 100;
let C = 20;
let result;
if (A <= 0 || B <= 0 || C <= 0 || A + B + C !== 180){
  result = "Invalid Triangle";
} else {
  if (A > 90 || B > 90 || C > 90) {
    result = "Obtuse";
  } else if (A < 90 && B < 90 && C < 90) {
    result = "Acute";
  } else {
    result = "Right"; 
  }
}
console.log(result);


