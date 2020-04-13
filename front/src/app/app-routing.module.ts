import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Auth
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordEmailComponent } from './auth/forgot-password-email/forgot-password-email.component';
import { ForgotPasswordResetComponent } from './auth/forgot-password-reset/forgot-password-reset.component';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';

// import { DeptAdminRoleGuardService } from './service/guards/dept-admin-role-guard.service';
// import { AdminRoleGuardService } from './service/guards/admin-role-guard.service';
// import { StaffRoleGuardService } from './service/guards/staff-role-guard.service';
// import { UserRoleGuardService } from './service/guards/user-role-guard.service';

import { ProfileComponent } from './admin/profile/profile.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { StaffComponent } from './admin/staff/staff.component';
import { DepertmentComponent } from './admin/depertment/depertment.component';
import { SetdepartmentComponent } from './admin/setdepartment/setdepartment.component';

// Doctor
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { DoctorLogComponent } from './doctor/doctor-log/doctor-log.component';
import { MakePrescriptionComponent } from './doctor/make-prescription/make-prescription.component';
import { PharmacyLogComponent } from './pharmacy/pharmacy-log/pharmacy-log.component';

// Staff
import { AllStaffComponent } from './admin/all-staff/all-staff.component';

//Payment 
import { PaymentLogComponent } from './payment/payment-log/payment-log.component';
import { PaymentHomeComponent } from './payment/payment-home/payment-home.component';
import { PHistoryComponent } from './payment/p-history/p-history.component';
import { InvoiceComponent } from './payment/invoice/invoice.component';

// Lab
import { LabLogComponent } from './lab/lab-log/lab-log.component';
import { LabHomeComponent } from './lab/lab-home/lab-home.component';
import { TestComponent } from './lab/test/test.component';
import { SetLabComponent } from './lab/set-lab/set-lab.component';
import { SetLabTestComponent } from './lab/set-lab-test/set-lab-test.component';

// Patient
import { PatientHomeComponent } from './customer/patient-home/patient-home.component';
import { PatientTaskboardComponent } from './customer/patient-taskboard/patient-taskboard.component';
import { PatientComponent } from './customer/patient/patient.component';
import { PatientDetailsComponent } from './customer/patient-details/patient-details.component';
import { MakeAppointmentComponent } from './customer/make-appointment/make-appointment.component';
import { CustomerCategoryComponent } from './customer/customer-category/customer-category.component';
import { AddPatientComponent } from './customer/add-patient/add-patient.component';

// Pharmacy
import { UnitComponent } from './pharmacy/unit/unit.component';
import { TypeComponent } from './pharmacy/type/type.component';
import { ManufacturerComponent } from './pharmacy/manufacturer/manufacturer.component';
import { CategoryComponent } from './pharmacy/category/category.component';
import { AllItemsComponent } from './pharmacy/all-items/all-items.component';
import { ShelfComponent } from './pharmacy/shelf/shelf.component';
import { ItemComponent } from './pharmacy/item/item.component';
import { PharmHomeComponent } from './pharmacy/pharm-home/pharm-home.component';
import { VoucherComponent } from './pharmacy/voucher/voucher.component';
import { SetBranchComponent } from './branches/set-branch/set-branch.component';
import { HistoryComponent } from './pharmacy/history/history.component';
import { TransHistoryComponent} from './pharmacy/trans-history/trans-history.component';
import { DurationComponent } from './pharmacy/duration/duration.component';
import { DailySupplyComponent } from './pharmacy/daily-supply/daily-supply.component';
import { RefillComponent } from './pharmacy/refill/refill.component';
import { RefillDetailsComponent } from './pharmacy/refill-details/refill-details.component';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { RegisterComponent } from './setup/register/register.component';
// import { RecordsComponent } from './dashboard/records/records.component';

import { RecordLogComponent } from './record/record-log/record-log.component';

                                      //DEPARTMENTS Dashboards
//ADMINISTRATION
import { HomeComponent } from './admin/home/home.component';

//PHARMACY
import { PhamAdminComponent } from './dashboard/pharmacy_dept/pham-admin/pham-admin.component';
import { PhamUserComponent } from './dashboard/pharmacy_dept/pham-user/pham-user.component';

//RECORDS
import { RecordAdminComponent } from './dashboard/records_dept/record-admin/record-admin.component';
import { RecordUserComponent } from './dashboard/records_dept/record-user/record-user.component';
import { RecordChargeComponent } from './record/record-charge/record-charge.component'; 
import { AppointmentTypeComponent } from './record/appointment-type//appointment-type.component';

