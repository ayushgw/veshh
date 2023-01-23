import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, query, QueryDocumentSnapshot } from 'firebase/firestore'

import { IProduct } from '../features/productsSlice';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8mYMrIgRVT5WYg48spfKqa-Y5onLs33M",
    authDomain: "crwn-clothing-db-2aae0.firebaseapp.com",
    projectId: "crwn-clothing-db-2aae0",
    storageBucket: "crwn-clothing-db-2aae0.appspot.com",
    messagingSenderId: "621442694528",
    appId: "1:621442694528:web:a8517157de3ca55f069565"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const getCategoriesAndDocuments = async (): Promise<IProduct[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(docSnapshot => docSnapshot.data() as IProduct)
    
    return data;
}

export interface IAdditionalInfo {
    displayName?: string;
}

export interface IUserData {
    createdAt: Date;
    displayName: string;
    email: string;
}

export const createUserDocumentFromAuth = async (userAuth: User, additionalInfo = {} as IAdditionalInfo): Promise<void | QueryDocumentSnapshot<IUserData>> => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log('error creating the user', error);
        }
    }

    return userSnapshot as QueryDocumentSnapshot<IUserData>;
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        )
    })
}