import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JarwisService } from './service/jarwis.service';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryComponent } from './category/category.component';
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
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'​;
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PopulationComponent } from './admin/population/population.component';
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
import { AddDepartmentComponent } from './admin/add-department/add-department.component';


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
    AddcategoryComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    PopulationComponent,
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
  
    AddDepartmentComponent
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
    LazyLoadImageModule.forRoot({
      preset: scrollPreset 
    }),

    MatAutocompleteModule​,
    MatFormFieldModule,
  
  ],
  providers: [JarwisService,TokenService,AuthService,BeforeLoginService,AfterLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
