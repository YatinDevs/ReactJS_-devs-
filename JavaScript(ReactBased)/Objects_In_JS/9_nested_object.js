let user1 = {
  name: "Karan",
  address: {
    personal: "Delhi",
    area: "CivilLines",
  },
  office: {
    state: "Mumbai",
    area: { landmark: "Bandra" },
  },
};

let parent = "employee";

let employeObj = {};

function flatTheObj(user, parent) {
  for (let key in user) {
    if (typeof user[key] === "object") {
      flatTheObj(user[key], `${parent}_${key}`);
    } else {
      employeObj[`${parent}_${key}`] = user[key];
    }
  }
}

flatTheObj(user1, parent);
console.log(employeObj);
