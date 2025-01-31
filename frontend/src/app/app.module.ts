import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { PatientDashboardComponent } from "./patient-dashboard/patient-dashboard.component";
import { DoctorDashboardComponent } from "./doctor-dashboard/doctor-dashboard.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

// Import standalone components
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [], // Empty declarations array, since we are importing standalone components directly
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    LoginComponent, // Import the standalone components here
    PatientDashboardComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    CommonModule, // Import CommonModule for directives like *ngIf, *ngFor
  ],
  providers: [],
  bootstrap: [AppComponent], // Use AppComponent as the bootstrap component
})
export class AppModule {}
