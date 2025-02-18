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
lexus.setBrand("lexux")
/* console
fortuner 
typeof fortuner 
fortuner.start()
fortuner.stop()
 */