import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/administrationServices/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:AuthenticationServiceService) { }

  ngOnInit() {
  }

}
