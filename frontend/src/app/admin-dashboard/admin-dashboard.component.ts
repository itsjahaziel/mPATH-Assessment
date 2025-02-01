import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class AdminDashboardComponent {
  activeTab: string = "users";

  users = [
    { name: "Jessica Taylor", role: "Patient", status: "Active" },
    { name: "Dr. John Smith", role: "Doctor", status: "Active" },
    { name: "Michael Johnson", role: "Patient", status: "Inactive" },
  ];

  logs = [
    { user: "Admin", action: "Logged in", date: "Feb 10, 2025" },
    {
      user: "Dr. John Smith",
      action: "Updated patient records",
      date: "Feb 9, 2025",
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
