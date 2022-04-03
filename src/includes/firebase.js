// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/ddsocs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAfgGY2NpvXgWmQeOjWpGU8Iu_5QTfngto',
	authDomain: 'music-d0b6b.firebaseapp.com',
	projectId: 'music-d0b6b',
	storageBucket: 'music-d0b6b.appspot.com',
	messagingSenderId: '316855738058',
	appId: '1:316855738058:web:4a76e529988b48418e9e33',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const usersCollection = (data) => {
	 addDoc(collection(db, 'users'), data);
};

export {
	app,
	auth,
	usersCollection,
};
