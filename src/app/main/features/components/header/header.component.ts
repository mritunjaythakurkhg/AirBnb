import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { list } from 'src/app/shared/interfaces/listing-details.interface';
import { ListingDetailsService } from 'src/app/shared/services/listing-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  checkInDate!: Date;
  checkOutDate!: Date;
  selectedDate!: Date;
  description!: string;
  addedGuest = 0;
  item = 0;
  minDate: Date;
  maxDate: Date | undefined;

  listheaderdetails: list[] = [];

  constructor(private _list: ListingDetailsService) {
    this.getSubscribeDetails();
    const currentDate = new Date();
    this.minDate = new Date(currentDate);
    console.log(this.minDate);
  }
  getSubscribeDetails() {
    this._list.getListService().subscribe((data: list[]) => {
      this.listheaderdetails = data;
    });
  }
  decreaseQuantity() {
    if (this.item > 0) this.item--;
  }
  increaseQuantity() {
    this.item++;
  }

  menuClosed() {
    this.addedGuest = this.item;
  }

  menuOpen() {
    this.item = this.addedGuest;
  }

  changeMinDate() {
    this.minDate = this.checkInDate;
    this.maxDate = this.minDate;
  }
}
