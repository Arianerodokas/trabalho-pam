import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ariane',
  templateUrl: './ariane.page.html',
  styleUrls: ['./ariane.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ArianePage implements OnInit {

  constructor() { }

  ngOnInit() {}

}
