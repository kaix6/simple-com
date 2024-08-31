import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  userId = '';
  user: User = new User();
  users$: Observable<any> | undefined; // Observable für die Nutzerdaten

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id') || '';
      console.log('GOT ID', this.userId);
      this.getUser();
    });
  }

  getUser() {
    const userDocRef = doc(this.firestore, 'users', this.userId);
    this.users$ = docData(userDocRef);
  
    this.users$.subscribe((userData) => {
      console.log('User data:', userData);
      this.user = userData; // Weist die Daten dem user-Objekt zu
    });
  }
}
