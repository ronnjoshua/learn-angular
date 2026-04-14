import { Component, input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.html',
  styleUrls: ['./logout.css'],
})
export class Logout {
  readonly occupation = input<string>();
  username = input<string>();
  message = input<string>();
  reply = output<string>();

  inputMessage = input<string>();
  outputMessage = output<string>();

  sendtoParent() {
    this.outputMessage.emit('What\s up Parent! 👋');
  }

  someData = input<number>();
  

}
