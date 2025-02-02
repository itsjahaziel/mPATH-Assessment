import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = "http://localhost:5029/api"; // ✅ Adjust to match your backend

  constructor(private http: HttpClient) {}

  // Fetch patient data
  getPatientData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/patients`);
  }

  // Fetch doctor data
  getDoctorData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/doctors`);
  }

  // Fetch admin user data
  getAdminUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  // Fetch logs
  getLogs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logs`);
  }

  // Authenticate login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
