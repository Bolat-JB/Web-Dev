import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../servises/album.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[]=[];

  newAlbumTitle: string = '';

  public photos: any[] = [];
  constructor(private albumService: AlbumService) { };

  ngOnInit() {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }



  createAlbum() {
    if (this.newAlbumTitle.trim()) {
      const newAlbum = {
        userId: 1,
        title: this.newAlbumTitle,
      };
      this.albumService.createAlbum(newAlbum).subscribe((album) => {
        this.albums.unshift({ ...album, id: this.albums.length + 1 });
        this.newAlbumTitle = '';
      });
    }
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
    });
  }


  addAlbum() {
    if (this.newAlbumTitle.trim()) {
      const newAlbum = {
        id: this.albums.length + 1001,
        title: this.newAlbumTitle
      };
      this.albums.push(newAlbum);
      this.newAlbumTitle = '';
    }
  }

}
