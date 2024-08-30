import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simple-crm-f0465',
        appId: '1:708015033314:web:cd0e89d4fdc6ada3b107bb',
        storageBucket: 'simple-crm-f0465.appspot.com',
        apiKey: 'AIzaSyDMJWVeabC_nAbn0CQfe7nt9DayO-IzQtM',
        authDomain: 'simple-crm-f0465.firebaseapp.com',
        messagingSenderId: '708015033314',
        databaseURL: 'https://simple-crm-f0465-default-rtdb.europe-west1.firebasedatabase.app',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
};
