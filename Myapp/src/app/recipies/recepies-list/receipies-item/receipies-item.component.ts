import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../../recipie.model';


@Component({
  selector: 'app-receipies-item',
  templateUrl: './receipies-item.component.html',
  styleUrls: ['./receipies-item.component.css']
})
export class ReceipiesItemComponent implements OnInit {

  @Input() recipe: Recipie;
  @Input() index: number;


  ngOnInit() {
  }


}
