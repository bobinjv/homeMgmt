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
    return this._http.get(environment.apiUrl+'/execuitiveviewbyid/'+id)
  }

  public addNewExecutive(data: any){
    return this._http.post(environment.apiUrl+'/addexecutives', data)
  }

  public editExecutive(data: any){
    return this._http.post(environment.apiUrl+'/updateexecutives', data)
  }
}
