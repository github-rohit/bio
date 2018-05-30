import { DataService } from './../services/data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  show = false;
  data = {};
  minHeight = (window.innerHeight - 64) + 'px';
  constructor(private dataService: DataService) { }

  goToSection(id) {
    const section = document.querySelector(id);

    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': section.offsetTop
    });
  }

  ngOnInit() {
    this.dataService.getData().then(res => {
      this.data = res;
      this.show = true;
    });
  }
}
