/* Import Firebase SDK modules for initialization and database operations */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase configuration settings for your app
const appSettings = {
  databaseURL: "https://mindscribe-24d0c-default-rtdb.firebaseio.com/",
};

// Initialize the Firebase app with the provided settings
const app = initializeApp(appSettings);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(app);

// Define a reference to the "journalEntries" location in the database
const journalEntriesRef = ref(database, "journalEntries");