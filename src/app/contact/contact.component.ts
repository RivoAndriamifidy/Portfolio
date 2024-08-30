import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // Creation de titre de page
  constructor(private titleService: Title){
    this.titleService.setTitle('Rivo Andriamifidy - Contact ')
  }

}
