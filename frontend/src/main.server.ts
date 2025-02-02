import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config.server";
import { AppComponent } from "./app/app.component";

export function defaultExport() {
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
}

export default defaultExport;
