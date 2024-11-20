import { Routes } from '@angular/router';
import { CatGalleryComponent } from './components/cat-gallery/cat-gallery.component';
import { CatHomepageComponent } from './components/cat-homepage/cat-homepage.component';
import { CatSearchComponent } from './components/cat-search/cat-search.component';

export const routes: Routes = [
    {path:'', component: CatHomepageComponent},
    {path:'home', component: CatHomepageComponent},
    {path:'cat-search', component: CatSearchComponent},
    {path:'cat-gallery', component: CatGalleryComponent}
];
