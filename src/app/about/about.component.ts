import { Component, OnInit } from '@angular/core';
import { FireDbService } from '../fire-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private dbData: FireDbService,
              private router: Router) {
    this.contactForm = this.createFormGroup();
   }

  public contactForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(200)])
    });
  }

  ngOnInit() {
  }

  onResetForm() {
  this.contactForm.reset();
  }

  onSaveForm() {
    if (this.contactForm.valid) {
      this.router.navigate(['/']);
      this.onResetForm();
      Swal.fire({
        icon: 'success',
        title: 'Genial',
        text: 'Mensaje enviado con éxito',
      });
    } else {
      console.log('ERROR', this.contactForm);
    }

  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

}
