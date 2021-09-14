import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-new-button',
  templateUrl: './article-new-button.component.html',
  styleUrls: ['./article-new-button.component.scss'],
})
export class ArticleNewButtonComponent implements OnInit {
  @Output() msgSender = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendFocus(): void {
    this.msgSender.emit('onFocus');
  }
}
