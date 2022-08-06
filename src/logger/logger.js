const welcome = "Welcome To My Application";
const name = "Rajesh";

let printName = function () {
  console.log("*****" + welcome + "*****");
  console.log(
    "welcome():" + "I am",
    name,
    "and a part of FunctionUp Plutonium cohort."
  );
};

module.exports.name = name;
module.exports.printName = printName;
