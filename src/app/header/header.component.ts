import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthenticationServiceService } from '../services/administrationServices/authentication-service.service';
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private loginService:AuthenticationServiceService) { }
>>>>>>> 5c3c1e62bc02bb798ef01451769d5eb7c286725c

  ngOnInit() {
  }

}
