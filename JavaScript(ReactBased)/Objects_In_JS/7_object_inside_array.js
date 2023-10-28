// Object inside Array

// Real world Application :

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

console.log(users);

// Iterating Array :

for (let user of users) {
  console.log(user);
}
