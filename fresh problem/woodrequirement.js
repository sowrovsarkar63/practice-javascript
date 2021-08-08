/* 
chair = 3cft/perchair

table = 10cft/pertable

bed = 50cft/per bed 


*/

function woodCalculator(chair, table, bed) {
  const percharWood = 3;
  const pertableWood = 10;
  const perbedWood = 50;

  const chairWoodQ = chair * percharWood;
  const tableWoodQ = table * pertableWood;
  const bedWoodQ = bed * perbedWood;

  const totalWood = chairWoodQ + tableWoodQ + bedWoodQ;

  return totalWood;
}

const firstOption = woodCalculator(1, 1, 1);
console.log("for 1 table and chair and bed ", firstOption);
