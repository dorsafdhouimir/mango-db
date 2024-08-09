db.createCollection("contactlist")
db.contactlist.insertMany([
  { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
  { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
  { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
  { lastName: "Alex", firstName: "brown", age: 4 },
  { lastName: "Denzel", firstName: "Washington", age: 3 }
])
const person =  collection.findOne({ _id: new ObjectId(id) });
const contacts = collection.find({ age: { $gt: 18 } }).toArray
const contacts = collection.find({ age: { $gt: 18 }, name: /ah/i }).toArray();
collection.updateOne(
  { firstName: "Kefi", lastName: "Seif" },
  { $set: { lastName: "Anis" } }
)
collection.deleteMany({ age: { $lt: 5 } });































