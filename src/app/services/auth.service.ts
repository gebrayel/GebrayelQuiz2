import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth , User} from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }
  
  loginWithGoogle(): Promise<void> {
    return this.authLogin(new auth.GoogleAuthProvider())
      .then((response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
        }
      })
      .catch((err) => console.log(err));
  }

  getCurrentUser(): Observable<User> {
    return this.afAuth.authState;
  }

  logout(): Promise<void> {
    return this.afAuth
      .signOut()
      .then(() => {
        localStorage.removeItem('user');
      })
      .catch((err) => console.log(err));
  }

  isAuthenticated(): boolean {
    const user: User = JSON.parse(localStorage.getItem('user')) ?? null;

    return user !== null;
  }

  private authLogin(provider: auth.AuthProvider): Promise<auth.UserCredential> {
    return this.afAuth.signInWithPopup(provider);
  }
}


