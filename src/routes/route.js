const express = require("express");
const router = express.Router();

//================================================ Assignment- post request-player

let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];
router.post("/players", function (req, res) {
  let playesNames = req.body;
  let newName = playesNames.name;
  //   let isThisRepeatedName = false;

  for (i = 0; i < players.length; i++) {
    if (players[i].name === newName) {
      return res.send("The name is already exists.");
    }
  }

  players.push(playesNames);
  res.send({ players: players });
});
//   ======================OR======================

// router.post("/players", function (req, res) {
//   let playerBody = req.body;
//   let newName = playerBody.name;
//   let isNameRepeated = false;

//   for (let i = 0; i < players.length; i++) {
//     if (players[i].name == newName) {
//       isNameRepeated = true;
//       break;
//     }
//   }
//   if (isNameRepeated) {
//     return res.send("The name is already exists.");
//   }
//   players.push(playerBody);
//   res.send(players);
// });

//================================================ Assignment- post request-Voting Status
router.post("/vote", function (req, res) {
  let person = [
    {
      name: "PK",
      age: 10,
      votingStatus: false,
    },
    {
      name: "SK",
      age: 20,
      votingStatus: false,
    },
    {
      name: "AA",
      age: 70,
      votingStatus: false,
    },
    {
      name: "SC",
      age: 5,
      votingStatus: false,
    },
    {
      name: "HO",
      age: 40,
      votingStatus: false,
    },
  ];

  let voterAge = req.query.voterAge;

  for (i = 0; i < person.length; i++) {
    if (person[i].age >= voterAge) {
      person[i].votingStatus = true;
    }
  }
  // ++++++++++++++++++OR++++++++++++++++++
  //let result = person.filter((x) => x.age >= voterAge).map((x) => (x.votingStatus = true));
  // ++++++++++++++++++++++++++++++++++++

  res.send({ date: person, statu: true });
});

//================================================
module.exports = router;
