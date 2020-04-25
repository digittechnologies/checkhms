import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RevenueJarwisService {
  private baseUrl = environment.baseUrl;
  constructor(
    public http: HttpClient,
  ) { }

  addHospitalCharge(data) {
    return this.http.post(`${this.baseUrl}/addHospitalCharge`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  patientVouchers(id:string) {
    return this.http.get<any>(`${this.baseUrl}/patientvouchers/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  customer_category() {
    return this.http.get<any>(`${this.baseUrl}/customer_category`)
  }
}
