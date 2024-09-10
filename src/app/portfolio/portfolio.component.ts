import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects: Project[] = [
    {id: 0, name: "Sample Python Project", pictures: [], projectLink: "//www.github.com", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.PYTHON]},
    {id: 0, name: "Sample Angular App", pictures: [], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 0, name: "Sample .Net App", pictures: [], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.REACT, Tag.CSHARP, Tag.ASPNET]},
    {id: 0, name: "Web API Project", pictures: [], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.CSHARP, Tag.ASPNET]},
    {id: 0, name: "Chrome Extension", pictures: [], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.JAVASCRIPT]},
    {id: 0, name: "Mobile App", pictures: [], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.JAVA]}
  ];
  // Creation de titre de page
  constructor(private titleService: Title){
    this.titleService.setTitle('Rivo Andriamifidy - Portfolio ')
  }
}
