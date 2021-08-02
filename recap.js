var FavoriteBook = '4 hour work week ';
var FavBookList = ["personal branding ","Recharge your down bettery","hacking","islamic"];

var BookPos =  FavBookList.indexOf('hacking');
console.log(BookPos);

// FavBookList[1] = "Another islamic book";

if (FavBookList[2] == "hacking") {
    console.log("I am hacker ");
}else{
    console.log("I am packer");
}


for (let i = 0; i < FavBookList.length; i++) {
    const element = FavBookList[i];
    console.log("Book name is ",element);
    
}