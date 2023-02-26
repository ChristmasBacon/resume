import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'experience', component: ExperienceComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'summary', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
