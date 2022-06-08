import { Component, OnInit } from '@angular/core';
import { ForumsService } from '../forums/services/forums.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  users!: any[];
  talkTo!: string;

  constructor(private forumsService: ForumsService) { }

  ngOnInit(): void {
    this.users = this.forumsService.users;
  }

  close() { }

}
