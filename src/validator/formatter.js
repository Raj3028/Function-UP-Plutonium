const name = "       FunctionUp                    ";

const name1 = function () {
  console.log("trim():" + name.trim());
  console.log("changetoLowerCase():" + name.toLocaleLowerCase());
  console.log("changeToUpperCase():" + name.toLocaleUpperCase());
};

module.exports.trim = name1;
