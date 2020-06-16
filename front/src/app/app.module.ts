import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JarwisService } from './service/jarwis.service';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryComponent } from './pharmacy/category/category.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AccountComponent } from './user/account/account.component';
import { FormsModule } from '@angular/forms';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { ProfileComponent } from './admin/profile/profile.component';
import { DetailsComponent } from './user/details/details.component';
import { PostComponent } from './user/post/post.component';
import { MypostComponent } from './user/mypost/mypost.component';
import {MatSelectModule,MatInputModule, MatListModule, MatSnackBarModule,} from '@angular/material';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'​;
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { UpdateComponent } from './user/update/update.component';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { PossitionComponent } from './admin/possition/possition.component';
import { DepertmentComponent } from './admin/depertment/depertment.component';
import { StaffComponent } from './admin/staff/staff.component';
import { PatientComponent } from './customer/patient/patient.component';
import { AddPatientComponent } from './customer/add-patient/add-patient.component';
import { PatientDetailsComponent } from './customer/patient-details/patient-details.component';
import { MakeAppointmentComponent } from './customer/make-appointment/make-appointment.component';
import { AppointmentComponent } from './doctor/appointment/appointment.component';
import { MakePrescriptionComponent } from './doctor/make-prescription/make-prescription.component';
import { BookAppointmentComponent } from './doctor/book-appointment/book-appointment.component';
import { VoucherComponent } from './pharmacy/voucher/voucher.component';
import { RefillComponent } from './pharmacy/refill/refill.component';
import { VHistoryComponent } from './pharmacy/v-history/v-history.component';
import { AllItemsComponent } from './pharmacy/all-items/all-items.component';
import { AddItemsComponent } from './pharmacy/add-items/add-items.component';
import { UnitComponent } from './pharmacy/unit/unit.component';
import { TypeComponent } from './pharmacy/type/type.component';
import { ManufacturerComponent } from './pharmacy/manufacturer/manufacturer.component';
import { ShelfComponent } from './pharmacy/shelf/shelf.component';
import { TransferItemsComponent } from './pharmacy/transfer-items/transfer-items.component';
import { VarianceComponent } from './pharmacy/variance/variance.component';
import { HistoryComponent } from './pharmacy/history/history.component';
import { InvoiceComponent } from './payment/invoice/invoice.component';
import { PHistoryComponent } from './payment/p-history/p-history.component';
import { IncomeComponent } from './payment/income/income.component';
import { TransHistoryComponent } from './pharmacy/trans-history/trans-history.component';
import { SetdepartmentComponent } from './admin/setdepartment/setdepartment.component';
import { PrescriptionComponent } from './prescription/prescription/prescription.component';
import { ProgressComponent } from './prescription/progress/progress.component';
import { PharmHomeComponent } from './pharmacy/pharm-home/pharm-home.component';
import { PaymentHomeComponent } from './payment/payment-home/payment-home.component';
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { PatientHomeComponent } from './customer/patient-home/patient-home.component';
import { ItemComponent } from './pharmacy/item/item.component';
import { SetBranchComponent } from './branches/set-branch/set-branch.component';
import { TestComponent } from './lab/test/test.component';
import { SetLabComponent } from './lab/set-lab/set-lab.component';
import { DoctorLogComponent } from './doctor/doctor-log/doctor-log.component';
import { PharmacyLogComponent } from './pharmacy/pharmacy-log/pharmacy-log.component';
import { PaymentLogComponent } from './payment/payment-log/payment-log.component';
import { LabLogComponent } from './lab/lab-log/lab-log.component';
import { LabHomeComponent } from './lab/lab-home/lab-home.component';
import { AllStaffComponent } from './admin/all-staff/all-staff.component';
import { PatientTaskboardComponent } from './customer/patient-taskboard/patient-taskboard.component';
import { SetLabTestComponent } from './lab/set-lab-test/set-lab-test.component';
import { DurationComponent } from './pharmacy/duration/duration.component';
import { DailySupplyComponent } from './pharmacy/daily-supply/daily-supply.component';
import { RefillDetailsComponent } from './pharmacy/refill-details/refill-details.component';
import { NgxPrintModule} from 'ngx-print';
import {NgxPaginationModule} from 'ngx-pagination';
import { KeyComponent } from './setup/key/key.component';
import { LockComponent } from './setup/lock/lock.component';
import { RegisterComponent } from './setup/register/register.component';
import { PhamAdminComponent } from './dashboard/pharmacy_dept/pham-admin/pham-admin.component';
import { PhamUserComponent } from './dashboard/pharmacy_dept/pham-user/pham-user.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ForgotPasswordEmailComponent } from './auth/forgot-password-email/forgot-password-email.component';
import { ForgotPasswordResetComponent } from './auth/forgot-password-reset/forgot-password-reset.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { DeptAdminRoleGuardService } from './service/guards/dept-admin-role-guard.service';
import { AdminRoleGuardService } from './service/guards/admin-role-guard.service';
import { StaffRoleGuardService } from './service/guards/staff-role-guard.service';
import { UserRoleGuardService } from './service/guards/user-role-guard.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ExportAsModule } from 'ngx-export-as';
import { CustomerCategoryComponent } from './customer/customer-category/customer-category.component';
import { PatDetailComponent } from './doctor/pat-detail/pat-detail.component';
import { RecordsComponent } from './dashboard/records/records.component';
import { RecordChargeComponent } from './record/record-charge/record-charge.component';
import { ClinicServiceComponent } from './record/clinic-service/clinic-service.component';
import { PharmacyComponent } from './admin/navs/pharmacy/pharmacy.component';
import { ClinicComponent } from './admin/navs/clinic/clinic.component';
import { AdminComponent } from './admin/navs/admin/admin.component';
import { LabComponent } from './admin/navs/lab/lab.component';
import { RadioComponent } from './admin/navs/radio/radio.component';
import { TheaterComponent } from './admin/navs/theater/theater.component';
import { RecordComponent } from './admin/navs/record/record.component';
import { RevenueComponent } from './admin/navs/revenue/revenue.component';
import { NurseComponent } from './admin/navs/nurse/nurse.component';
import { WardComponent } from './admin/navs/ward/ward.component';
import { RecordAdminComponent } from './dashboard/records_dept/record-admin/record-admin.component';
import { RecordUserComponent } from './dashboard/records_dept/record-user/record-user.component';

