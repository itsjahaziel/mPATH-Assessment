import { Component } from "@angular/core";
import { RouterModule } from "@angular/router"; // Import RouterModule here

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [RouterModule], // Include RouterModule in the imports array
})
export class AppComponent {
  title = "mPATH-Assessment";
}
