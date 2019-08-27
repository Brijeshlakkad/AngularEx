import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor() { console.log("Student show list work!")}

  ngOnInit() {
  }

}