//CLINIC
import { ClinicAdminComponent } from './dashboard/clinic_module/clinic-admin/clinic-admin.component';
import { ClinicUserComponent } from './dashboard/clinic_module/clinic-user/clinic-user.component';

//REVENUE
import { RevenueAdminComponent } from './dashboard/revenue_module/revenue-admin/revenue-admin.component';
import { RevenueUserComponent } from './dashboard/revenue_module/revenue-user/revenue-user.component';

//RADIOLOGY
import { RadioAdminComponent } from './dashboard/radiology_module/radio-admin/radio-admin.component';
import { RadioUserComponent } from './dashboard/radiology_module/radio-user/radio-user.component';

//LABORATORY
import { LabAdminComponent } from './dashboard/laboratory_module/lab-admin/lab-admin.component';
import { LabUserComponent } from './dashboard/laboratory_module/lab-user/lab-user.component';

//THEATER
import { TheaterAdminComponent } from './dashboard/theater_module/theater-admin/theater-admin.component';
import { TheaterUserComponent } from './dashboard/theater_module/theater-user/theater-user.component';

//NURSE
import { NurseAdminComponent } from './dashboard/nurse_module/nurse-admin/nurse-admin.component';
import { NurseUserComponent } from './dashboard/nurse_module/nurse-user/nurse-user.component';

//WARD
import { WardAdminComponent } from './dashboard/ward_module/ward-admin/ward-admin.component';
import { WardUserComponent } from './dashboard/ward_module/ward-user/ward-user.component';
import { ReportComponent } from './record/report/report.component';
import { RecordHistoryComponent } from './record/record-history/record-history.component';
import { RevenueLogComponent } from './revenue/revenue-log/revenue-log.component';


//DEPARTMENTS Dashboards

//REVENUE


