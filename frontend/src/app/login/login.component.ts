import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Fix for *ngIf and ngModel
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private router: Router) {}

  onSubmit() {
    console.log("Login button clicked");
    console.log("Username:", this.username);
    console.log("Password:", this.password);

    if (this.username === "admin" && this.password === "password123") {
      console.log("Admin logged in!");
      this.router.navigate(["/admin-dashboard"]);
    } else if (this.username === "doctor" && this.password === "doctor123") {
      console.log("Doctor logged in!");
      this.router.navigate(["/doctor-dashboard"]);
    } else if (this.username === "patient" && this.password === "patient123") {
      console.log("Patient logged in!");
      this.router.navigate(["/patient-dashboard"]);
    } else {
      console.log("Invalid credentials");
      this.errorMessage = "Invalid username or password";
    }
  }
}
