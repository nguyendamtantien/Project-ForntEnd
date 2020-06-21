import { AngularFirestore } from '@angular/fire/firestore';
// import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;

  constructor(private firestore: AngularFirestore) { }

  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }
  // searchByName(searchValue){
  //   return this.firestore.collection('employees', ref => ref.where('nameToSearch', '>=', searchValue)
  //   .where('nameToSearch', '<=',searchValue+'\uf8ff'))
  //   .snapshotChanges()
  // }
}
