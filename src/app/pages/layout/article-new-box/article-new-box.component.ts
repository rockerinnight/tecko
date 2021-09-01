import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-new-box',
  templateUrl: './article-new-box.component.html',
  styleUrls: ['./article-new-box.component.scss'],
})
export class ArticleNewBoxComponent implements OnInit {
  @Input() layout!: string;
  @Output() closeEvent = new EventEmitter();
  editorForm!: FormGroup;
  contentData!: string;
  contentLength!: number;

  constructor() {}

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      editorContent: new FormControl(['']),
    });
  }

  onContentChanged(e: any): void {
    this.contentLength = 1 + 500 - e.editor.getLength();
  }

  onSubmit(): void {
    this.contentData = this.editorForm.controls.editorContent.value;
  }

  closeModal(): void {
    this.layout = 'close';
    this.closeEvent.emit(this.layout);
  }
}
