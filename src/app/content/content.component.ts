import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cname = 'Dream maker'
  hrname = 'Mr. A. B. Patil'
  email = 'abphr@gmail.com'
  address = 'ABC apartmnt, lane no.2, XYZ colony, pune.'

  constructor() { }

  ngOnInit(): void {
  }

}
