import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '../title/title';

@Component({
  selector: 'app-portfolio',
  imports: [Title],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  //select the modal img element
  @ViewChild('ModalImg') ModalImg!: ElementRef;

  //function to set the url of the clicked img to the modal img
  //this function fires when clicking the img card in the template
  setModalImg(url: string) {
    this.ModalImg.nativeElement.setAttribute('src', url);
  }
}
