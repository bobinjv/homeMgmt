import { Component } from '@angular/core';
import { ExecutiveService } from '../service/executive.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {
  MatDialog
} from '@angular/material/dialog';
import { AddEditExecutiveComponent } from './add-edit-executive/add-edit-executive.component';

@Component({
  selector: 'app-executive-management',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './executive-management.component.html',
  styleUrl: './executive-management.component.css'
})
export class ExecutiveManagementComponent {

  displayedColumns: string[] = ['name', 'number','dob', 'email',  'designation', 'edit'];
  dataSource = new MatTableDataSource<any>;;

  constructor(
    private executiveService: ExecutiveService,
    public dialog: MatDialog
  ){
    this.getExecutiveList();
  }

  getExecutiveList(){
    this.executiveService.getExecutiveList().subscribe((res:any) => {
      this.dataSource = new MatTableDataSource(res.ExecutiveList);
    })
  }

  public openAddExecutivePopup(){
    const dialogRef = this.dialog.open(AddEditExecutiveComponent);

    dialogRef.afterClosed().subscribe(formData => {
      this.addNewExecutive(formData);
    });
  }

  addNewExecutive(formData:any){
    const data = new FormData()
    data.append("Name", formData.name)
    data.append("Mobile", formData.phone.toString())
    data.append("dob", this.getDobDateFormat(formData.dob))
    data.append("Mail", formData.email)
    data.append("Designation", formData.designation)
    this.executiveService.addNewExecutive(data).subscribe((res:any) => {
      this.getExecutiveList();
    })
  }

  private getDobDateFormat(date: Date){
    const isoDate = new Date(date).toISOString();
    return isoDate.split('T')[0]
  }

  public openEditExecutivePopup(data:any){
    const dialogRef = this.dialog.open(AddEditExecutiveComponent,{
      data: data
    });

    dialogRef.afterClosed().subscribe(formData => {
      this.editExecutive(formData, data.IDPK);
    });
  }

  editExecutive(formData:any, id: string){
    const data = new FormData()
    data.append("Id", id);
    data.append("Name", formData.name)
    data.append("Mobile", formData.phone.toString())
    data.append("dob", this.getDobDateFormat(formData.dob))
    data.append("Mail", formData.email)
    data.append("Designation", formData.designation)
    this.executiveService.editExecutive(data).subscribe((res:any) => {
      this.getExecutiveList();
    })
  }
}
