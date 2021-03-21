import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAvP8Z31gtZqrENJ7c_a3BC1jfqXOKxTFY",
    authDomain: "expensify-bd597.firebaseapp.com",
    projectId: "expensify-bd597",
    storageBucket: "expensify-bd597.appspot.com",
    messagingSenderId: "162793165814",
    appId: "1:162793165814:web:436cfc04d94e2775be6dd7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase , database as default};


// database.ref('expenses').push({
//     description: 'Credit',
//     amount: 500,
//     createdAt: 0,
//     note: 'asdf'
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//     })
//     console.log(expenses);
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key ,  snapshot.val());
// })