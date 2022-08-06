const nameOfBatch = "Plutonium";
let today = new Date();
// let today1 = new Date("07/18/2022");

const printDate = function () {
  // let different = today.getTime() - today1.getTime();
  // let TotalDays = Math.ceil(different / (1000 * 3600 * 24));
  // // console.log(TotalDays);
  // const totalWeek = Math.floor(TotalDays / 7);
  // // console.log(totalWeek);
  console.log("printDate(): " + today.getDate());
  console.log("printMonth(): " + (today.getMonth() + 1));
  // let date =
  //   nameOfBatch +
  //   ",  W" +
  //   totalWeek +
  //   "D" +
  //   TotalDays +
  //   ",  " +
  //   "The topic for today is NodeJS Module System.";

  const date1 =
    nameOfBatch + ", W3D3, the topic for today is NodeJS Module System.";
  console.log("getBatchInfo(): " + date1);
};

module.exports.date = printDate;
