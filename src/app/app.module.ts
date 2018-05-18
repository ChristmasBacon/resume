import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';

const appRoutes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'Education', component: EducationComponent},
  {path : '', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent
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
