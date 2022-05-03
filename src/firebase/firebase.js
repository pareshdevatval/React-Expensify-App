import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDyzWMnoseMo3rx6WETFwK16G9wBpJk03o",
    authDomain: "expensify-56ccd.firebaseapp.com",
    projectId: "expensify-56ccd",
    storageBucket: "expensify-56ccd.appspot.com",
    messagingSenderId: "998386157083",
    appId: "1:998386157083:web:7ea3998bab9c8b3fc8dabe",
    measurementId: "G-WNMVLXBRGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
set(ref(database, '/'), {
    name: 'Paresh',
    age: 29,
    isSingle: true,
    location: {
        city: 'Bhuj',
        country: 'India'
    }
}).then(() => {
    console.log('Data is saved!!'); 
}).catch((e) => {
    console.log('Failed!!',e);
});

set(ref(database, 'attributes'), {
    height: 170,
    weight: 74
}).then(() => {
    console.log('2 Set call workded!!'); 
}).catch((e) => {
    console.log('Things did not work for set error!!',e);
});



