import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  // @ViewChild('newBox', { static: true }) newBox!: ElementRef;
  // layout = 'close;';
  navMenu!: any[];

  constructor(private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    this.navMenu = [
      {
        title: 'Home',
        icon: 'fa-home',
        path: '/home',
      },
      {
        title: 'Explore',
        icon: 'fa-hashtag',
        path: '/explore',
      },
      {
        title: 'Favorites',
        icon: 'fa-heart',
        path: '/favorites',
      },
      {
        title: 'More',
        icon: 'fa-ellipsis-h',
        path: '/more',
      },
    ];
  }

  // openArticleNewModal(): void {
  //   this.renderer.removeAttribute(this.newBox.nativeElement, 'class');
  //   this.renderer.addClass(this.newBox.nativeElement, 'd-block');
  //   this.renderer.addClass(this.newBox.nativeElement, 'open');
  //   this.layout = 'modal';
  // }

  // closeArticleNewModal(e: any): void {
  //   if (e === 'close') {
  //     this.renderer.addClass(this.newBox.nativeElement, 'out');
  //     setTimeout(() => {
  //       this.renderer.removeClass(this.newBox.nativeElement, 'd-block');
  //       this.renderer.addClass(this.newBox.nativeElement, 'd-none');
  //     }, 500);
  //     this.layout = e;
  //   }
  // }
}
