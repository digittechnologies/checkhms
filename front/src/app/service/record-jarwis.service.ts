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
  
  //Hospital Charges starts
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
  editCharge(id:string) {
    return this.http.get<any>(`${this.baseUrl}/editCharge/${id}`)
  }
  updateCharge(data) {
    return this.http.post(`${this.baseUrl}/updateCharge`, data)
  }
  deleteCharge(data) {
    return this.http.post(`${this.baseUrl}/deleteCharge`, data)
  }
//Hospital Charges ends

displayUser() {
  return this.http.get(`${this.baseUrl}/displayUser`,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}

//Appointment Type starts
  addApptType(data) {
    return this.http.post(`${this.baseUrl}/addApptType`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  displayApptType() {
    return this.http.get(`${this.baseUrl}/displayApptType`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  editApptType(id:string) {
    return this.http.get<any>(`${this.baseUrl}/editApptType/${id}`)
  }
  updateApptType(data) {
    return this.http.post(`${this.baseUrl}/updateApptType`, data)
  }
  deleteApptType(data) {
    return this.http.post(`${this.baseUrl}/deleteApptType`, data)
  }

  displayAppointmentType() {
    return this.http.get(`${this.baseUrl}/displayAppointmentType`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
//Appointment type ends

//RECORDS DASHBORAD BEGINS
  displayRecordData() {
    return this.http.get(`${this.baseUrl}/displayRecordData`)
  }

  displayRecordStaffData() {
    return this.http.get(`${this.baseUrl}/displayRecordStaffData`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }

  displayRecordPieData() {
    return this.http.get(`${this.baseUrl}/displayRecordPieData`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
}
