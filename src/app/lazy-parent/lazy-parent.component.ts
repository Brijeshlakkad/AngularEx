import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-parent',
  templateUrl: './lazy-parent.component.html',
  styleUrls: ['./lazy-parent.component.css']
})
export class LazyParentComponent implements OnInit {

  constructor() { 
    console.log("Lazy Parent Loaded");
  }

  ngOnInit() {
  }

}
