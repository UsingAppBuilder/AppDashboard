import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-master-view1',
  templateUrl: './master-view1.component.html',
  styleUrls: ['./master-view1.component.scss']
})
export class MasterView1Component implements OnInit {
  public groupVisible = false;
  public dashboardDataGrid: any = null;
  public dashboardDataChart: any = null;

  constructor(
    private dashboardDataService: DashboardDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dashboardDataService.getData('Grid').subscribe(data => this.dashboardDataGrid = data);
    this.dashboardDataService.getData('Chart').subscribe(data => this.dashboardDataChart = data);
  }
}
