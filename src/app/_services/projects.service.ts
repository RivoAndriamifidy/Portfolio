import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects: Project[] = [
    {id: 0, name: "Sample Python Project", pictures: ["../../assets/image1.jpg", "../../assets/image2.jpg","../../assets/image3.jpg"], projectLink: "//www.github.com", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.PYTHON]},
    {id: 1, name: "Sample Angular App", pictures: ["../../assets/image1.jpg", "../../assets/image2.jpg","../../assets/image3.jpg"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 2, name: "Sample .Net App", pictures: ["../../assets/image1.jpg", "../../assets/image2.jpg","../../assets/image3.jpg"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.REACT, Tag.CSHARP, Tag.ASPNET]},
    {id: 3, name: "Web API Project", pictures: ["../../assets/image1.jpg", "../../assets/image2.jpg","../../assets/image3.jpg"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.CSHARP, Tag.ASPNET]},
    {id: 4, name: "Chrome Extension", pictures: ["../../assets/image1.jpg", "../../assets/image2.jpg","../../assets/image3.jpg"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.JAVASCRIPT]},
    {id: 5, name: "Mobile App", pictures: ["../../assets/image1.jpg", "../../assets/image2.jpg","../../assets/image3.jpg"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet facilis corporis exercitationem ex harum! Neque iusto repudiandae ullam eaque dolores pariatur quos quidem magnam, natus, amet excepturi magni quae ex.", tags: [Tag.JAVA]}
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
