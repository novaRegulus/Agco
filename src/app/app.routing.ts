import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { NewsComponent } from './news/news.component';
import {NotFoundComponent } from "./not-found/not-found.component";

 
const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'home', component: HomeComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'news', component: NewsComponent},
  {path: '404', component: NotFoundComponent },
  {path: '**', redirectTo: '404' }
]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
