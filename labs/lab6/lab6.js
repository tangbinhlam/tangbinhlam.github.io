/*
Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.
Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"
*/
String.prototype.filter = function (value) {
  return this.valueOf().replaceAll(value, '');
}
console.log("This house is not nice!".filter('not'));

/*
Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]
*/
Array.prototype.bubbleSort = function () {
  let inputArr = this;
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

/*
Exercise 3:
Create an object called Teacher derived from a Person function constructor, and implement
a method called teach that receives a string called subject, and prints out: [teacher's name]
is now teaching [subject]. Create a Teacher object and call its teach method.
Also do the same thing using Object.create. When using Object.create you will need a
factory function instead of a function constructor in order to pass parameters such as
‘name’ to be set in the prototype.
*/
class Person {
  name;
  constructor(name) {
    this.name = name;
  }

  setHobby = hobby => {
    this.hobby = hobby;
  }
}
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach = () => {
    console.log(this.name + " is now teaching " + this.subject);
  }
}

const aPerson = new Person("Lam Tang");

const teacher1 = new Teacher("John Doe", "Math");
teacher1.teach();

/*
Exercise 4:
Write code that will create person, student, and professor objects.
• Person objects have
o name and age fields
o a greeting method that prints out: “Greetings, my name is [name] and I am
[age] years old.”
o a salute method that prints out: “Good morning!, and in case I dont see you,
good afternoon, good evening and good night!”
Student objects inherit name, age, and salute from person. They also have a field
‘major’ and have their own greeting method. Their greeting is “Hey, my name is
[name] and I am studying [major]. The greeting should be output to the console.
• Professor objects inherit name, age, and salute from person. They also have a field
‘department’ and have their own greeting method. Their salutation is “Good day,
my name is [name] and I am in the [department] department.” Output it to the
console.
• Create a professor object and a student object. Call both the greeting and salutation
methods on each.
• Do this exercise once using the object prototype approach for inheritance and then
using the function constructor approach.
*/


(function () {
  //Person object
  const Person = {
    constructor: (name, age) => {
      this.name = name;
      this.age = age;
    },
    greeting: () => { console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old"); },
    salute: () => { console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!"); }
  }


  //Student object
  const Student = Object.create(Person);
  Student.constructor = (name, age, major) => {
    this.major = major;
    return Person.constructor.call(this, name, age);
  };
  Student.greeting = () => {
    console.log("Their greeting is “Hey, my name is " + this.name + " and I am studying " + this.field + ".");
  }

  //Professor object
  const Professor = Object.create(Person);
  Professor.constructor = (name, age, department) => {
    this.department = department;
    return Person.constructor.call(this, name, age);
  }
  Professor.greeting = () => {
    console.log("Good day, my name is " + this.name + " and I am in the " + department + " department.");
  }

  const aPerson = Object.create(Person);
  aPerson.constructor("The Rock", 40);
  aPerson.greeting();
  aPerson.salute();

  const aStudent = Object.create(Student);
  aPerson.constructor("John Doe", 20, "WAP");
  aStudent.greeting();
  aStudent.salute();

  const aProfessor = Object.create(Professor);
  aProfessor.constructor("John Cena", 57, "Computer Science");
  aProfessor.greeting();
  aProfessor.salute();
})();
