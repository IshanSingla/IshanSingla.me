import {
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword
} from 'firebase/auth';

import { auth } from '../firebase.util';

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signOutUser = async () => {
	await signOut(auth);
};

export const onAuthStateChangedListener = callback => {
	return onAuthStateChanged(auth, callback);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
  
	return await signInWithEmailAndPassword(auth, email, password);
  };
// signOutUser();
