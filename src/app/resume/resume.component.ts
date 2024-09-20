import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  // Creation de titre de page
  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Rivo Andriamifidy - Resume ')
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../asset/CV-Rivo.pdf');
    link.setAttribute('download', 'CV-Rivo');
    link.click();
    link.remove();
  }

}
