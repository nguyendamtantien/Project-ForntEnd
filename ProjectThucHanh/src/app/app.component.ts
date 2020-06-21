import { Component } from '@angular/core';

// import { Observable } from 'rxjs';    
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
		

// export interface Item { id: number; name: string; }

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      // private itemsCollection: AngularFirestoreCollection<Item>;
      // items: Observable<Item[]>;
      title = 'ProjectThucHanh';
	// 	  constructor(private readonly afs: AngularFirestore) {
  //       this.itemsCollection = afs.collection<Item>('Items');
  //       // .valueChanges() is simple. It just returns the 
  //       // JSON data without metadata. If you need the 
  //       // doc.id() in the value you must persist it your self
  //       // or use .snapshotChanges() instead. 
  //       this.items = this.itemsCollection.valueChanges();
  //       this.items.subscribe(data=>{console.log(data)})
  // }
}
