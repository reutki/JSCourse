//construction functions
function user(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = `Hello ${this.name} your id is ${this.id}`;
}

user.prototype.exit = function (name) {
  console.log(`User ${this.name} left`);
};

const ion = new user("Ion", 28);
ion.exit();
const alex = new user("Alex", 20);
alex.ion();
