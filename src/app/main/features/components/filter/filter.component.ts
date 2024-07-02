import { Component } from '@angular/core';
import { icons } from 'src/app/shared/interfaces/icon.iterface';
import { list } from 'src/app/shared/interfaces/listing-details.interface';
import { FilterviewService } from 'src/app/shared/services/filterview.service';
import { ListingDetailsService } from 'src/app/shared/services/listing-details.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() newItemEvent = new EventEmitter<string[]>();
  constructor(
    private _list: ListingDetailsService,
    private _filter: FilterviewService
  ) {
    this.getIcons();
  }
  icons: icons[] = [];
  filtered: string[] = [];

  getIcons() {
    this._list.geticons().subscribe((data: icons[]) => {
      this.icons = data;
      console.log(data);
    });
  }

  filterViews(icons: icons) {
    icons.enabled = !icons.enabled;
    if (icons.enabled) {
      this.filtered.push(icons.name);
    } else {
      const index = this.filtered.indexOf(icons.name);
      if (index > -1) {
        this.filtered.splice(index, 1);
      }
    }
    this.newItemEvent.emit(this.filtered);
  }
}
