import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {
  providedIn: 'root'}
)
export class JarwisService {
  displayPosition() {
    throw new Error("Method not implemented.");
  }

  // private baseUrl = 'https://sce-ogun.sabiogun.jtcheck.com/backend/public/api';

  private baseUrl = 'http://localhost/buth-pharm/backend/public/api';

  constructor(private http: HttpClient) { }
  roleuser() {
    return this.http.get(`${this.baseUrl}/roleuser`)
  }
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
  updatecontent(data) {
    return this.http.post(`${this.baseUrl}/updatecontent`, data)
  }
  role(data) {
    return this.http.post(`${this.baseUrl}/role`, data)
  }
  activity(data) {
    return this.http.post(`${this.baseUrl}/activity`, data)
  }
  cate(data) {
    return this.http.post(`${this.baseUrl}/cate`, data)
  }
  
  content(data) {
    return this.http.post(`${this.baseUrl}/content`, data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  
  name_t(data) {
    return this.http.post(`${this.baseUrl}/name_t`, data)
  }
  
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }
  getact() {
    return this.http.get(`${this.baseUrl}/getact`,)
  }
  
  updateprofile(data) {
    return this.http.post(`${this.baseUrl}/me`,data,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  post(id:string) {

    return this.http.get(`${this.baseUrl}/post/${id}`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})

  } 
  displayartifact() {
    return this.http.get(`${this.baseUrl}/displayartifact`,)
  }
  displaybusiness() {
    return this.http.get(`${this.baseUrl}/displaybusiness`,)
  }
  displaypeople() {
    return this.http.get(`${this.baseUrl}/displaypeople`,)
  }
  displaynews() {
    return this.http.get(`${this.baseUrl}/displaynews`,)
  }



  // Type
  displayType() {
    return this.http.get(`${this.baseUrl}/displayType`,)
  }
  edtType(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtType/${id}`)
  }
  addType(data) {
    return this.http.post(`${this.baseUrl}/addType`, data)
  }
  updateType(data) {
    return this.http.post(`${this.baseUrl}/updateType`, data)
  }
  deleteType(data) {
    return this.http.post(`${this.baseUrl}/deleteType`, data)
  }




   // Categories
   displayCategories() {
    return this.http.get(`${this.baseUrl}/displayCategories`,)
  }
  edtCategories(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtCategories/${id}`)
  }
  addCategories(data) {
    return this.http.post(`${this.baseUrl}/addCategories`, data)
  }
  updateCategories(data) {
    return this.http.post(`${this.baseUrl}/updateCategories`, data)
  }
  deleteCategories(data) {
    return this.http.post(`${this.baseUrl}/deleteCategories`, data)
  } 
  
  //Manufacturer
  displayManufacturer() {
    return this.http.get(`${this.baseUrl}/displayManufacturer`,)
  }
  edtManufacturer(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtManufacturer/${id}`)
  }
  addManufacturer(data) {
    return this.http.post(`${this.baseUrl}/addManufacturer`, data)
  }
  updateManufacturer(data) {
    return this.http.post(`${this.baseUrl}/updateManufacturer`, data)
  }
  deleteManufacturer(data) {
    return this.http.post(`${this.baseUrl}/deleteManufacturer`, data)
  } 
  //Units
  displayUnit() {
    return this.http.get(`${this.baseUrl}/displayUnit`,)
  }
  edtUnit(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtUnit/${id}`)
  }
  addUnit(data) {
    return this.http.post(`${this.baseUrl}/addUnit`, data)
  }
  updateUnit(data) {
    return this.http.post(`${this.baseUrl}/updateUnit`, data)
  }
  deleteUnit(data) {
    return this.http.post(`${this.baseUrl}/deleteUnit`, data)
  } 
 
  
  //Department
  edtDept(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtDept/${id}`)
  }
  addDept(data) {
    return this.http.post(`${this.baseUrl}/addDept`, data)
  }
  updateDept(data) {
    return this.http.post(`${this.baseUrl}/updateDept`, data)
  }
  deleteDept(data) {
    return this.http.post(`${this.baseUrl}/deleteDept`, data)
  }  
  displayAllposition() {
    return this.http.get(`${this.baseUrl}/displayAllposition`,)
  }
  displayDepartments() {
    return this.http.get(`${this.baseUrl}/displayDepartments`,)
  }

  // Staffs
  displayAllstaff() {
    return this.http.get(`${this.baseUrl}/displayAllstaff`,)
  }
  uStatus(data) {
    return this.http.post<any>(`${this.baseUrl}/uStatus`, data)
  }
  deleteUser(data) {
    return this.http.post<any>(`${this.baseUrl}/deleteUser`, data)
  }
  profile() {
    return this.http.get(`${this.baseUrl}/me`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  




  getcontent(id:string) {
    return this.http.get(`${this.baseUrl}/getcontent/${id}`)
  }
  getcontentonly(id:string) {
    return this.http.get(`${this.baseUrl}/getcontentonly/${id}`)
  }
  getalltitle() {
    return this.http.get(`${this.baseUrl}/getalltitle`,)
  }
  getfootertitle() {
    return this.http.get(`${this.baseUrl}/getfootertitle`,)
  }
  gettitles(id:string) {
    return this.http.get(`${this.baseUrl}/gettitles/${id}`)
  }
  getUtitles() {
    return this.http.get(`${this.baseUrl}/getUtitles`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  getUcontent() {
    return this.http.get(`${this.baseUrl}/getUcontent`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
//  search(searchTerm:string) {
//     return this.http.get(`${this.baseUrl}/getalltitle/${searchTerm}`)
//   }

comment(data) {
  return this.http.post(`${this.baseUrl}/comment`, data,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}
}
