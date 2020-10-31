import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.color';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [120, 150,164,123,159,210,123,89], label: 'Transito'},
  { data: [123,125,165,157,152,132,142,156], label: 'Covid'},
  { data: [140,120,130,150,120,123,165,172], label: 'Pavimentação'}
];

const LINE_CHART_LABELS: string[] = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  }
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit(): void {
  }


}
