import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-gabi',
  templateUrl: './gabi.page.html',
  styleUrls: ['./gabi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GabiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
