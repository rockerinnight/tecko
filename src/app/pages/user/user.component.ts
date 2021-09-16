import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { IArticleComments } from 'src/app/core/models/article-comments.model';
import { IArticle } from 'src/app/core/models/article.model';
import { IProfile } from 'src/app/core/models/profile.model';
import { ArticleService } from '../article/article.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userData!: IProfile;
  articleCommentsList!: IArticleComments[];
  private _articleList!: IArticle[];
  private _unsubs$ = new Subject();

  constructor(
    private readonly articleService: ArticleService,
    private readonly spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.userData = {
      username: 'jakethedog',
      bio: 'I work at statefarm',
      image: 'https://i.stack.imgur.com/xHWG8.jpg',
      following: false,
    };
    this.articleCommentsList = [
      {
        title: 'Fresh Title',
        slug: 'fresh-title-yaypy6',
        body: 'Hz',
        createdAt: '2021-09-05T16:28:05.856Z',
        updatedAt: '2021-09-05T16:28:05.856Z',
        tagList: [],
        description: 'art descr',
        author: {
          username: 'KarateKid',
          bio: null,
          image: null,
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
      {
        title: 'New one',
        slug: 'new-one-v1al4c',
        body: 'text',
        createdAt: '2021-09-05T16:15:24.469Z',
        updatedAt: '2021-09-05T16:15:24.469Z',
        tagList: [],
        description: 'about?',
        author: {
          username: 'KarateKid',
          bio: null,
          image:
            'https://www.clipartmax.com/png/middle/149-1498081_karate-cartoon-stock-photography-stock-illustration-karate-kid-icon.png',
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
      {
        title: 'New one',
        slug: 'new-one-olrywe',
        body: 'text',
        createdAt: '2021-09-05T16:14:39.639Z',
        updatedAt: '2021-09-05T16:14:39.639Z',
        tagList: [],
        description: 'about?',
        author: {
          username: 'KarateKid',
          bio: null,
          image:
            'https://www.clipartmax.com/png/middle/149-1498081_karate-cartoon-stock-photography-stock-illustration-karate-kid-icon.png',
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
      {
        title: 'Article created by Cypress test',
        slug: 'article-created-by-cypress-test-gn2mko',
        body: 'Test can edit an article. https://github.com/helenanull/cypress-example',
        createdAt: '2021-09-05T16:05:39.464Z',
        updatedAt: '2021-09-05T16:05:41.969Z',
        tagList: ['test-automation', 'simple', 'cypress'],
        description: 'https://github.com/helenanull/cypress-example',
        author: {
          username: 'cy538131073',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
      {
        title: 'Article created by Cypress test',
        slug: 'article-created-by-cypress-test-yvlqyw',
        body: 'This article is created with Cypress. See code here: https://github.com/helenanull/cypress-example',
        createdAt: '2021-09-05T16:05:38.151Z',
        updatedAt: '2021-09-05T16:05:38.151Z',
        tagList: ['test-automation', 'simple', 'cypress'],
        description: 'https://github.com/helenanull/cypress-example',
        author: {
          username: 'cy364599608',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
      {
        title: 'My post title',
        slug: 'my-post-title-6wjhqw',
        body: 'Simple automation project https://github.com/helenanull/cypress-example',
        createdAt: '2021-09-05T16:05:36.722Z',
        updatedAt: '2021-09-05T16:05:36.722Z',
        tagList: ['test-automation', 'cypress'],
        description: 'Cypress',
        author: {
          username: 'cy294137449',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
      {
        title: 'My post title',
        slug: 'my-post-title-n0t49f',
        body: 'Simple automation project https://github.com/helenanull/cypress-example',
        createdAt: '2021-09-05T16:05:32.834Z',
        updatedAt: '2021-09-05T16:05:32.834Z',
        tagList: [],
        description: 'Cypress',
        author: {
          username: 'cy156167555',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
      {
        title: 'Grupo Primo',
        slug: 'grupo-primo-wsi90q',
        body: 'Follow @thiago.nigro on Instagram',
        createdAt: '2021-09-05T15:20:55.938Z',
        updatedAt: '2021-09-05T15:20:55.938Z',
        tagList: [],
        description: 'Best investment and entrepreneur content',
        author: {
          username: 'Grupo Primo',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
      {
        title: 'Article created by Cypress test',
        slug: 'article-created-by-cypress-test-39sw1a',
        body: 'This article is created with Cypress. See code here: https://github.com/helenanull/cypress-example',
        createdAt: '2021-09-05T15:07:22.346Z',
        updatedAt: '2021-09-05T15:07:22.346Z',
        tagList: ['test-automation', 'simple', 'cypress'],
        description: 'https://github.com/helenanull/cypress-example',
        author: {
          username: 'cy421356318',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
      {
        title: 'My post title',
        slug: 'my-post-title-h6zozr',
        body: 'Simple automation project https://github.com/helenanull/cypress-example',
        createdAt: '2021-09-05T15:06:34.855Z',
        updatedAt: '2021-09-05T15:06:34.855Z',
        tagList: ['test-automation', 'cypress'],
        description: 'Cypress',
        author: {
          username: 'cy607434388',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false,
        },
        favorited: false,
        favoritesCount: 0,
        comments: [
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
          {
            id: 1,
            body: '',
            createdAt: '2021-09-05T16:28:05.856Z',
            updatedAt: '2021-09-05T16:28:05.856Z',
            author: {
              username: 'KarateKid',
              bio: null,
              image: null,
              following: false,
            },
          },
        ],
      },
    ];
    this.spinner.show();
    // merge(
    //   this.articleService.getArticlesFeed(this.offset, 10),
    //   this.articleService.getArticlesGlobal(this.offset, 10)
    // )
    //   .pipe(
    //     takeUntil(this._unsubs$),
    //     finalize(() => {
    //       this.spinner.hide();
    //     })
    //   )
    //   .subscribe(
    //     (articles: IArticlesDto) => {
    //       this._articleList = articles.articles;
    //       this._articleList.forEach((article: IArticle) => {
    //         this.articleService
    //           .getComments(article.slug)
    //           .subscribe((comments: ICommentsDto) => {
    //             this.articleCommentsList = this._articleList.map(
    //               (article: IArticle) => {
    //                 return {
    //                   comments: [...comments.comments],
    //                   ...article,
    //                 } as unknown as IArticleComments;
    //               }
    //             );
    //           });
    //       });
    //     },
    //     (e: HttpErrorResponse) => {
    //       console.log(e);
    //     }
    //   );
  }

  ngOnDestroy(): void {
    this._unsubs$.next();
    this._unsubs$.complete();
  }
}
