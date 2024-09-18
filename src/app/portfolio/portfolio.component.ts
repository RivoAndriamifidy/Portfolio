import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];
  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  javascript: boolean = false;
  react: boolean = false;

  
  
  // Creation de titre de page
  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Rivo Andriamifidy - Portfolio ')
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS)
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.react){
      filterTags.push(Tag.REACT)
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.angular = false;
    this.typescript = false;
    this.nodejs = false;
    this.aspnet = false;
    this.javascript = false;
    this.react = false;

    this.projects = this.projectService.GetProjects();
  }
}
