import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  form = new FormGroup({
    id: new FormControl(),
    userId: new FormControl(),
    title: new FormControl(),
    body: new FormControl()
  });

  createData(){
    console.log(this.form);
    
  }
}
