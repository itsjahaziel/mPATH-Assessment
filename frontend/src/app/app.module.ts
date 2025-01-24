import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, AppComponent], // ✅ Add AppComponent here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
