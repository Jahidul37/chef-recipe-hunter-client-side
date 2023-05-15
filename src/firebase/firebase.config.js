// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6qzKQxgHsXOHqPpjEHP8p3X7xExiLYlI",
    authDomain: "chef-recipe-hunter-327cb.firebaseapp.com",
    projectId: "chef-recipe-hunter-327cb",
    storageBucket: "chef-recipe-hunter-327cb.appspot.com",
    messagingSenderId: "121751613795",
    appId: "1:121751613795:web:dfc1958a9991e010e62356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;