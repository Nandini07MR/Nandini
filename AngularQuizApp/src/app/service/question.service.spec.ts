import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { QuestionService } from "./question.service"

describe('Question Service',()=>{
  let httpClientSpy:jasmine.SpyObj<HttpClient>;
  let questionService:QuestionService;
  let QUESTIONS =[
    {
      "questionText":"which of the following does TypeScript use to specify types?",
      "options":[
          {
              "text":"!"
          },
          {
              "text":":",
              "correct":true
          },
          {
              "text":";"
          },
          {
              "text":"&"
          }
      ],
      "explaination":"Ts uses a colon(:) to separate the property name from the property type"
  },
  {
      "questionText": "How else can Array<number> be written in TypeScript?",
      "options": [{
          "text":"@number"
      },
      {
          "text":"number[]",
          "correct":true
      },
      {
          "text":"number!"
      },
      {
          "text":"number?"
      }
  ],
  "explaination": "number[] is another way of writing Array<number> in TypeScript"
      
  },
  {
      "questionText":"which is not an access modifier?",
      "options":[
          {
              "text":"private"
          },
          {
              "text":"protected"
          },
          {
              "text":"public"
          },
          {
              "text":"static",
              "correct":true
          }],
          "explaination":"static is not an access modifier"

  }
  ]
  
  beforeEach(()=>{
    httpClientSpy= jasmine.createSpyObj('HttpClient',['get']);
    questionService = new QuestionService(httpClientSpy);

  })
  describe('getQuestions()',()=>{
    it('should return expected questions when getQuestions is called',()=>{
      httpClientSpy.get.and.returnValue(of(QUESTIONS));
      questionService.getQuestion().subscribe({
        next:(questions)=>{
          expect(questions).toEqual(QUESTIONS);
          
        },
        error:()=>{}
      })
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);

    })
  })
})
