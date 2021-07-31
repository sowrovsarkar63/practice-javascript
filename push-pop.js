// add elements to array
var lastBanch = ['kalam','balam','salam'];
lastBanch.push('jalam');
lastBanch.push('palam');
lastBanch.push('nalam');
// console.log(lastBanch);
var friendsAge = [12,13,12,17];
friendsAge.push(15);
console.log(friendsAge);


// Remove elements from an array 

friendsAge.pop();
var lastAge = friendsAge.pop();
console.log(friendsAge);
// var lastAge = friendsAge.pop();
console.log(lastAge);

// JavaScript remove item from beginig 

// javascript array add elemnent in the beginning 

friendsAge.unshift(18);
friendsAge.unshift(19);
friendsAge.unshift(19.3);
friendsAge.shift();
ageShift =  friendsAge.shift();

console.log(friendsAge);
console.log(ageShift);