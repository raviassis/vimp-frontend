import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() side;

  links = [
    {url: '/', name: 'Home', icon: 'home'},
    {url: '/videos', name: 'Videos', icon: 'local_movies'}
  ];

  constructor() { }

  ngOnInit() {
  }

  public sideToggle(): void {
    if (this.side) { this.side.toggle(); }
  }

}
