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
    aspectRatio: 4,
  };
  doughnutChartLabels = ['Internal', 'External'];
  doughnutChartColors = [
    {
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ];
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
        label: 'Series A',
        fill: true,
        tension: 0.5,
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    aspectRatio: 2,
  };
  lineChartLegend = true;

}
