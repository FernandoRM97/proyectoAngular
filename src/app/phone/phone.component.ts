import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireDbService } from '../fire-db.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  movil: any;
  id: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dbData: FireDbService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(response => {
      this.id = response.get('phoneId');
    });

    if (this.id[1] === 'I') {
      this.dbData.getPhoneIphone(this.id[0]).subscribe( snap => {
        this.movil = [];
        snap.forEach( u => {

          const user: any = u.payload.val();

          this.movil.push(user);
        });
      });
    } else if (this.id[1] === 'S') {
      this.dbData.getPhoneSamsung(this.id[0]).subscribe( snap => {
        this.movil = [];
        snap.forEach( u => {

          const user: any = u.payload.val();

          this.movil.push(user);
        });
      });
    } else if (this.id[1] === 'H') {
      this.dbData.getPhoneHuawei(this.id[0]).subscribe( snap => {
        this.movil = [];
        snap.forEach( u => {

          const user: any = u.payload.val();

          this.movil.push(user);
        });
      });
    } else if (this.id[1] === 'L') {
      this.dbData.getPhoneLg(this.id[0]).subscribe( snap => {
        this.movil = [];
        snap.forEach( u => {

          const user: any = u.payload.val();

          this.movil.push(user);
        });
      });
    }

  }

  alerta() {
    Swal.fire({
      icon: 'success',
      title: 'Genial',
      text: 'Compra realizada con éxito',
    });
    this.router.navigate(['/']);
  }
}
