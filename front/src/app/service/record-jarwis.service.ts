import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecordJarwisService {

  private baseUrl = environment.baseUrl;

  constructor(
    public http: HttpClient,
  ) { }

  addHospitalCharge(data) {
    return this.http.post(`${this.baseUrl}/addHospitalCharge`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  displayRecordCharges() {
    return this.http.get(`${this.baseUrl}/displayRecordCharges`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  displayUser() {
    return this.http.get(`${this.baseUrl}/displayUser`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  editCharge(id:string) {
    return this.http.get<any>(`${this.baseUrl}/editCharge/${id}`)
  }

  updateCharge(data) {
    return this.http.post(`${this.baseUrl}/updateCharge`, data)
  }

  deleteCharge(data) {
    return this.http.post(`${this.baseUrl}/deleteCharge`, data)
  }
}
