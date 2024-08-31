import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    AppComponent,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule, 
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'], // <-- styleUrl in styleUrls geändert
})
export class UserComponent {
  user: User = new User();
  users$: Observable<any[]>;  // Observable für die Nutzerdaten
  allUsers: any[] | undefined;

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection, { idField: 'id'});
  }

  ngOnInit(): void {
    this.users$.subscribe((data) => {
      console.log('Received users from DB', data);
      this.allUsers = data;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
