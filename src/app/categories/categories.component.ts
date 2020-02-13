import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../fire-db.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  iphones = [];
  moviles = [];
  huaweis = [];
  lgs = [];
  brands = ['Iphone', 'Samsung', 'Huawei', 'LG'];

  constructor(public db: FireDbService) { }

  ngOnInit() {

    this.db.getSamsungs().subscribe( snap => {
      this.moviles = [];
      snap.forEach( u => {
        const phones: any = u.payload.val();
        this.moviles.push(phones);
      });
    });

    this.db.getIphones().subscribe( snap => {
      this.iphones = [];
      snap.forEach( u => {
        const phones: any = u.payload.val();
        this.iphones.push(phones);
      });
    });

    this.db.getHuawei().subscribe( snap => {
      this.huaweis = [];
      snap.forEach( u => {
        const phones: any = u.payload.val();
        this.huaweis.push(phones);
      });
    });

    this.db.getLg().subscribe( snap => {
      this.lgs = [];
      snap.forEach( u => {
        const phones: any = u.payload.val();
        this.lgs.push(phones);
      });
    });

  }

}
