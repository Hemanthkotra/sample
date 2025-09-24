let person = {
name: "Srinivas",
age: 20,
isStudent: true,
greet: function () {
console.log("Hello, I am " + this.name);
}
};
console.log(person.name);     
console.log(person.age);    
person.greet();