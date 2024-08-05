import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import Post from '../dto/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient, private fireStoreService: AngularFirestore) { }

 
  findAllDataFireStore() {
    return this.fireStoreService.collection('post-data').snapshotChanges().pipe(
      map((actions: DocumentChangeAction<any>[]) => 
        actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  
  deleteDataFireStore(id: any) {
    return this.fireStoreService.collection('post-data').doc(id).delete();
  }



  findDataFireStore(id: any) {
    return this.fireStoreService.collection('post-data').doc(id).valueChanges();
  }

  

  createDataFireStore(post: Post) {
    return new Promise<any>((resolve, reject) => {
      this.fireStoreService.collection('post-data')
        .add(post.toObject()) // Convert to plain object
        .then(response => {
          console.log(response);
          resolve(response);
        }, error => {
          console.log(error);
          reject(error);
        });
    });
  }


  updateDataFireStore(post: Post) {
    return this.fireStoreService.collection('post-data')
      .doc(post.id)
      .update({
        userId:post.userId,
        title:post.title,
        body:post.body
      });
  }

}
