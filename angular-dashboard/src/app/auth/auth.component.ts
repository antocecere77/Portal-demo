import { Component } from '@angular/core';

@Component({
  selector: 'ngx-auth',
  styleUrls: ['auth.component.scss'],
  template: `
    <login-layout>      
      <router-outlet></router-outlet>
    </login-layout>
  `,
})
export class AuthComponent {
}
