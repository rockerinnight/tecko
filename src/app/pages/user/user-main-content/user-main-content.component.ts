import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IArticleComments } from 'src/app/core/models/article-comments.model';
import { IProfile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-user-main-content',
  templateUrl: './user-main-content.component.html',
  styleUrls: ['./user-main-content.component.scss'],
})
export class UserMainContentComponent implements OnInit {
  @Input() profileData!: IProfile;
  @Input() articleCommentsList!: IArticleComments[];

  constructor(private readonly spinner: NgxSpinnerService) {}

  ngOnInit(): void {}
}
