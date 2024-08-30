import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Creation de titre de page
  constructor(private titleService: Title){
    this.titleService.setTitle('Rivo Andriamifidy - Home ')
  }

}
