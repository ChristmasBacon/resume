import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

const appRoutes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'Education', component: EducationComponent},
  {path : '', component: AppComponent},
  {path : 'Experience', component: ExperienceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ExperienceComponent
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
