import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:Array<any>=[
    { id:1,
      dec:"I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    author:"Suzanne Smith,",
    title:"Stylist"},
    { id:2,
      dec:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
      author:"Emma Jones,",
      title:"Model"},
    { id:2,
      dec:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content.",
      author:"Olivia Heart,",
      title:"Lawyer"},
  ]
  constructor() { }
}
