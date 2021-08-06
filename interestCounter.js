/* 
make a function , take a 

// A	=	final amount
P	=	initial principal balance
r	=	annual interest rate shoud divided via 100.
t	=	time (in years)
as a parameter

then Make take a variable and write the formula in js expression . then return it 



*/

function InterestCounter(PrincipalAmount, InterestRate, TimeFrameInYear) {
  const Interest = (PrincipalAmount * InterestRate * TimeFrameInYear) / 100;

  return "Final Interest is " + Interest;
}

const INTEREST = InterestCounter(10000, 5, 3);
console.log(INTEREST);
