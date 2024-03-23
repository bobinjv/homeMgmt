import { Injectable } from '@angular/core';
import { environment } from '../../env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExecutiveService {

  constructor(
    private _http:HttpClient
  ) { }

  public getExecutiveList(){
    return this._http.get(environment.apiUrl+'/executives')
  }

  public getExecutive(id: string){
    return this._http.get(environment.apiUrl+'/student/get')
  }

  public addNewStudent(data: any){
    return this._http.post(environment.apiUrl+'/student/register', data)
  }

  public editStudent(data: any, id:any){
    return this._http.patch(environment.apiUrl+'/student/patch/'+id, data)
  }
}
