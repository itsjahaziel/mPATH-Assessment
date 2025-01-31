import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule for ngIf

@Component({
  selector: "app-doctor-dashboard",
  standalone: true,
  templateUrl: "./doctor-dashboard.component.html",
  styleUrls: ["./doctor-dashboard.component.css"],
  imports: [CommonModule], // Include CommonModule for ngIf
})
export class DoctorDashboardComponent {
  // Doctor dashboard logic
}
