import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-doctor-dashboard",
  templateUrl: "./doctor-dashboard.component.html",
  styleUrls: ["./doctor-dashboard.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class DoctorDashboardComponent {
  activeTab: string = "profile";

  doctor = {
    name: "Dr. John Smith",
    specialization: "Cardiologist",
    contact: "(123) 456-7890",
    email: "dr.johnsmith@hospital.com",
  };

  patients = [
    {
      name: "Jessica Taylor",
      condition: "Hypertension",
      lastVisit: "Jan 10, 2025",
    },
    {
      name: "Michael Johnson",
      condition: "Diabetes",
      lastVisit: "Feb 2, 2025",
    },
  ];

  appointments = [
    { date: "Feb 15, 2025", patient: "Jessica Taylor", status: "Scheduled" },
    { date: "Mar 5, 2025", patient: "Michael Johnson", status: "Completed" },
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
