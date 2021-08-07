function KmToMile(mile) {
  const Mile = mile / 1.609;
  return Mile.toFixed(6);
}

console.log(KmToMile(4));
