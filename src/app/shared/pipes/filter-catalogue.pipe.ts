import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCatalogue'
})
export class FilterCataloguePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    let searchList:string[] = args[0];
    if(!searchList || !searchList.length){
      return value;
    }else{
       return value.filter(item =>  searchList.some(searchVal => searchVal.toLowerCase() === item.title.toLowerCase()));
    }
  }

}
