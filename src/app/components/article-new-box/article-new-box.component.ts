import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-new-box',
  templateUrl: './article-new-box.component.html',
  styleUrls: ['./article-new-box.component.scss'],
})
export class ArticleNewBoxComponent implements OnInit, OnChanges {
  @Input() msgGetter!: string;
  @Output() msgSender = new EventEmitter();
  @ViewChild('newBox', { static: false }) newBox!: ElementRef;
  editorForm!: FormGroup;
  contentData!: string;
  contentLength!: number;

  constructor(private readonly renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.msgGetter && this.msgGetter === 'onFocus')
      this.renderer.selectRootElement('#new-box-overlay').focus();
  }

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      editorContent: new FormControl(['']),
    });
  }

  charCounter(e: any): void {
    this.contentLength = 1 + 500 - e.editor.getLength();
  }

  onSubmit(): void {
    this.contentData = this.editorForm.controls.editorContent.value;
    console.log(this.contentData);
  }

  onFocusOut(): void {
    this.msgSender.emit('onFocusOut');
  }
}
