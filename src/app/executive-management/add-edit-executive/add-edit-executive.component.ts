import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule, } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-executive',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-edit-executive.component.html',
  styleUrl: './add-edit-executive.component.css'
})
export class AddEditExecutiveComponent {
  public title = "Add Executive";
  public regForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      designation: new FormControl('', [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<AddEditExecutiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    if(data){
      this.editMode();
    }
  }

  public submitForm(){
    if(this.regForm.valid){
      this.dialogRef.close(this.regForm.value)
    }else{
      this.regForm.markAllAsTouched();
    }
  }

  private editMode(){
    this.title = "Edit Executive";
    this.regForm.patchValue({
      name: this.data.executives_name,
      phone: this.data.executives_number,
      dob: this.data.executives_dob,
      email: this.data.executives_email,
      designation: this.data.exec_desig,
    })
  }
}
