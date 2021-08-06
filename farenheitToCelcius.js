function FarenHeitToCelcius(FarenHeit) {
  const celcius = ((FarenHeit - 32) * 5) / 9;
  return FarenHeit + " To Celcius is " + celcius;
}

console.log(FarenHeitToCelcius(102));
