/* File used to populate our db */
const mongoose = require('mongoose');
const Volunteer = require('./models/volunteers');
const Game = require('./models/games');
const Assignment = require('./models/assignments');
const Area = require('./models/areas');
require('dotenv').config();

/* Some volunteers */
const volunteers = [
    { nom: 'Smith', prenom: 'John', email: 'john.smith@gmail.com' },
    { nom: 'Johnson', prenom: 'Jane', email: 'jane.johnson@gmail.com' },
    { nom: 'Williams', prenom: 'James', email: 'james.williams@gmail.com' },
    { nom: 'Brown', prenom: 'Emily', email: 'emily.brown@gmail.com' },
    { nom: 'Davis', prenom: 'Michael', email: 'michael.davis@gmail.com' },
    { nom: 'Miller', prenom: 'Sarah', email: 'sarah.miller@gmail.com' },
    { nom: 'Wilson', prenom: 'David', email: 'david.wilson@gmail.com' },
    { nom: 'Moore', prenom: 'Jessica', email: 'jessica.moore@gmail.com' },
    { nom: 'Taylor', prenom: 'William', email: 'william.taylor@gmail.com' },
    { nom: 'Anderson', prenom: 'Emily', email: 'emily.anderson@gmail.com' },
    { nom: 'Thomas', prenom: 'Matthew', email: 'matthew.thomas@gmail.com' },
    { nom: 'Jackson', prenom: 'Daniel', email: 'daniel.jackson@gmail.com' },
    { nom: 'White', prenom: 'Natalie', email: 'natalie.white@gmail.com' },
    { nom: 'Harris', prenom: 'William', email: 'william.harris@gmail.com' },
    { nom: 'Martin', prenom: 'Emily', email: 'emily.martin@gmail.com' },
    { nom: 'Thompson', prenom: 'Michael', email: 'michael.thompson@gmail.com' },
    { nom: 'Young', prenom: 'Sarah', email: 'sarah.young@gmail.com' },
    { nom: 'Allen', prenom: 'David', email: 'david.allen@gmail.com' },
    { nom: 'King', prenom: 'Jessica', email: 'jessica.king@gmail.com' },
    { nom: 'Wright', prenom: 'William', email: 'william.wright@gmail.com' },
    { nom: 'Scott', prenom: 'Emily', email: 'emily.scott@gmail.com' },
    { nom: 'Green', prenom: 'Matthew', email: 'matthew.green@gmail.com' },
    { nom: 'Baker', prenom: 'Daniel', email: 'daniel.baker@gmail.com' },
    { nom: 'Adams', prenom: 'Natalie', email: 'natalie.adams@gmail.com' },
    { nom: 'Nelson', prenom: 'William', email: 'william.nelson@gmail.com' },
    { nom: 'Smith', prenom: 'John', email: 'john@smith.com' },
    { nom: 'Johnson', prenom: 'Jane', email: 'jane@johnson.com' },
    { nom: 'Williams', prenom: 'Michael', email: 'michael@williams.com' },
    { nom: 'Brown', prenom: 'Emily', email: 'emily@brown.com' },
    { nom: 'Jones', prenom: 'David', email: 'david@jones.com' },
    { nom: 'Miller', prenom: 'Sarah', email: 'sarah@miller.com' },
    { nom: 'Davis', prenom: 'Michael', email: 'michael@davis.com' },
    { nom: 'Wilson', prenom: 'Emily', email: 'emily@wilson.com' },
    { nom: 'Clark', prenom: 'John', email: 'john@clark.com' },
    { nom: 'Taylor', prenom: 'Jane', email: 'jane@taylor.com' },
    { nom: 'Adams', prenom: 'Michael', email: 'michael@adams.com' },
    { nom: 'Baker', prenom: 'Emily', email: 'emily@baker.com' },
    { nom: 'Nelson', prenom: 'John', email: 'john@nelson.com' },
    { nom: 'Carter', prenom: 'Jane', email: 'jane@carter.com' },
    { nom: 'Mitchell', prenom: 'Michael', email: 'michael@mitchell.com' },
    { nom: 'Perez', prenom: 'Emily', email: 'emily@perez.com' },
    { nom: 'Roberts', prenom: 'John', email: 'john@roberts.com' },
    { nom: 'Turner', prenom: 'Jane', email: 'jane@turner.com' },
    { nom: 'Phillips', prenom: 'Michael', email: 'michael@phillips.com' },
    { nom: 'Campbell', prenom: 'Emily', email: 'emily@campbell.com' },
    { nom: 'Parker', prenom: 'John', email: 'john@parker.com' },
    { nom: 'Evans', prenom: 'Jane', email: 'jane@evans.com' }
]


