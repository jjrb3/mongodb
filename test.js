show
dbs

use
mycustomers


db.createUser({
    user: 'Jeremy',
    pwd: '123',
    roles: ['redWrite', 'dbAdmin']
})

db.clientes.insert({
    firstName: 'Jose',
    lastname: 'Barios'
})

db.clientes.find()

db.clientes.insert([
    {firstName: 'Jose', lastname: 'Barios'},
    {firstName: 'Deivis', lastname: 'Rada'},
    {firstName: 'Jani', lastname: 'Carvajal'}
])

db.clientes.find({firstName: 'Jose'})

db.clientes.update(
    {lastname: 'Carvajal'},
    {
        firstName: 'Janieth',
        lastName: 'Carvajal',
        gender: 'female'
    }
)

db.clientes.find().pretty()

db.clientes.find({_id: ObjectId("5aa94181c178c5452a1910c1")})

db.clientes.update({_id: ObjectId("5aa94181c178c5452a1910bf")}, {$set: {age: 27}})  // Agregar campo
db.clientes.update({_id: ObjectId("5aa94181c178c5452a1910bf")}, {$inc: {age: 1}})   // Incrementar
db.clientes.update({_id: ObjectId("5aa94181c178c5452a1910bf")}, {$unset: {age: 1}}) // Eliminar un dato

db.clientes.update({firstName: 'Deivis'},{firstName: 'Deivis Jhon',lastName: 'Rada'},{upsert: true}) // Lo actualiza si no lo encuentra lo crea
db.clientes.update({firstName: 'Janer'},{firstName: 'Janer',lastName: 'Montalvo'},{upsert: true})    // Lo actualiza si no lo encuentra lo crea

db.clientes.update({firstName: 'Janer'},{$rename: {"firstName": "primerNombre"}})   // Renombrar nombre

db.clientes.remove({primerNombre: 'Janer'})
db.clientes.remove({firstName: 'Jose'},{justOne: true})  // Eliminar una transacción

db.clientes.find({$or: [{firstName: 'Jani'},{gender: 'male'}]})

db.clientes.insert(
    [
        {name: 'Alejandro', age: 20},
        {name: 'Maria', age: 30},
        {name: 'Jose', age: 81}
    ]
)

db.clientes.find({age:{$gt: 30}}) // Busca por mayor que
db.clientes.find({age:{$lt: 30}}) // Busca por menor que
db.clientes.find({age:{$gt: 20, $lt: 80}}) // Mayor y menor que

db.clientes.insert({
    firstName: 'Camilo',
    address: {
        city: 'London'
    }
})

db.clientes.find({'address.city': 'London'})    // Buscar por objeto
db.clientes.find({name: {$regex: 'andr'}})      // Buscar como si fuera like

db.clientes.find().sort({lastName: 1})  // Orden descendente
db.clientes.find().sort({lastName: -1}) // Orden ascendente
db.clientes.find().count()  // Cuenta los datos
db.clientes.find({age: {$gt: 30}}).count().sort({lastName: 1})   // Combinando

db.clientes.find().forEach(function(doc){
    print("Customer name " + doc.firstName)
})