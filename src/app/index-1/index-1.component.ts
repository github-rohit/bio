import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index-1',
  templateUrl: './index-1.component.html',
  styleUrls: ['./index-1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Index1Component implements OnInit {
  show = false;
  data = {};
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(res => {
      this.data = res;
      this.show = true;
    });
  }

}
