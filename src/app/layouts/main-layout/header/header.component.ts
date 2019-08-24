import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() side;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public sideToggle(): void {
    if (this.side) { this.side.toggle(); }
  }

  public logout() {
    this.authService.logout();
  }

}
