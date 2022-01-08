import { GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

export const googleAuthProvider = new GoogleAuthProvider();
// googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const facebookAuthProvider = new FacebookAuthProvider()