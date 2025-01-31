import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule for ngIf

@Component({
  selector: "app-admin-dashboard",
  standalone: true,
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
  imports: [CommonModule], // Include CommonModule for ngIf
})
export class AdminDashboardComponent {
  // Admin dashboard logic
}
