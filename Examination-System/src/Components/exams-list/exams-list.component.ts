import { Component } from '@angular/core';
const Exams = [
  {
    title: "HTML",
    description: "This is a description of HTML"
  },
  {
    title: "CSS",
    description: "This is a description of CSS"
  },
  {
    title: "JS",
    description: "This is a description of JS"
  }
];
@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css']
})

export class ExamsListComponent {

  

}
