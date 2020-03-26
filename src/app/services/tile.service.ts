import { Injectable } from '@angular/core';
import { ITile } from '../interfaces/itile';

@Injectable({
  providedIn: 'root'
})
export class TileService {


  tiles:Array<ITile> =[
    {
     image:"tile1.jpg",
      name:"kajaria",
      model:"nit-01",
      price :200,
      rating:4,
      status:1
    },
    {
      image:"tile2.jpg",
      name:"johnson",
      model:"nit-02",
      price :100,
      rating:4,
      status:0
    },
    {
      image:"tile3.jpg",
      name:"hsil",
      model:"nit-03",
      price :300,
      rating:4,
      status:0
    },
    {
      image:"tile4.jpg",
      name:"clayhaus",
      model:"nit-04",
      price :500,          
      rating:4,
      status:1
    }
   
  ] 
 
  constructor() { }
  getTiles():Array<ITile>{
    return this.tiles;
  }
  performFilter(filterText:string,selectedFilter:string,tileArray:ITile[]){
    let fTiles:Array<ITile> = tileArray.filter((tile:ITile)=>{
    //  console.log(selectedFilter==="name")
     if(selectedFilter==="name"){
       console.log(tile.name)
        if(tile.name.startsWith(filterText)){
          return true;
        }
        return false;
      }
      else if(selectedFilter==="model"){
        if(tile.model.includes(filterText)){
          return true;
        }
        return false;
      }
    });
    return fTiles;
  }
  
}
