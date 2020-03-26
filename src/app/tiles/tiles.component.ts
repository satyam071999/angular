import { Component, OnInit } from '@angular/core';
import  { ITile } from '../interfaces/itile';
import { TileService } from '../services/tile.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent  {

  imagePath: string = "/assets/images/";
  filteredTiles:Array<ITile>;
 
  filterOptions: Array<string> = ["name", "model", "price"];
 selectedFilter:string = '';
 filterText: string = "";
 tiles:Array<ITile>;
 
  
  constructor(private tileService:TileService) {
    this.tiles=this.tileService.getTiles()
    this.filteredTiles =this.tiles ;
  }
  filter() {
    console.log(this.selectedFilter);
    console.log(this.filterText);
    this.filteredTiles = this.tileService.performFilter(this.filterText,this.selectedFilter,this.tiles);
    console.log(this.filteredTiles);
  }
 
 

  

}
