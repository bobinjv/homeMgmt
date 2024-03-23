import { Component } from '@angular/core';
import { ExecutiveService } from '../service/executive.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

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
    private executiveService: ExecutiveService
  ){
    this.getExecutiveList();
  }

  getExecutiveList(){
    this.executiveService.getExecutiveList().subscribe((res:any) => {
      this.dataSource = new MatTableDataSource(res.ExecutiveList);
    })
  }
}
