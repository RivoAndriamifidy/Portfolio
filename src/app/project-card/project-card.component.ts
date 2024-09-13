import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']  // Attention: c'est 'styleUrls' (pluriel)
})
export class ProjectCardComponent {

  @Input() project = {} as Project; // Titre de card
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project
      }
    };

    // Utilise 'modalOptions' pour passer les données
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
