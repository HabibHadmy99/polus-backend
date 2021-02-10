const db = require('./api/database')

async function setupDatabase(req, res, next) {
    const collections = ['user', 'item', 'order']
    collections.forEach(async (collection) => await deleteCollection(collection))

    addDocuments(
        'user',
        [
            {
                "id": 1,
                "name": "Habib Hadmy",
                "email": "habib@gmail.com",
                "contact": "012345678",
                "password": "12345678",
                "address": "Kg Parit Mahang, Jeram, Selangor",
                "type": "user"
              },
              {
                "id": 2,
                "name": "Jasmin Farena",
                "email": "jasmin@gmail.com",
                "contact": "012984178",
                "password": "12345678",
                "address": "Ampang, Selangor",
                "type": "user"
              },
              {
                "id": 3,
                "name": "Haris Hashemeen",
                "email": "haris@gmail.com",
                "contact": "0123412313",
                "password": "12345678",
                "address": "Kg Iskandar, Taman FamilyMart, Kelantan ",
                "type": "admin"
              },
              {
                "id": 4,
                "name": "Mirhanieza",
                "email": "mir@gmail.com",
                "contact": "0123412313",
                "password": "12345678",
                "address": "Johor ",
                "type": "admin"
              }
        ],
        'item',
        [
            {
                "id": 1,
                "name": "Polo v1",
                "brand": "Polo Ralph",
                "image": "assets/images/four.jpg",
                "quantity": 6,
                "price": 100.05,
                "desc": "This is item description for Polo v1"
              },
              {
                "id": 2,
                "name": "Swagor",
                "brand": "Levis",
                "image": "assets/images/two.jpg",
                "quantity": 6,
                "price": 100.05,
                "desc": "This is item description for Swagor"
              },
              {
                "id": 3,
                "name": "Checkered",
                "brand": "Guess",
                "image": "assets/images/three.jpg",
                "quantity": 6,
                "price": 120.05,
                "desc": "This is item description for Munchik"
              },
              {
                "name": "CK shirt",
                "brand": "Calvin Klein",
                "image": "assets/images/four.jpg",
                "quantity": 6,
                "price": 100.49,
                "desc": "This is item description for Polo v1",
                "id": 4
              }
        ],
        'order',
        []
    )

    res.send('Setting Up Database.... Done')
}

async function deleteCollection(collection) {
    const cref = db.firestore.collection(collection)
    const docs = await cref.listDocuments()
    docs.forEach((doc) => doc.delete())
}

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc))
}

module.exports = setupDatabase;