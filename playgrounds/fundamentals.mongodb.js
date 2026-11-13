use("university");

db.createCollection("training_students");




db.training_students.insertMany([

    {

        name: "Ahmed",

        age: 22,

        major: "Computer Science",

        grade: 15.5,

        city: "Casablanca",

        skills: ["Java", "SQL"],

        isActive: true

    },

    {

        name: "Sara",

        age: 20,

        major: "Mathematics",

        grade: 17,

        city: "Rabat",

        skills: ["Python", "Statistics"],

        isActive: true

    },

    {

        name: "Youssef",

        age: 23,

        major: "Software Engineering",

        grade: 12,

        city: "Tangier",

        skills: ["Java", "MongoDB"],

        isActive: false

    },

    {

        name: "Salma",

        age: 21,

        major: "Computer Science",

        grade: 18.5,

        city: "Rabat",

        skills: ["Python", "JavaScript"],

        isActive: true

    },

    {

        name: "Omar",

        age: 24,

        major: "Software Engineering",

        grade: 14,

        city: "Agadir",

        skills: ["Java", "Docker"],

        isActive: true

    }

]);


use("university");

db.training_students.find();

db.training_students.countDocuments();

// find all students 

db.training_students.find();

// 2.find students older than 21 

db.training_students.find({ age: { $gt: 21 } });

// 3.find students from Rabat

db.training_students.find({ city: "Rabat" });




// afficher university 

db.getSiblingDB("university").training_students.find();


db.university.students.insertOne({
    name: "Hicham",
    age: 21,
    city: "Tanger",
    grade: 16.5
})

db.university.students.insertMany([
    {
        name: "Yassine",
        age: 22,
        city: "Rabat",
        grade: 14
    },
    {
        name: "Sara",
        age: 20,
        city: "Casablanca",
        grade: 18
    },
    {
        name: "Amine",
        age: 23,
        city: "Tanger",
        grade: 12
    },
    {
        name: "Salma",
        age: 21,
        city: "Rabat",
        grade: 17
    }
])

db.university.students.find();
db.university.students.countDocuments();

// 2. Rechercher un étudiant par son nom

db.university.students.find({ name: "Sara" });

// 5. Afficher seulement certains champs : projection

db.university.students.find({}, { name: 1, age: 1, _id: 0 });

db.university.students.find().sort({ age: 1 }); // 1 : ascending order

db.university.students.find().sort({ age: -1 }); // -1 : descending order

db.university.students.find().sort({ age: 1, grade: -1 }); // sort by age ascending and grade descending

// limiter le nombre de résultats retournés

db.university.students.find().limit(2);

// skip some results

db.university.students.find().skip(2);

// update a student

db.university.students.updateOne(
    { name: "Hicham" },
    { $set: { age: 22, grade: 17 } }
);

// delete a student

db.university.students.deleteOne({ name: "Amine" });

db.university.students.find();

use("ensah");
db.createCollection("professors");

show collections;

db.professors.insertMany([
    {
        name: "Dr. Ahmed",
        department: "Computer Science",
        age: 45,
        city: "Casablanca",
        isActive: true
    },
    {
        name: "Dr. Sara",
        department: "Mathematics",
        age: 38,
        city: "Rabat",
        isActive: true      
    }
])
db.professors.find().pretty();

// afficher uniquemnet name et age 
db.professors.find({}, { name:0,age : 0, _id: 0 }).pretty();

