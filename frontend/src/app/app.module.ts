import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

// Import Angular Material Modules
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from "@angular/common";
// Import Components
import { AppComponent } from "./app.component";
import { PatientDashboardComponent } from "./patient-dashboard/patient-dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: "", component: AppComponent },
      { path: "patient-dashboard", component: PatientDashboardComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
