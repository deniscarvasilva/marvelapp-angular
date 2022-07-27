import { Component, OnInit } from '@angular/core';
import { RangeService } from 'src/app/services/range.service';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {
  listRange: number[] = [];
  //duas listas!!!! uma com o slice configurado
  constructor(private rangeService: RangeService) { }

  ngOnInit(): void {
  }

  prev() {
    this.rangeService.prev();
  }
  next() {
    this.rangeService.next();
  }

}
