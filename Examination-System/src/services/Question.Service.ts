import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  baseURL: string = 'https://localhost:7022/api/exam/exam-questions';

  constructor(private http: HttpClient) {}

  getQuestions(examId:any) {
    console.log(`${this.baseURL}/${examId}`);
    
    return this.http.get(`${this.baseURL}/${examId}`);
  }



}
