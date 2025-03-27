let day = 8;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Not in week");
}

let score = 85; 

switch (true) {
  case score >= 90 && score <= 100:
    console.log("A");
    break;
  case score >= 80 && score < 90:
    console.log("B");
    break;
  case score >= 70 && score < 80:
    console.log("C");
    break;
  case score >= 60 && score < 70:
    console.log("D");
    break;
  case score >= 0 && score < 60:
    console.log("F");
    break;
  default:
    console.log("Not in range");
}
