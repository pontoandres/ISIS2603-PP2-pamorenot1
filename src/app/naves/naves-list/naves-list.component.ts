import { Component, OnInit } from '@angular/core';
import { Nave } from '../nave';
import { NavesService } from '../naves.service';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.css']
})
export class NavesListComponent implements OnInit {

  naves: Array<Nave> = [];
  constructor(private navesService: NavesService) { }

  getNaves(): void {
    this.navesService.getNaves().subscribe((naves) => {
      this.naves = naves;
    });
  }

  ngOnInit(): void {
    this.getNaves()
  }

}
