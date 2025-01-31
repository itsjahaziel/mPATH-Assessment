import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule for ngIf

@Component({
  selector: "app-patient-dashboard",
  standalone: true,
  templateUrl: "./patient-dashboard.component.html",
  styleUrls: ["./patient-dashboard.component.css"],
  imports: [CommonModule], // Include CommonModule for ngIf
})
export class PatientDashboardComponent {
  // Patient dashboard logic
}
