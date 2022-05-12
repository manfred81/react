import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnKQduvnZ1WsWCIrKH8a6X5a57vQBB5CI",
  authDomain: "superpupper-4b53a.firebaseapp.com",
  databaseURL: "https://superpupper-4b53a-default-rtdb.firebaseio.com",
  projectId: "superpupper-4b53a",
  storageBucket: "superpupper-4b53a.appspot.com",
  messagingSenderId: "524483782662",
  appId: "1:524483782662:web:e63daa68481e40d33b3b87"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;