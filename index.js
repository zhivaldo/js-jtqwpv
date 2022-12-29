class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullname(name, surname) {
    return "Hello " + name + " " + surname;
  }
}

let test = new Person();
let fullname = test.fullname("Jasar", "Ahmedovski");
console.log(fullname);

let osoba1 = new Person("Josip", "Broz");
let osoba2 = new Person("Jovan", "Skerlic");

console.log(osoba1);
console.log(osoba2)