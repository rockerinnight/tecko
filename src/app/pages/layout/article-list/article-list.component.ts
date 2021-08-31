import { Component, OnInit } from '@angular/core';
import { IArticles } from 'src/app/core/models/articles.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articleList!: IArticles;
  constructor() {}

  ngOnInit(): void {
    this.articleList = {
      articles: [
        {
          slug: 'how-to-train-your-dragon',
          title: 'How to train your dragon',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odio, eius minima harum veritatis labore.',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, maxime ea excepturi possimus fugiat dolor eligendi aspernatur at. Quae placeat quaerat possimus nesciunt repellendus ab quos temporibus in molestias, architecto vitae corrupti distinctio consectetur provident perferendis aliquid voluptate optio atque saepe quo blanditiis assumenda numquam, nostrum praesentium! Nam, illum accusantium.',
          tagList: ['dragons', 'training'],
          createdAt: '2016-02-18T03:22:56.637Z',
          updatedAt: '2016-02-18T03:48:35.824Z',
          favorited: false,
          favoritesCount: 0,
          author: {
            username: 'jakethedog',
            bio: 'I work at statefarm',
            image: 'https://i.stack.imgur.com/xHWG8.jpg',
            following: false,
          },
        },
        {
          slug: 'how-to-train-your-dragon-2',
          title: 'How to train your dragon-2',
          description: 'Lorem ipsum dolor sit amet.',
          body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, aperiam.',
          tagList: ['dragons', 'training'],
          createdAt: '2016-02-18T03:22:56.637Z',
          updatedAt: '2016-02-18T03:48:35.824Z',
          favorited: true,
          favoritesCount: 69,
          author: {
            username: 'jakethedog',
            bio: 'I work at statefarm',
            image: 'https://i.stack.imgur.com/xHWG8.jpg',
            following: true,
          },
        },
      ],
      articlesCount: 2,
    };
  }
}
