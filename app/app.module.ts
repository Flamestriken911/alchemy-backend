import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { EffectComponent } from './effect.component';
import { IngredientComponent } from './ingredient.component';
import { MixtureComponent } from './mixture.component';
import { IngredientService } from './ingredient.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    EffectComponent,
    IngredientComponent,
    MixtureComponent,
  ],
  providers: [
    IngredientService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
