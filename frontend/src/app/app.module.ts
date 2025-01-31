import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

// Direct imports of Standalone Components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { PatientDashboardComponent } from "./patient-dashboard/patient-dashboard.component";
import { DoctorDashboardComponent } from "./doctor-dashboard/doctor-dashboard.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    // No need to declare standalone components here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
