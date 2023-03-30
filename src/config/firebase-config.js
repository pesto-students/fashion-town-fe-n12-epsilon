import { getAuth } from "firebase/auth";
import Config from "./config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: Config.googleAuthApi,
  authDomain: "fashion-town.firebaseapp.com",
  projectId: "fashion-town",
  storageBucket: "fashion-town.appspot.com",
  messagingSenderId: "132781947118",
  appId: "1:132781947118:web:a1b88c5747e7aefa2b1bff",
  measurementId: "G-5RYMXJX4GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