/* Some board games */
const games = [
    { nom: 'Wig Out', type: 'Ambiance' },
    { nom: 'Dixit', type: 'Ambiance' },
    { nom: 'Cards Against Humanity', type: 'Ambiance' },
    { nom: 'The Resistance', type: 'Ambiance' },
    { nom: 'Apples to Apples', type: 'Ambiance' },
    { nom: "Betrayal at Baldur's Gate", type: 'Ambiance' },
    { nom: 'Betrayal Legacy', type: 'Ambiance' },
    { nom: 'Spyfall', type: 'Ambiance' },
    { nom: "Werewolves of Miller's Hollow", type: 'Ambiance' },
    { nom: 'Mystery Mansion', type: 'Ambiance' },
    { nom: 'Escape Room: The Game', type: 'Ambiance' },
    { nom: 'Codenames', type: 'Ambiance' },
    { nom: 'Monopoly Junior', type: 'Enfant' },
    { nom: 'Pièges à Ours', type: 'Enfant' },
    { nom: 'Candy Land', type: 'Enfant' },
    { nom: 'Uno Junior', type: 'Enfant' },
    { nom: 'Chiffres et Formes', type: 'Enfant' },
    { nom: 'Catan Junior', type: 'Enfant' },
    { nom: "Rory's Story Cubes", type: 'Enfant' },
    { nom: 'Power Grid', type: 'Expert' },
    { nom: '18xx', type: 'Expert' },
    { nom: 'Puerto Rico', type: 'Expert' },
    { nom: 'Agricola', type: 'Expert' },
    { nom: 'Twilight Struggle', type: 'Expert' },
    { nom: 'Scythe', type: 'Expert' },
    { nom: 'Gloomhaven', type: 'Expert' },
    { nom: 'The Boss', type: 'Expert' },
    { nom: 'Eldritch Horror', type: 'Expert' },
    { nom: 'The 7th Continent', type: 'Expert' },
    { nom: 'Zombicide', type: 'Expert' },
    { nom: 'Dead of Winter', type: 'Expert' },
    { nom: 'Munchkin', type: 'Expert' },
    { nom: 'Dominion', type: 'Expert' },
    { nom: 'Monopoly', type: 'Famille' },
    { nom: 'Scrabble', type: 'Famille' },
    { nom: 'Cluedo', type: 'Famille' },
    { nom: 'Risque', type: 'Famille' },
    { nom: 'Molkky', type: 'Famille' },
    { nom: 'King of Tokyo', type: 'Famille' },
    { nom: 'My Little Scythe', type: 'Famille' },
    { nom: 'Qwirkle', type: 'Famille' },
    { nom: 'The Game of Life', type: 'Famille' },
    { nom: 'Forbidden Island', type: 'Famille' },
    { nom: 'Santorini', type: 'Famille' },
    { nom: 'Cranium', type: 'Famille' },
    { nom: 'Clue', type: 'Famille' },
    { nom: 'Settlers of Catan', type: 'Initié' },
    { nom: 'Ticket to Ride', type: 'Initié' },
    { nom: 'Carcassonne', type: 'Initié' },
    { nom: '7 Wonders', type: 'Initié' },
    { nom: 'Dominion', type: 'Initié' },
    { nom: 'Pandemic', type: 'Initié' },
    { nom: 'Small World', type: 'Initié' },
    { nom: 'The Castles of Burgundy', type: 'Initié' },
    { nom: 'Kingdomino', type: 'Initié' },
    { nom: 'Azul', type: 'Initié' },
    { nom: 'Takenoko', type: 'Initié' },
    { nom: 'Patchwork', type: 'Initié' },
    { nom: 'Orléans', type: 'Initié' },
    { nom: 'Tortuga 1667', type: 'Initié' },
    { nom: 'Celestia', type: 'Initié' }
]

