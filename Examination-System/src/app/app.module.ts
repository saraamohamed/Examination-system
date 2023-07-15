import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/Components/navbar/navbar.component';
import { FooterComponent } from 'src/Components/footer/footer.component';
import { ExamsListComponent } from 'src/Components/exams-list/exams-list.component';
import { ExamQAsComponent } from 'src/Components/exam-qas/exam-qas.component';
import { ExamResultComponent } from 'src/Components/exam-result/exam-result.component';
import { HomeComponent } from 'src/Components/home/home.component';
import { AboutComponent } from 'src/Components/about/about.component';
import { NotFoundComponent } from 'src/Components/not-found/not-found.component';
import { ContactsComponent } from 'src/Components/contacts/contacts.component';
import { RegisterComponent } from 'src/Components/register/register.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ExamsListComponent,
    ExamQAsComponent,
    ExamResultComponent,
    HomeComponent,
    AboutComponent,NotFoundComponent,ContactsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,HttpClientModule, CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
