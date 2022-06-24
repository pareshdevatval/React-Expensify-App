import { initializeApp } from 'firebase/app';
import {
    getDatabase, ref, set, update, child, get, onValue, off,
    push, onChildRemoved, onChildChanged, onChildAdded
} from "firebase/database";
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const googleAuthProvider = new GoogleAuthProvider();

export { database as default, googleAuthProvider };

// onChildRemoved(ref(database, 'expenses'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// onChildChanged(ref(database, 'expenses'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// onChildAdded(ref(database, 'expenses'), (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// push(ref(database, 'expenses'), {
//     'description': 'Food',
//     'note': '',
//     'amount': 10700,
//     'createdAt': 0
// });

// const onValueChange = onValue(ref(database, "/"), (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });

// get(ref(database, 'expenses'))
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });


// push(ref(database,'expenses'),{
//     'description': 'Gym',
//     'note':'',
//     'amount':8000,
//     'createdAt':0
// });

// push(ref(database,'expenses'),{
//     'description': 'Travelling',
//     'note':'',
//     'amount':5000,
//     'createdAt':0
// });

// const onValueChange = onValue(ref(database,"/"), (snapshot)=>{
//     console.log(snapshot.val());
// })

// setTimeout(()=>{
//     update(ref(database,"/"),{
//         age: 30
//     });
// },2000);

// //Unsubscribe
// setTimeout(()=>{
//    onValueChange();
// },4000);

// setTimeout(()=>{
//     update(ref(database,"/"),{
//         age: 29
//     });
// },6000);

// get(child(ref(database),"/"))
// .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e)=>{
//     console.log(e);
// });

// set(ref(database, '/'), {
//     name: 'Paresh',
//     age: 29,
//     job: {
//         title: 'Software developer',
//         company: 'IMD'
//     },
//     stressLevel: 5,
//     isSingle: true,
//     location: {
//         city: 'Bhuj',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved!!');
// }).catch((e) => {
//     console.log('Failed!!',e);
// });

// update(ref(database,"/"),{
//     'job/title': 'Tech lead',
//     'job/company': 'Sculptsoft PL',
//     'location/city':'Ahmedabad',
//     stressLevel: 3
// });

// set(ref(database,'/isSingle'),{
//     isSingle :null
// });

