import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from '../../../node_modules/chart.js';
import { ChartDataService } from '../chart.data.service.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('myChart') myChart;
  myChartObj: any;
  constructor(private chartDataService: ChartDataService) {
  }

  ngOnInit() {
    this.chartDataService.getwsInstance().onmessage = (e) => {
      console.log("msg:"+ JSON.parse(e.data));
      let valarr = JSON.parse(e.data).val;
      this.plotUpdateChart(valarr);
    };
  }

  plotUpdateChart(data: any) {
    this.myChartObj.data.datasets.forEach((dataset) => {
      dataset.data[0] = data[0]
      dataset.data[1] = data[1];
    });
    this.myChartObj.update();
  }

  ngAfterViewInit() {
    this.myChartObj = new Chart(this.myChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['% correct', '% wrong'],
        datasets: [{
          label: '%',
          data: [],
          backgroundColor: [
            'rgb(75, 192, 192)',
            'rgb(255, 99, 132)',
          ],
          borderWidth: 1
        }]
      },
    });
  }
}
