import React from "react";
import ReactDOM from "react-dom";
import Main from "./Components/Main";
import "./index.css";

const STUDENT = [{
  "firstname": "Sara",
  "lastname": "LaFlamme",
  "age": 21,
  "classes": ["street", "dancehall", "balett"]
},
  {
  "firstname": "Alex",
  "lastname": "Osk",
  "age": 29,
  "classes": ["street"]
},
  {
  "firstname": "Magnus",
  "lastname": "Wallin",
  "age": 37,
  "classes": ["street", "dancehall"]
},
{
  "firstname": "Obed",
  "lastname": "Samuel",
  "age": 28,
  "classes": ["street"]
},
{
  "firstname:": "Joakim",
  "lastname": "Loung",
  "age": 29,
  "classes": ["street"]
}
];

const TEACHER = {
  "firstname": "Monique",
  "lastname": "Picard",
  "age": 28,
  "classes": ["street", "dancehall", "balett"]
};

const CLASSES = [{
  "name": "street",
  "dates": ["2018-03-16", "2018-03-23", "2018-03-30"],
  "start": "18:00",
  "length": 2,
  },
  {
  "name": "dancehall",
  "dates": ["2018-03-15", "2018-03-22", "2018-03-29"],
  "start": "18:00",
  "length": 1,
  }
];

ReactDOM.render(
  <Main student={STUDENT} teacher={TEACHER} classes={CLASSES}/>,

  document.getElementById("root")
);
