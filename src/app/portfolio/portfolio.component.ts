import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  // Creation de titre de page
  constructor(private titleService: Title){
    this.titleService.setTitle('Rivo Andriamifidy - Portfolio ')
  }
}
