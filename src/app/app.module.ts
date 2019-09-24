import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlogService } from './services/blog.service';
import { AuthorService } from './services/author.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, DropdownModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ BlogService, AuthorService ]
})
export class AppModule { }
