// Nested Destructing

const users = [
  {
    userid: 1,
    user_name: "Yatin Chaudhari",
    gender: "male",
  },
  {
    userid: 2,
    user_name: "siddesh",
    gender: "male",
  },
  {
    userid: 3,
    user_name: "shivani",
    gender: "female",
  },
  {
    userid: 4,
    user_name: "Siddhi Chaudhari",
    gender: "female",
  },
];

// Here we Destructured Array Where we have Objects as Value in it

const [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);

// Now These user Object also have key value pairs in it
// how can we destructure it :

const { userid: userid1, user_name: user_name1, gender: gender1 } = user1;

console.log(userid1);
console.log(user_name1);
console.log(gender1);

// Assigning variable as well
const [
  { user_name: user1_username, userid: user1_id, gender: user1_gender },
  { user_name: user2_username, userid: user2_id, gender: user2_gender },
  { user_name: user3_username, userid: user3_id, gender: user3_gender },
] = users;
console.log(user1_username);
console.log(user1_id);
console.log(user1_gender);

console.log(user2_username);
console.log(user2_id);
console.log(user2_gender);

console.log(user3_username);
console.log(user3_id);
console.log(user3_gender);
