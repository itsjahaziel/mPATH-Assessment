import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-patient-dashboard",
  standalone: true,
  templateUrl: "./patient-dashboard.component.html",
  styleUrls: ["./patient-dashboard.component.css"],
  imports: [CommonModule],
})
export class PatientDashboardComponent {
  activeTab: string = "profile";

  patient = {
    name: "Jessica Taylor",
    gender: "Female",
    contact: "(415) 555-1234",
    dob: new Date(1996, 7, 23),
  };

  medicalHistory = [
    {
      date: new Date(2022, 3, 15),
      condition: "Hypertension",
      status: "Under Treatment",
    },
    {
      date: new Date(2021, 8, 10),
      condition: "Type 2 Diabetes",
      status: "Managed",
    },
    { date: new Date(2020, 5, 5), condition: "Asthma", status: "Stable" },
  ];

  appointments = [
    {
      date: new Date(2025, 1, 15),
      doctor: "Dr. John Smith",
      status: "Upcoming",
    },
    {
      date: new Date(2024, 11, 20),
      doctor: "Dr. Alice Carter",
      status: "Completed",
    },
  ];

  constructor(private router: Router) {}

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  logout() {
    localStorage.removeItem("role");
    this.router.navigate(["/login"]);
  }
}
