import firebase from 'firebase'
import 'firebase/firestore'
import "firebase/auth"
import firebaseConfig from './config'

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore();