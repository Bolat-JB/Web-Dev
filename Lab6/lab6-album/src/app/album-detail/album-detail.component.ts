import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { AlbumService} from '../servises/album.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  constructor(private route: ActivatedRoute, private router: Router, private albumService: AlbumService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.albumService.getAlbum(id).subscribe((album) => {
      this.album = album;
      console.log(this.album);
    });
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      this.return();
    });
  }

  return() {
    this.router.navigate(['/albums']);
  }

}
