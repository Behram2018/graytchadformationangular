import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './list-student/list-student.component';
import { LalekouComponent } from './lalekou/lalekou.component';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { FiltrePipe } from '../pipes/filtre.pipe';
import { FormsModule } from '@angular/forms';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ModificationEtudiantComponent } from './modification-etudiant/modification-etudiant.component';
import { MajusculeDirective } from '../directives/majuscule.directive';
import { NombreDirective } from '../directives/nombre.directive';



@NgModule({
  declarations: [
    ListStudentComponent,
    LalekouComponent,
    FiltrePipe,
    MajusculeDirective,
    AjoutEtudiantComponent,
    NombreDirective,
    ModificationEtudiantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EtudiantRoutingModule
  ],
  exports: [
    ListStudentComponent,
    LalekouComponent,
    FiltrePipe
  ]
})
export class EtudiantModule { }
