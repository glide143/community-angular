import { Component, OnInit } from '@angular/core';
import { Forum } from '../services/data';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forum!: Forum;
  constructor() { }

  ngOnInit(): void {
  }

}
