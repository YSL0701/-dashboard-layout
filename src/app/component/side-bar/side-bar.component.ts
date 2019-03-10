import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  menuOpen = false

  constructor() {}

  ngOnInit() {}

  open() {
    this.menuOpen = !this.menuOpen
  }
}