/* Some dates */
const dates = [
    ["2023-04-15T09:30:00.000+00:00", "2023-04-15T11:00:00.000+00:00"],
    ["2023-04-15T11:00:00.000+00:00", "2023-04-15T12:30:00.000+00:00"],
    ["2023-04-15T12:30:00.000+00:00", "2023-04-15T14:00:00.000+00:00"],
    ["2023-04-15T14:00:00.000+00:00", "2023-04-15T15:30:00.000+00:00"],
    ["2023-04-15T15:30:00.000+00:00", "2023-04-15T17:00:00.000+00:00"],
    ["2023-04-15T17:00:00.000+00:00", "2023-04-15T18:30:00.000+00:00"],
    ["2023-04-15T18:30:00.000+00:00", "2023-04-15T20:00:00.000+00:00"],
    ["2023-04-15T20:00:00.000+00:00", "2023-04-15T21:30:00.000+00:00"],
    ["2023-04-16T09:30:00.000+00:00", "2023-04-16T11:00:00.000+00:00"],
    ["2023-04-16T11:00:00.000+00:00", "2023-04-16T12:30:00.000+00:00"],
    ["2023-04-16T12:30:00.000+00:00", "2023-04-16T14:00:00.000+00:00"],
    ["2023-04-16T14:00:00.000+00:00", "2023-04-16T15:30:00.000+00:00"],
    ["2023-04-16T15:30:00.000+00:00", "2023-04-16T17:00:00.000+00:00"],
    ["2023-04-16T17:00:00.000+00:00", "2023-04-16T18:30:00.000+00:00"],
    ["2023-04-16T18:30:00.000+00:00", "2023-04-16T20:00:00.000+00:00"],
]


function populateGames() {
    Game.deleteMany({}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Games removed");
        Game.create(games, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Games added");
            }
        });
    });
}

function populateVolunteers() {
    Volunteer.deleteMany({}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Volunteers removed");
        Volunteer.create(volunteers, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Volunteers added");
            }
        });

    });
}

function createAssignments(areas, games, volunteers) {
    Assignment.deleteMany({}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Assignments removed");
            var assignments = [];
            for (let i = 0; i < 100; i++) {
                let date = dates[Math.floor(Math.random() * dates.length)];
                let area = areas[Math.floor(Math.random() * areas.length)];
                let game = games[Math.floor(Math.random() * games.length)];
                let volunteer = volunteers[Math.floor(Math.random() * volunteers.length)];
                let assignment = {
                    zone: {
                        _id: area._id,
                        nom: area.nom
                    },
                    date_deb: date[0],
                    date_fin: date[1],
                    jeu: {
                        _id: game._id,
                        nom: game.nom,
                    },
                    benevole: {
                        _id: volunteer._id,
                        nom: volunteer.nom,
                        prenom: volunteer.prenom
                    }
                }
                assignments.push(assignment);
            }
            Assignment.create(assignments, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Assignments added");
                    console.log("Number of volunteers: " + volunteers.length);
                    console.log("Number of games: " + games.length);
                    console.log("Number of areas: " + areas.length);
                    console.log("Number of assignments: " + 100);
                    console.log("Number of timeslots: " + dates.length);
                }
            });
        }
    });
}

function populateAssignments() {
    Area.find({}, (err, areas) => {
        Game.find({}, (err, games) => {
            Volunteer.find({}, (err, volunteers) => {
                createAssignments(areas, games, volunteers);
            })
        })
    })
}

/* Connect to the database */
function populate() {
    mongoose.connect(`mongodb+srv://${process.env.DB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true, dbName: process.env.DB_NAME })
        .then(() => {
            console.log('Connecion to MongoDB successful!');
            populateGames()
            populateVolunteers()
            populateAssignments()
        })
        .catch(() => console.log('Connecion to MongoDB failed!'));
}

/* Populate the database */
populate();