const routes: Routes = [
  // {path: 'home', component: HomeComponent },
  {path: '', component: LoginComponent,canActivate: [BeforeLoginService] },
  {path: 'setupregister', component: RegisterComponent},
  // {path: 'Signin', component: SigninComponent,canActivate: [BeforeLoginService] },
  {path: 'forgot_password', component: ForgotPasswordEmailComponent,canActivate: [BeforeLoginService] },
  {path: 'reset_password/:token', component: ForgotPasswordResetComponent,canActivate: [BeforeLoginService] },
  {path: 'Admin', component: DashboardComponent, canActivate: [AfterLoginService],
 

  children: [

         {path: 'Profile/:id', component: ProfileComponent, outlet: 'side',canActivate: [AfterLoginService]},

        //  {path: 'home', component: HomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //  {path: 'staffs', component: StaffComponent, outlet: 'side',canActivate: [AfterLoginService] },         
        //  {path: 'department', component: DepertmentComponent, outlet: 'side',canActivate: [AfterLoginService] },

                                                                            // DASHBOARDS
        //ADMINISTRATION START
        {path: 'Admin-super_admin', component: HomeComponent, outlet: 'side',  canActivate: [AfterLoginService ]},
        {path: 'Admin-global_admin', component: HomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //ADMINISTRATIPON  END

        //PHARMARCY START
        {path: 'Pharmacy-department_admin', component: PhamAdminComponent, outlet: 'side',canActivate: [AfterLoginService] },
        {path: 'Pharmacy-staff', component:PhamUserComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //PHARMARCY END

        //RECORDS START
        {path: 'Records-department_admin', component: RecordAdminComponent, outlet: 'side',canActivate: [AfterLoginService] },
        {path: 'Records-staff', component:RecordUserComponent, outlet: 'side',canActivate: [AfterLoginService] },
        {path: 'record_log', component:RecordLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
        {path: 'record_charges', component:RecordChargeComponent, outlet: 'side',canActivate: [AfterLoginService] },
        {path: 'appointment_type', component:AppointmentTypeComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //RECORDS END

        //CLINIC START
        {path: 'Clinic-department_admin', component: ClinicAdminComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        {path: 'Clinic-staff', component:ClinicUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //CLINIC END

        //REVENUE START
        {path: 'Revenue-department_admin', component: RevenueAdminComponent, outlet: 'side',canActivate: [AfterLoginService], },
        {path: 'Revenue-staff', component:RevenueUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //REVENUER END

        //RADIOLOGY START
        {path: 'Radiology-department_admin', component: RadioAdminComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        {path: 'Radiology-staff', component:RadioUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //RADIOLOGY END

        //LABORATORY START 
        {path: 'Laboratory-department_admin', component: LabAdminComponent, outlet: 'side',canActivate: [AfterLoginService], },
        {path: 'Laboratory-staff', component:LabUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //LABORATORY END

        //THEATER START
        {path: 'Theater-department_admin', component: TheaterAdminComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        {path: 'Theater-staff', component:TheaterUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //THEATER END

        //NURSE START
        {path: 'Nurse-department_admin', component:NurseAdminComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        {path: 'Nurse-staff', component:NurseUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //NURSE END

        //WARD START 
        {path: 'Ward-department_admin', component:WardAdminComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        {path: 'Ward-staff', component:WardUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //WARD END

        // //CLINIC START
        // {path: 'Clinic-department_admin', component: ClinicAdminComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        // {path: 'Clinic-staff', component:ClinicUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        // //CLINIC END

         {path: 'staff', component: StaffComponent, outlet: 'side',canActivate: [AfterLoginService] },         
         {path: 'department_admin', component: DepertmentComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'set_department', component: SetdepartmentComponent, outlet: 'side',canActivate: [AfterLoginService] },


         // Patient
         {path: 'card_home', component: PatientHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'taskboard', component: PatientTaskboardComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'patient', component: PatientComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'patient_profile/:id', component: PatientDetailsComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'appointment', component: MakeAppointmentComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'patient_category', component: CustomerCategoryComponent, outlet: 'side', canActivate: [AfterLoginService] },
         {path: 'add_patient', component: AddPatientComponent, outlet: 'side', canActivate: [AfterLoginService] },

         // pharmacy
         {path: 'item_type', component: TypeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'unit', component: UnitComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'manufacturer', component: ManufacturerComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'item_category', component: CategoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'items', component: AllItemsComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'shelves', component: ShelfComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'item_profile/:id', component: ItemComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'patient_log', component: PharmacyLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'pharmacy_home', component: PharmHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'voucher/:id', component: VoucherComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'history', component: HistoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'report', component: TransHistoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'duration', component: DurationComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'instruction', component: DailySupplyComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'refill', component: RefillComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'refill-details/:id', component: RefillDetailsComponent, outlet: 'side',canActivate: [AfterLoginService] },        
        
         // Dashboard

         //Record
         {path: 'record_log', component:RecordLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'record_report', component:ReportComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'record_history', component:RecordHistoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         
           //REvenue
         {path: 'revenue_log', component:RevenueLogComponent, outlet: 'side',canActivate: [AfterLoginService] },

        //  {path: 'phamarcy-admin-dashboard', component: PhamAdminComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //  {path: 'phamarcy-user-dashboard', component: PhamUserComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //  {path: 'Pharmacy-department_admin', component: PhamAdminComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //  {path: 'Pharmacy-staff', component: PhamUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //  {path: 'Records-department_admin', component: RecordsComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //  {path: 'Pharmacy-staff', component:PhamUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //  {path: 'Records-department_admin', component: RecordAdminComponent, outlet: 'side',canActivate: [AfterLoginService],  },
        //  {path: 'Records-staff', component:RecordUserComponent, outlet: 'side',canActivate: [AfterLoginService],  },

         {path: 'admin-profile', component: AdminProfileComponent, outlet: 'side',canActivate: [AfterLoginService] },

         // Staff
         {path: 'all_staff', component: AllStaffComponent, outlet: 'side',canActivate: [AfterLoginService] },

         // Doctor
         {path: 'doctor_log', component: DoctorLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'doctor_home', component: DoctorHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'treatment/:id', component: MakePrescriptionComponent, outlet: 'side',canActivate: [AfterLoginService] },

          // Payment
         {path: 'payment_log', component: PaymentLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'payment_home', component: PaymentHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'payment', component: PHistoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'invoice/:id', component: InvoiceComponent, outlet: 'side',canActivate: [AfterLoginService] },


         // Lab
         {path: 'lab_log', component: LabLogComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'lab_home', component: LabHomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'test', component: TestComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'set_lab_department', component: SetLabComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'set_lab_test', component: SetLabTestComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'set_branch', component: SetBranchComponent, outlet: 'side',canActivate: [AfterLoginService] },
       
       
         //setting
        {path: 'general_setting', component: SettingsComponent, outlet: 'side',canActivate: [AfterLoginService] },
       

     ],
        }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
