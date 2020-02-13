import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../fire-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phones = [];

  constructor(public db: FireDbService) { }

  ngOnInit() {

    this.db.getOutStandingPhones().subscribe( snap => {
      this.phones = [];
      snap.forEach( u => {
        const phones: any = u.payload.val();
        this.phones.push(phones);
      });
    });

  }

}
