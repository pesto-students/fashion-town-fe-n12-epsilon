import { getAuth } from "firebase/auth";
import Config from "./config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: Config.googleAuthApi,
  authDomain: "fashion-town-frontend.firebaseapp.com",
  projectId: "fashion-town-frontend",
  storageBucket: "fashion-town-frontend.appspot.com",
  messagingSenderId: "783705846773",
  appId: "1:783705846773:web:f6fc1a66bc6f9ef5cfa6bc",
  measurementId: "G-GJCK956BCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
