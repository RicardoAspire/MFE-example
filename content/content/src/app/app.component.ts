import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    {
      title: 'Carta uno',
      description: 'Description one',
      image: 'aaaaaa',
      date: '26/05/80'
    }
  ]
  title = 'content';
}
