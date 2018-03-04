const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }

  console.log('connected to mongodb server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=> {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=> {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a9b5c7a4839214998d8478b')
  // }).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=> {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('todos count', count);
  //
  // }, (err)=> {
  //   //console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name: 'luis'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=> {
    console.log('Unable to fetch todos', err);
  });

  //client.close();

});
