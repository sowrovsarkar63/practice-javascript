function gradeCal(Marks) {
  switch (true) {
    case typeof Marks != "number" && Marks !== null:
      return "You have to enter valid number ";
      break;
    case Marks > 100:
      return "Invalid number ";
    case Marks >= 80:
      return "You've got 'A+' Grade";
      break;
    case Marks < 80 && Marks >= 70:
      return "You've got 'A' Grade";
      break;

    case Marks < 70 && Marks >= 60:
      return "You've got 'A-' Grade";
      break;

    case Marks < 60 && Marks >= 50:
      return "You've got 'B' Grade";
      break;

    case Marks < 50 && Marks >= 40:
      return "You've got 'C' Grade";

    case Marks < 40 && Marks >= 33:
      return "You've got 'D' Grade";
      break;
    case Marks < 33:
      return "You've failed ..This is so sad ";
      break;
    default:
      return "NO number entered";
      break;
  }
}
var grade = gradeCal(90);
console.log(grade);
