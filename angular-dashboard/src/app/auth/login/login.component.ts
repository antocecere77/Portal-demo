import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userId': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signupForm)
    const userId = this.signupForm.value.userId;
    const password = this.signupForm.value.password;
    if(userId === 'cecerea' && password === '1234') {
      this.router.navigate(['/pages'], {relativeTo: this.route});
    }       
  }

}
