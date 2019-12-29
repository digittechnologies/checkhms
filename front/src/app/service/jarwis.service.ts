import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {
  providedIn: 'root'}
)
export class JarwisService {
  displayshelvegories() {
    throw new Error("Method not implemented.");
  }
  edtshelvegories(id: string) {
    throw new Error("Method not implemented.");
  }
  updateshelvegories(value: any) {
    throw new Error("Method not implemented.");
  }
  deleteshelvegories(id: string) {
    throw new Error("Method not implemented.");
  }
  addshelvegories(value: any) {
    throw new Error("Method not implemented.");
  }
  displaycatacturer() {
    throw new Error("Method not implemented.");
  }
  edtcatacturer(id: string) {
    throw new Error("Method not implemented.");
  }
  updatecatacturer(value: any) {
    throw new Error("Method not implemented.");
  }
  deletecatacturer(id: string) {
    throw new Error("Method not implemented.");
  }
  addcatacturer(value: any) {
    throw new Error("Method not implemented.");
  }
  displayPosition() {
    throw new Error("Method not implemented.");
  }

  // private baseUrl = 'https://back.hms.jtcheck.com/backend/public/api';

  private baseUrl = 'http://localhost/buth_pharm/backend/public/api';

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




  // Branch
  displayBranch() {
    return this.http.get(`${this.baseUrl}/displayBranch`,)
  }
  edtBranch(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtBranch/${id}`)
  }
  addBranch(data) {
    return this.http.post(`${this.baseUrl}/addBranch`, data)
  }
  updateBranch(data) {
    return this.http.post(`${this.baseUrl}/updateBranch`, data)
  }
  deleteBranch(data) {
    return this.http.post(`${this.baseUrl}/deleteBranch`, data)
  }
  suspendBranch(data) {
    return this.http.post(`${this.baseUrl}/suspendBranch`, data)
  }
  activateBranch(data) {
    return this.http.post(`${this.baseUrl}/activateBranch`, data)
  }

  
  // Shelve
  displayShelve() {
    return this.http.get(`${this.baseUrl}/displayShelve`,)
  }
  edtShelve(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtShelve/${id}`)
  }
  addShelve(data) {
    return this.http.post(`${this.baseUrl}/addShelve`, data)
  }
  updateShelve(data) {
    return this.http.post(`${this.baseUrl}/updateShelve`, data)
  }
  deleteShelve(data) {
    return this.http.post(`${this.baseUrl}/deleteShelve`, data)
  }


  // ItemDetails
  displayItemDetails() {
    return this.http.get(`${this.baseUrl}/displayItemDetails`,)
  }
  edtItemDetails(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtItemDetails/${id}`)
  }
  addItemDetails(data) {
    return this.http.post(`${this.baseUrl}/addItemDetails`, data)
  }
  updateItemDetails(data) {
    return this.http.post(`${this.baseUrl}/updateItemDetails`, data)
  }
  deleteItemDetails(data) {
    return this.http.post(`${this.baseUrl}/deleteItemDetails`, data)
  }
  disItemDet() {
    return this.http.get(`${this.baseUrl}/disItemDet`,)
  }

  // Item
  displayItem() {
    return this.http.get(`${this.baseUrl}/displayItem`,)
  }
  edtItem(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtItem/${id}`)
  }
  addItem(data) {
    return this.http.post(`${this.baseUrl}/addItem`, data)
  }
  updateItem(data) {
    return this.http.post(`${this.baseUrl}/updateItem`, data)
  }
  deleteItem(data) {
    return this.http.post(`${this.baseUrl}/deleteItem`, data)
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
  c_uStatus(data) {
    return this.http.post<any>(`${this.baseUrl}/c_uStatus`, data)
  }
  deleteUser(data) { 
    return this.http.post<any>(`${this.baseUrl}/deleteUser`, data)
  }

  staffdetails(id:string) {
    return this.http.get<any>(`${this.baseUrl}/staffdetails/${id}`)
  }
  profile() {
    return this.http.get(`${this.baseUrl}/me`,{headers:{
      Authorization:`Bearer ${localStorage.token}`
    }})
  }
  
// Branches
// displayCategories() {
//   return this.http.get(`${this.baseUrl}/displayCategories`,)
// }
// edtCategories(id:string) {
//   return this.http.get<any>(`${this.baseUrl}/edtCategories/${id}`)
// }
  createBranch(data) {
  return this.http.post(`${this.baseUrl}/addBranch`, data)
  }
// updateCategories(data) {
//   return this.http.post(`${this.baseUrl}/updateCategories`, data)
// }
// deleteCategories(data) {
//   return this.http.post(`${this.baseUrl}/deleteCategories`, data)
// } 


// Customer
displayCustomer() {
  return this.http.get(`${this.baseUrl}/displayCustomer`,)
}

addCustomer(data) {
  return this.http.post(`${this.baseUrl}/addCustomer`, data)
}
patientdetails(id:string) {
  return this.http.get<any>(`${this.baseUrl}/patientdetails/${id}`)
}
makeAppointment(data) {
  return this.http.post<any>(`${this.baseUrl}/makeAppointment`, data)
}

//Appointment 
displayAllappointment() {
  return this.http.get(`${this.baseUrl}/displayAllappointment`,)
}

displayDeptAppointment() {
  return this.http.get(`${this.baseUrl}/displayDeptAppointment`,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}
countAppointment() {
  return this.http.get(`${this.baseUrl}/countAppointment`,{headers:{
    Authorization:`Bearer ${localStorage.token}`
  }})
}
deleteAppointment(data) {
  return this.http.post(`${this.baseUrl}/deleteAppointment`, data)
} 


//Laboratory Departments
  addLaboratory(data) {
    return this.http.post(`${this.baseUrl}/addLab`, data)
  }
  displayLabDepartments() {
    return this.http.get(`${this.baseUrl}/displayLabDepartments`,)
  }
  updateLabDept(data) {
    return this.http.post(`${this.baseUrl}/updateLabDept`, data)
  }
  deleteLabDepartments(data) {
    return this.http.post(`${this.baseUrl}/deleteLabDepartments`, data)
  } 
  edtLabDept(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtLabDept/${id}`)
  }


  //Laboratory Test Types
  addLaboratoryTest(data) {
    return this.http.post(`${this.baseUrl}/addLabTestType`, data)
  }
  displayLabTestType() {
    return this.http.get(`${this.baseUrl}/displayLabTestType`,)
  }
  updateLabTestType(data) {
    return this.http.post(`${this.baseUrl}/updateLabTestType`, data)
  }
  deleteLabTestType(data) {
    return this.http.post(`${this.baseUrl}/deleteLabTestType`, data)
  } 
  edtLabTestType(id:string) {
    return this.http.get<any>(`${this.baseUrl}/edtLabTestType/${id}`)
  }

  displayStockBranches() {
    return this.http.get(`${this.baseUrl}/stockBranches`,)
  }
  
  addToStock(data) {
    return this.http.post(`${this.baseUrl}/addToStock`, data)
  }
  transToStock(data) {
    return this.http.post(`${this.baseUrl}/transferToStock`, data)
  }

  transToStock(data) {
    return this.http.post(`${this.baseUrl}/transferToStock`, data)
  }

  displayAdded() {
      return this.http.get(`${this.baseUrl}/addedItems`,)
  }

  displayTransferred() {
      return this.http.get(`${this.baseUrl}/transItems`,)
  }

  displayInstock(id:string) {
    return this.http.get<any>(`${this.baseUrl}/inStock/${id}`)
  }
 
  saveAdd() {
    return this.http.get(`${this.baseUrl}/saveAdd`)
  }

  saveTransfer() {
    return this.http.get(`${this.baseUrl}/saveTransfer`)
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
