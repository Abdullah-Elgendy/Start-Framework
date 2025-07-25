import { Component } from '@angular/core';
import { Title } from '../title/title';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [Title, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  //moves label above input field if input field has a value.
  moveLabel(input: string, label: Element) {
    if (input) {
      label.classList.remove('top-move');
    } else {
      label.classList.add('top-move');
    }
  }
}
