import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutes } from './map.routing';

@NgModule({
  imports: [
    MapRoutes,
    CommonModule
  ],
  declarations: [MapComponent]
})
export class MapModule { }
