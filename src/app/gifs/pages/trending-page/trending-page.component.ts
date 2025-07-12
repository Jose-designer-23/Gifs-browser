import { Component, signal, inject, ElementRef, viewChild, AfterViewInit } from '@angular/core';
import { GifService } from '../../services/gifs.services';
import { ScrollStateService } from 'src/app/shared/services/scroll-state-service';




@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit {
    GifService = inject(GifService);
    ScrollStateService = inject(ScrollStateService);

    scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

    ngAfterViewInit(): void {
      const scrollDiv = this.scrollDivRef()?.nativeElement;
      if (!scrollDiv) return;

      scrollDiv.scrollTop = this.ScrollStateService.trendingScrollState();
    }

    onScroll(event: Event) {
      const scrollDiv = this.scrollDivRef()?.nativeElement;
      if (!scrollDiv) return;

      const scrollTop = scrollDiv.scrollTop;
      const clientHeight = scrollDiv.clientHeight;
      const scrollHeight = scrollDiv.scrollHeight;

      // console.log({ scrollTotal: scrollTop + clientHeight, scrollHeight });
      const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
      this.ScrollStateService.trendingScrollState.set(scrollTop);

      if (isAtBottom) {
        this.GifService.loadTrendingGifs();
      }
    }

  }
