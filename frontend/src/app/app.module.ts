import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Import Angular Material Modules
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";

// Import Components
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module"; // ✅ Ensure routing works properly

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    AppRoutingModule, // ✅ Routing module imported properly
  ],
  providers: [],
  bootstrap: [AppComponent], // ✅ AppComponent is bootstrapped instead of declared
})
export class AppModule {}
