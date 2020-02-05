import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    database().ref('/iphone');
  }


}
