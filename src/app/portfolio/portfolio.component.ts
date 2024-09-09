import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    tags: ['Angular', 'TypeScript'],
    pictures: []
  };
  // Creation de titre de page
  constructor(private titleService: Title){
    this.titleService.setTitle('Rivo Andriamifidy - Portfolio ')
  }
}
