import * as firebase from "firebase";
import * as expensesActions from "../actions/expenses";

const firebaseConfig = {
  apiKey: "AIzaSyC6YUwz02dmL8Vh_6YsmBLG7Lbbvf5BHik",
  authDomain: "expensify-jdb.firebaseapp.com",
  databaseURL: "https://expensify-jdb.firebaseio.com",
  projectId: "expensify-jdb",
  storageBucket: "expensify-jdb.appspot.com",
  messagingSenderId: "768945953247",
  appId: "1:768945953247:web:4adb8897cda924d46a8c6a",
  measurementId: "G-HP59FQCCR3",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
