import { makeAutoObservable } from "mobx";
import { getAuth, signInWithPopup, GoogleAuthProvider, Auth, User } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYRmeMou5NdwUFkc77Zn1WN57stp8cwX8",
  authDomain: "earth-redemption.firebaseapp.com",
  projectId: "earth-redemption",
  storageBucket: "earth-redemption.appspot.com",
  messagingSenderId: "643857711478",
  appId: "1:643857711478:web:0ea54e38998e9a0b127a57"
};

const app = initializeApp(firebaseConfig);

class UserStore {
  
  provider: GoogleAuthProvider
  
  auth: Auth
  
  constructor() {
    this.provider = new GoogleAuthProvider()
    this.auth = getAuth()
    
    makeAutoObservable(this, {
      auth: false,
      provider: false
    })
  
    this.auth.onAuthStateChanged(user => this.setUser(user))
  }
  
  user: User | null = null
  
  get isAuth() {
    return !!this.user
  }
  
  get isAdmin() {
    return false
  }
  
  get userId() {
    if (!this.isAuth) return null
    return this.user!.uid
  }
  
  setUser = (user: User | null) => this.user = user
  
  signInWithGoogle = async () => {
    try {
      await signInWithPopup(this.auth, this.provider)
    } catch (e) {}
  }
  
  logout = () => this.auth.signOut()
  
}

const userStore = new UserStore();
export default userStore;
