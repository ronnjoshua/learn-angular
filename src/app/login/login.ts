import { Component, signal, input, computed } from '@angular/core';
import { Logout } from "../logout/logout";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [Logout],
})

export class Login {
  count = 0;
  name = signal("Ronn"); // make name a signal
  isDisabled = signal(true); // signal for button disabled state

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
    
  logEvents($event: any) {
    console.log($event);
  }

  toggleBorderColor($event: any) {
    console.log($event.target.className);
    if ($event.target.className  === "border border-black px-4 py-2 mt-2") {
    $event.target.className = "border border-red-500 px-4 py-2 mt-2";
    $event.target.innerText = "Border Color Changed";
    console.log($event);
  }
  else {
    $event.target.className = "border border-black px-4 py-2 mt-2";
    $event.target.innerText = "Border Color Returned";
  }
  }

  toggleName() {
  this.name.update(current =>
    current === "Ronn" ? "Joshua" : "Ronn"
  );
}

  updateUsername(newName: string) {
    this.name.set(newName);
  }

  function() {
     let color = [1, 2 ,3 ,4, 5];
    let [x, y, z, w] = color;
    console.log(x); // 1


  }
  parentMessage = 'Hello Child!';
  childReply = '';
  parentData = 5;

  receiveReply(data: string) {
    this.childReply = data;
  }
  


}