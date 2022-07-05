import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardData } from './dashboard-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  public getData(tableName: string): Observable<any> {
    return of(DashboardData[tableName]);
  }
}
