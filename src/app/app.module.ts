import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { AuthorSectionComponent } from './components/author-section/author-section.component';

@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatSelectModule],
	declarations: [AppComponent, AuthorSectionComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule
{
}
