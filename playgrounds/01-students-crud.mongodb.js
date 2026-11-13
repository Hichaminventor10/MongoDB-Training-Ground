use("university");

// CREATE
db.students.insertOne({
    name: "Ahmed",
    age: 22,
    major: "Computer Science"
});

// READ
db.students.find();

// UPDATE
db.students.updateOne(
    { name: "Ahmed" },
    { $set: { age: 23 } }
);

// DELETE
db.students.deleteOne({ name: "Ahmed" });

db.students.find({ name: "Ahmed" });

use("university");

db.students.find().pretty();