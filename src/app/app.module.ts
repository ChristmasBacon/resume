import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';

const appRoutes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'Education', component: EducationComponent},
  {path : '', component: AppComponent},
  {path : 'Experience', component: ExperienceComponent},
  {path : 'Contact', component: ContactComponent},
  {path : 'Skills', component: SkillsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
