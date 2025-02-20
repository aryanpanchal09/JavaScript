{
  const student = {
    fullName: "Aryan Panchal",
    marks: 80,
    printMarks: function () {
      console.log("marks = ", this.marks);
    },
  };
}
/* student
student.printMarks
student.toString */

/* PROTOTYPE EXAMPLE */
{
  const employee = {
    calcTax1() {
      console.log("Tax rate is 10%");
    },
    calcTax2: function () {
      console.log("Tax rate is 10%");
    },
    calcTax3: () => {
      console.log("Tax rate is 10%");
    },
  };

  const karanArjun = {
    salary: 50000,
    calcTax() {
      console.log("tax rate is 20%");
    },
  };

  karanArjun.__proto__ = employee;
}

/* CLASS EXAMPLE */
{
  class ToyotaCar {
    start() {
      console.log("start");
    }

    stop() {
      console.log("stop");
    }

    setBrand(brand) {
      this.brandName = brand;
    }
  }

  let fortuner = new ToyotaCar();
  fortuner.setBrand("fortuner");

  let lexus = new ToyotaCar();
  lexus.setBrand("lexux");
}

/* console
fortuner 
typeof fortuner 
fortuner.start()
fortuner.stop()
 */

/* CONSTRUCTOR EXAMPLE */
{
  class ToyotaCar {
    constructor(brand, mileage) {
      console.log("Creating new object");
      this.brand = brand;
      this.mileage = mileage;
    }
    start() {
      console.log("start");
    }
    stop() {
      console.log("stop");
    }
  }

  let fortuner = new ToyotaCar("fortuner", 10);
  console.log(fortuner);
  let lexus = new ToyotaCar("lexus", 12);
  console.log(lexus);
}
/* INHERITANCE */
{
  class Parent {
    hello() {
      console.log("hello");
    }
  }

  class Child extends Parent {}

  let obj = new Child();

  /* console 
  obj 
  obj.hello() */

  class Person {
    constructor() {
      this.species = "Homo Sapiens";
    }

    eat() {
      console.log("eat");
    }

    sleep() {
      console.log("sleep");
    }

    work() {
      console.log("Do Nothing");
    }
  }

  class Engineer extends Person {
    work() {
      console.log("solve problems, build something");
    }
  }

  class Doctor extends Person {
    work() {
      console.log("treats patients");
    }
  }

  let aryanObj = new Engineer();
}

/* Super Keyword */
{
  class Person {
    constructor() {
      console.log("Enter Parent Constructor");
      this.species = "homo sapiens";
    }

    eat() {
      console.log("eat");
    }
  }

  class Engineer extends Person {
    constructor(branch) {
      console.log("Enter Child Constructor");
      super(); // to invoke parent class constructor
      this.branch = branch;
      console.log("Exit Child Constructor");
    }
    work() {
      console.log("Solve Problems, Build Something");
    }
  }

  let engObj = new Engineer("chemical engineer");
}

/* Super Keyword 2 */

class Person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }

  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name); // to invoke parent class constructor
  }
  
  work() {
    super.eat();
    console.log("Solve Problems, Build Something");
  }
}

let engObj = new Engineer("aryan");

/* 
PRACTISE QUESTIONS 
------------------
You are creating a website for your colledge. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data  */

let DATA = "secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data = ", DATA);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "some new value";
  }
}

let student1 = new User("aryan", "abc@gmail.com");
let student2 = new User("umang", "umang@gmail.com");

let teacher1 = new User("Dean", "dean@gmail.com");

let admin1 = new Admin("admin", "admin@gmail.com");

/* Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data */

/* ERROR HANDLING */
let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a + b =", a + b);
try {
  console.log("a + b = ", a + c);
} catch (err) {
  console.log(err);
}
console.log("Code executing after try and catch block");