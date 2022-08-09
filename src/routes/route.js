const express = require("express");
const abc = require("../introduction/intro");
const router = express.Router();

// router.get("/test-me", function (req, res) {
//   console.log("My batch is", abc.name);
//   abc.printName();
//   logger.welcome();

//   res.send("My second ever api!");
// });

// router.get("/students", function (req, res) {
//   let students = ["Sabiha", "Neha", "Akash"];
//   res.send(students);
// });

// router.get("/student-details/:name", function (req, res) {
//   /*
//     params is an attribute inside request that contains
//     dynamic values.
//     This value comes from the request url in the form of an
//     object where key is the variable defined in code
//     and value is what is sent in the request
//     */

//   let requestParams = req.params;

//   // JSON strigify function helps to print an entire object
//   // We can use any ways to print an object in Javascript, JSON stringify is one of them
//   console.log("This is the request " + JSON.stringify(requestParams));
//   let studentName = requestParams.name;
//   console.log("Name of the student is ", studentName);

//   res.send("Dummy response");
// });

// router.get("/studet-details/:name/:age", function (req, res) {
//   console.log("This is the request " + JSON.stringify(req.params));
//   let reqParams = req.params;
//   let studentsName = reqParams.name;
//   let studentsAge = reqParams.age;
//   console.log(
//     "Name of the students is",
//     studentsName,
//     "and age is",
//     studentsAge,
//     "."
//   );
//   //assuming details is firstname + firstname
//   let studentDetails = studentsName + " " + studentsName;
//   res.send("Student Info.");
// });

router.get("/movies", function (req, res) {
  console.log("---------------------Problem-1");

  let movies = [
    "Rang de basanti",
    "The shining",
    "Lord of the rings",
    "Batman begins",
  ];
  res.send(movies);
});

router.get("/movies/:indexNumber", function (req, res) {
  console.log("---------------------Problem-2 & Problem-3");
  console.log("This is the request " + JSON.stringify(req.params));
  let movies = [
    "Rang de basanti",
    "The shining",
    "Lord of the rings",
    "Batman begins",
  ];
  const index = req.params;
  const moviesIndexNo = index.indexNumber;

  if (moviesIndexNo < 0 || moviesIndexNo > movies.length - 1) {
    res.send("please insert valid index");
  } else {
    res.send(movies[moviesIndexNo]);
  }
});

router.get("/get/films", function (req, res) {
  console.log("---------------------Problem-4");

  const films = [
    { id: 1, name: "The Shining" },
    { id: 2, name: "Incendies" },
    { id: 3, name: "Rang de Basanti" },
    { id: 4, name: "Finding Nemo" },
  ];

  res.send(films);
});

router.get("/get/films/:filmId", function (req, res) {
  console.log("---------------------Problem-5");

  const films = [
    { id: 1, name: "The Shining" },
    { id: 2, name: "Incendies" },
    { id: 3, name: "Rang de Basanti" },
    { id: 4, name: "Finding Nemo" },
  ];

  const id = req.params;
  const idIndex = id.filmId;

  for (let i = 0; i < films.length; i++) {
    let film = films[i];
    if (film.id == idIndex) {
      return res.send(film);
    }
  }

  res.send("No movie exists with this id");
  // const checkId = function (a) {
  // return a.id;
  // };
  // const getId = films.map(checkId);
  // let filmName = "";

  // if (idIndex != 0 || idIndex <= getId.length) {
  // filmName = films[idIndex - 1];
  // } else {
  // filmName = "No movie exists with this id";
  // }

  // res.send(filmName);
});

module.exports = router;
