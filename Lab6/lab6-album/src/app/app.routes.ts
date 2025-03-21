import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumPhotosComponent} from './album-photos/album-photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent} from './album-detail/album-detail.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },

];
