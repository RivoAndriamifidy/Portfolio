import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  // Creation de titre de page
  constructor(private titleService: Title){
    this.titleService.setTitle('Rivo Andriamifidy - Resume ')
  }

}
