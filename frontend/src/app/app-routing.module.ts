import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Import Components for Routing
import { LoginComponent } from "./login/login.component";
import { PatientDashboardComponent } from "./patient-dashboard/patient-dashboard.component";
import { DoctorDashboardComponent } from "./doctor-dashboard/doctor-dashboard.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" }, // ✅ Ensures "/" goes to login
  { path: "login", component: LoginComponent },
  { path: "patient-dashboard", component: PatientDashboardComponent },
  { path: "doctor-dashboard", component: DoctorDashboardComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
  { path: "**", redirectTo: "/login" }, // ✅ Catch-all for invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
