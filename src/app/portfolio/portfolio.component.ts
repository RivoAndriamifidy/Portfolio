import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];
  isCollapsed: boolean = true;
  
  // Creation de titre de page
  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Rivo Andriamifidy - Portfolio ')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