db.professors.insertMany([
    {
        name: "Hicham",
        age: 21,
        city: "Fes",
        grade: 15,
        department: "Computer Science",
        skills: ["Java", "MongoDB", "Python"]
    },
    {
        name: "Ahmed",
        age: 23,
        city: "Rabat",
        grade: 12,
        department: "Mathematics",
        skills: ["Python", "SQL"]
    },
    {
        name: "Sara",
        age: 20,
        city: "Casablanca",
        grade: 18,
        department: "Computer Science",
        skills: ["Java", "JavaScript"]
    },
    {
        name: "Youssef",
        age: 22,
        city: "Fes",
        grade: 9,
        department: "Networks",
        skills: ["Cisco", "Linux"]
    },
    {
        name: "Salma",
        age: 24,
        city: "Rabat",
        grade: 16,
        department: "Computer Science",
        skills: ["Python", "Java", "SQL"]
    },
    {
        name: "Omar",
        age: 19,
        city: "Tangier",
        grade: 11,
        department: "Networks",
        skills: ["Linux", "Cisco"]
    },
    {
        name: "Imane",
        age: 21,
        city: "Fes",
        grade: 17,
        department: "Mathematics",
        skills: ["Python", "R"]
    }
])

db.professors.find({},{name:1,_id:0});

db.professors.find({});

// afficher uniquement lage et le nom 

db.professors.find({},{age:1,name:1,_id:0}).pretty();

// afficher le nom la ville et la note sans _id

db.professors.find({},{
    name:1,
    city:1,
    grade :1,
    department:1,
    _id:0
});

// afficher le nom et la ville et la note sans _id

db.professors.find({},{
    name:1,
    city:1,
    grade :1,
    _id:0
});

db.professors.find(
    {
        city : 'Rabat',
        
    },{
        _id : 0,
        name : 1
    }
).pretty();

//     Afficher les étudiants ayant une note supérieure à 15.

db.professors.find(
    {
        grade : {$gt:15}
    },
    {
        _id : 0 ,
        name : 1 
    }
).pretty();

use("training_students")
db.training_students.find(
    {
        grade : {$gt:14}
    }
)

db.training_students.find(
    {
        city : {$ne: "fes"}
    },
    { _id:0,name:0}
)

//trouver les etudiants dont la note est comprise entre 12 et 17 

db.training_students.find(
    {
        grade : {$gte:12 , $lte:17}
    },{_id:0}
).pretty()

db.training_students.find(
    {
        city: {$in : ["Fes","Rabat"]}

    }
)

db.training_students.find(
    {
        age: {$gt : 20 },
        grade : {$gt : 15 }
    }, {_id:0}
)
// trouver les etudiant en info ou en reseaux

db.training_students.find(
    {
        major : {$in : ["Computer Science","Software Engineering"]}
    }
)

db.training_students.find(
    {
        $or : [
            {major: "Computer Science"},
            {major:"tech"}
        ]
    }
)
// difference entre in et or 

db.training_students.find(
    {
        major : {$nin : ["Computer Science"]}
    },
    {_id:0}
)

//     Trouver les étudiants âgés de plus de 20 ans OU ayant une note supérieure à  17

db.training_students.find(
    {
        $or : [
            {age: {$gt:20}},
            {grade: {$gt:17}}
        ]
    },
    {_id:0,skills:0}
)
// trier les etudiants par age croissant

db.training_students.find({},{_id:0,name:1,age:1}).sort({age:-1}).limit(2)

// afficher les deux etudiant ayant les meilleures notes    

db.training_students.find({},{_id:0,name:1,grade:1}).sort({grade:-1}).limit(2)


db.training_students.find({}).sort({grade:-1}).limit(2)

// 4. Afficher les trois premiers étudiants par ordre alphabétique.
db.training_students.find({}).sort({name:1}).limit(3)

// 7.1 modifier la note de l'etudiant Ahmed a 16

db.training_students.updateOne(
    { name: "Ahmed" },
    { $set: { grade: 16 } }
)
//augmenter de 1 an lage de sara

db.training_students.updateOne(
    { name: "Sara" },
    { $inc: { age: 1 } }
)

// 
db.training_students.find()

db.training_students.updateOne(
    {name:"Ahmed"},
    {$set:{city:"Casa"}}
)

//
db.training_students.updateOne(
    {name:"Sara"},
    {$set : {
        major:"Math"
    }}
)
db.training_students.find({name:"Sara"})

