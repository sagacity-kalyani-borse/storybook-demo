import { Component, Input, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  @Input()
  imgSrc: string = 'https://i.pinimg.com/originals/be/f0/74/bef07474b286c22b776ec06055e06314.jpg'; //Make sure you add your image URL
 
  @Input()
  altTxt?: string = 'pondicherry french hotel';
 
  @Input()
  figCaptionTxt?: string =
    'The French Quarter or White Town area in Pondicherry is filled with elegant colonial mansions in the midst of tree-lined boulevards, named on French streets beginning with';
 
  @Input()
  title="";
  imgOpacity?:1;
  // imgOpacity1:any;
  constructor() {}
 
  ngOnInit(): void {}
}