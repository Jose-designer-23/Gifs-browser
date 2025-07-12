import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifService } from '../../services/gifs.services';
import { GifListComponent } from "../../components/gifs-side-menu/gif-list/gif-list.component";

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})


// ...existing code...
export default class GifHistoryComponent {
gifService = inject(GifService);

query = toSignal(
  inject(ActivatedRoute).params.pipe(map((params) => params['query']))
);

gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));

}
// ...existing code...