import { ClinicAdminComponent } from './dashboard/clinic_module/clinic-admin/clinic-admin.component';
import { ClinicUserComponent } from './dashboard/clinic_module/clinic-user/clinic-user.component';
import { RevenueAdminComponent } from './dashboard/revenue_module/revenue-admin/revenue-admin.component';
import { RevenueUserComponent } from './dashboard/revenue_module/revenue-user/revenue-user.component';
import { RadioAdminComponent } from './dashboard/radiology_module/radio-admin/radio-admin.component';
import { RadioUserComponent } from './dashboard/radiology_module/radio-user/radio-user.component';
import { LabAdminComponent } from './dashboard/laboratory_module/lab-admin/lab-admin.component';
import { LabUserComponent } from './dashboard/laboratory_module/lab-user/lab-user.component';
import { TheaterAdminComponent } from './dashboard/theater_module/theater-admin/theater-admin.component';
import { TheaterUserComponent } from './dashboard/theater_module/theater-user/theater-user.component';
import { NurseAdminComponent } from './dashboard/nurse_module/nurse-admin/nurse-admin.component';
import { NurseUserComponent } from './dashboard/nurse_module/nurse-user/nurse-user.component';
import { WardAdminComponent } from './dashboard/ward_module/ward-admin/ward-admin.component';
import { WardUserComponent } from './dashboard/ward_module/ward-user/ward-user.component';
import { RecordLogComponent } from './record/record-log/record-log.component';
import { ReportComponent } from './record/report/report.component';
import { RecordHistoryComponent } from './record/record-history/record-history.component';
import { RevenueLogComponent } from './revenue/revenue-log/revenue-log.component';
import { AppointmentTypeComponent } from './record/appointment-type//appointment-type.component';
import { BrancesComponent } from './branches/brances/brances.component';
import { NavLazyLoadComponent } from './admin/navs/nav-lazy-load/nav-lazy-load.component';
import { StoreModule } from '@ngrx/store';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { reducers, metaReducers } from './reducers';
import { PatientHistoryComponent } from './customer/patient-history/patient-history.component';
import { PatientReviewComponent } from './customer/patient-review/patient-review.component';
import { PatientProcessComponent } from './customer/patient-process/patient-process.component';
import { ProccessSettingsComponent } from './proccess-settings/proccess-settings.component';
import { ProccessValueComponent } from './proccess-value/proccess-value.component';
import { ChatService } from './service/chat.service';
import { ChatComponent } from './chat/chat.component';
import { NgxNotificationComponent } from 'ngx-notification';
import { CenterTypeComponent } from './center-type/center-type.component';
import { TeamComponent } from './admin/team/team.component';
import { RankComponent } from './admin/rank/rank.component';
import { BookedAppointmentComponent } from './customer/booked-appointment/booked-appointment.component';
const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ContentComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    AccountComponent,
    ProfileComponent,
    DetailsComponent,
    PostComponent,
    MypostComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    SettingsComponent,
    UpdateComponent,
    PossitionComponent,
    DepertmentComponent,
  
    StaffComponent,
  
    PatientComponent,
  
    AddPatientComponent,
  
    PatientDetailsComponent,
  
    MakeAppointmentComponent,
  
    AppointmentComponent,
  
    MakePrescriptionComponent,
  
    BookAppointmentComponent,
  
    VoucherComponent,
  
    RefillComponent,
  
    VHistoryComponent,
  
    AllItemsComponent,
  
    AddItemsComponent,
  
    UnitComponent,
  
    TypeComponent,
  
    ManufacturerComponent,
  
    ShelfComponent,
  
    TransferItemsComponent,
  
    VarianceComponent,
  
    HistoryComponent,
  
    InvoiceComponent,
  
    PHistoryComponent,
  
    IncomeComponent,
  
    TransHistoryComponent,
  
    SetdepartmentComponent,
  
    PrescriptionComponent,
  
    ProgressComponent,
  
    PharmHomeComponent,
  
    PaymentHomeComponent,
  
    DoctorHomeComponent,
  
    PatientHomeComponent,
    
    ItemComponent,
  
    SetBranchComponent,
  
    TestComponent,
  
    SetLabComponent,
  
    DoctorLogComponent,
  
    PharmacyLogComponent,
  
    PaymentLogComponent,
  
    LabLogComponent,
  
    LabHomeComponent,
  
    AllStaffComponent,
  
    PatientTaskboardComponent,
  
    SetLabTestComponent,
  
    DurationComponent,
  
    DailySupplyComponent,
  
    RefillDetailsComponent,
  
    KeyComponent,
  
    LockComponent,
  
    RegisterComponent,
  
    PhamAdminComponent,
  
    PhamUserComponent,
  
    AdminProfileComponent,
  
    ForgotPasswordEmailComponent,
  
    ForgotPasswordResetComponent,
  
    CustomerCategoryComponent,
  
    PatDetailComponent,
  
    RecordsComponent,

    RecordChargeComponent,
  
    ClinicServiceComponent,
  
    PharmacyComponent,
  
    ClinicComponent,
  
    AdminComponent,
  
    LabComponent,
  
    RadioComponent,
  
    TheaterComponent,
  
    RecordComponent,
  
    RevenueComponent,
  
    NurseComponent,
  
    WardComponent,
  
    RecordAdminComponent,
  
    RecordUserComponent,
  
    ClinicAdminComponent,
  
    ClinicUserComponent,
  
    RevenueAdminComponent,
  
    RevenueUserComponent,
  
    RadioAdminComponent,
  
    RadioUserComponent,
  
    LabAdminComponent,
  
    LabUserComponent,
  
    TheaterAdminComponent,
  
    TheaterUserComponent,
  
    NurseAdminComponent,
  
    NurseUserComponent,
  
    WardAdminComponent,
  
    WardUserComponent,
  
    RecordLogComponent,
  
    ReportComponent,
  
    RecordHistoryComponent,
  
    RevenueLogComponent,
  
    AppointmentTypeComponent,
  
    BrancesComponent,
    NavLazyLoadComponent,
    ChatComponent,
    NgxNotificationComponent,
  
  
    PatientHistoryComponent,
  
    PatientReviewComponent,
  
    PatientProcessComponent,
  
    ProccessSettingsComponent,
  
    ProccessValueComponent,
  
    CenterTypeComponent,
  
    TeamComponent,
  
    RankComponent,
  
    BookedAppointmentComponent,
  
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatSnackBarModule,
    NgxPrintModule,
    NgxPaginationModule,
    MatAutocompleteModule,
    ScrollingModule,
    InfiniteScrollModule,
    ExportAsModule,
    SocketIoModule.forRoot(config),
    LazyLoadImageModule.forRoot({
      preset: scrollPreset 
    }),
    

    MatAutocompleteModule​,
    MatFormFieldModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers, { metaReducers }),
  
  ],
  providers: [
    JarwisService,
    TokenService,
    AuthService,
    BeforeLoginService,
    AfterLoginService,
    DeptAdminRoleGuardService,
    AdminRoleGuardService,
    StaffRoleGuardService,
    UserRoleGuardService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
