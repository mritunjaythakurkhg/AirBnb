import { Component, Input } from '@angular/core';
import {
  list,
  slideshow,
} from 'src/app/shared/interfaces/listing-details.interface';
import { ListingDetailsService } from 'src/app/shared/services/listing-details.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss'],
})
export class DetailpageComponent {
  listingDetails: list[] = [];
  isHovered: boolean = false;
  public description: string | undefined;
  item: number = 0;
  searchList:string[] = [];
  @Input() set filteredData(value:string[]) {
    if(value.length){
      this.searchList = [...value];
    }else{
      this.searchList = [];
    }
  }


  constructor(private _list: ListingDetailsService) {
    this.getList();
  }
  getList() {
    this._list.getListService().subscribe((data: list[]) => {
      this.listingDetails = data.map((item) => {
        return { ...item, slideshow: [...item.slideshow], counter: 0 };
      });
    });
  }
  increaseQuantity(listObj: list) {
    
    if (listObj.counter < listObj.slideshow.length - 1) {
      listObj.counter++;
    }
       
  }
  decreaseQuantity(listObj: list) {
    if (listObj.counter > 0) 
    listObj.counter--;
  }
}
