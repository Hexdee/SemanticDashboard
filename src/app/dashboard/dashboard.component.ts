import { Component } from '@angular/core';
import { ChartOptions, ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    aspectRatio: 3,
    borderColor: "#64CCC5",
  };
  doughnutChartLabels = ['Internal', 'External'];

  doughnutChartDatasets = [{
    data: [300, 500]
  }];
  doughnutChartLegend = true
  doughnutChartPlugins = [];

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Expenses',
        fill: true,
        tension: 0.5,
        borderColor: "#176B87",
        backgroundColor: '#176B87'
      }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    aspectRatio: 3,
  };
  lineChartLegend = true;

}
