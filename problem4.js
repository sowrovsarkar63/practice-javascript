function perfectFriend(friends) {
  /*   Define best friend empty vairable*/
  let GetFriendName = "";

  //   Check input value
  if (friends.length == 0) {
    return "You've entered empty array ";
  }
  if (typeof friends != "object") {
    return "You've never passed array object ";
  }

  //   Loop through the array and check the conditin
  for (const friendName of friends) {
    if (friendName.length == 5) {
      GetFriendName = friendName;
      break; //If  got 5 length name then break .
    }
  }

  return GetFriendName;
}

// test function
const FriendList = ["emon", "asif", "ashik", "akher", "zion"];
console.log(perfectFriend(FriendList)); //ashik
