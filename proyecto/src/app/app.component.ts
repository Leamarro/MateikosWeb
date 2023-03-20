import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  articulos:any;

  constructor(public appServicio: AppService) {}

  ngOnInit() {
    this.appServicio.getUsers()
  }


}