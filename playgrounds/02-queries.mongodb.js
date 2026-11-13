/* global use, db */

use("university");

db.getCollection("students").insertOne({
    name: "Hicham",
    age: 21,
    major: "Software Engineering",
    skills: ["Java", "Python", "MongoDB"],
    isStudent: true
});