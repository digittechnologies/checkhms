import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AccountComponent } from './user/account/account.component';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';
import { DetailsComponent } from './user/details/details.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { PostComponent } from './user/post/post.component';
import { MypostComponent } from './user/mypost/mypost.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateComponent } from './user/update/update.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './admin/home/home.component';
import { StaffComponent } from './admin/staff/staff.component';
import { PatientComponent } from './customer/patient/patient.component';
import { DepertmentComponent } from './admin/depertment/depertment.component';
import { SetdepartmentComponent } from './admin/setdepartment/setdepartment.component';

// Pharmacy
import { UnitComponent } from './pharmacy/unit/unit.component';
import { TypeComponent } from './pharmacy/type/type.component';
import { ManufacturerComponent } from './pharmacy/manufacturer/manufacturer.component';
import { CategoryComponent } from './pharmacy/category/category.component';
import { AllItemsComponent } from './pharmacy/all-items/all-items.component';
import { ShelfComponent } from './pharmacy/shelf/shelf.component';





const routes: Routes = [
  // {path: 'home', component: HomeComponent },
  {path: '', component: LoginComponent,canActivate: [BeforeLoginService] },
  {path: 'Signin', component: SigninComponent,canActivate: [BeforeLoginService] },
  {path: 'Admin', component: DashboardComponent,canActivate: [AfterLoginService], 

  children: [
    
         {path: 'Profile/:id', component: ProfileComponent, outlet: 'side',canActivate: [AfterLoginService]},
         {path: 'home', component: HomeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'staffs', component: StaffComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'patient', component: PatientComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'department', component: DepertmentComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'set_department', component: SetdepartmentComponent, outlet: 'side',canActivate: [AfterLoginService] },

         // pharmacy
         {path: 'item_type', component: TypeComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'unit', component: UnitComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'manufacturer', component: ManufacturerComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'item_category', component: CategoryComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'items', component: AllItemsComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'shelves', component: ShelfComponent, outlet: 'side',canActivate: [AfterLoginService] }


        //  {path: 'Post', component: PostComponent, outlet: 'side',canActivate: [AfterLoginService] },
        //  {path: 'Mypost', component: MypostComponent, outlet: 'side' ,canActivate: [AfterLoginService]},
        //  {path: 'Update/:id', component: UpdateComponent, outlet: 'side' ,canActivate: [AfterLoginService]}
     ],
        }, 

  {path: 'Content/:id', component: ContentComponent },
  {path: 'addcat', component:  AddcategoryComponent },
  {path: 'About', component:  AboutComponent },
  {path: 'Contact', component:  ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
