import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kool-shopping';
  constructor(private toastr: ToastrService) { }

  openForm(){
    window.open('https://assistant-chat-eu-gb.watsonplatform.net/web/public/e5035b01-5e7e-47ec-bee0-587fdc239455');

  }
}
