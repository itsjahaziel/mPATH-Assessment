import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms"; // Import FormsModule here
import { CommonModule } from "@angular/common"; // Import CommonModule for ngIf

@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  imports: [CommonModule, FormsModule], // Include FormsModule and CommonModule
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  errorMessage: string = "";

  onLogin() {
    if (this.username && this.password) {
      // Handle login logic here
    } else {
      this.errorMessage = "Both fields are required.";
    }
  }
}
