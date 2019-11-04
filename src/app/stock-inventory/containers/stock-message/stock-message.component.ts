import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stock-message',
  styleUrls: ['./stock-message.component.scss'],
  templateUrl: './stock-message.component.html',
})
export class StockMessageComponent  {

  message: Observable<any> = this.router.data;

  constructor(private router: ActivatedRoute) {

  }


}
