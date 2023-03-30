import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ana',
  templateUrl: './ana.page.html',
  styleUrls: ['./ana.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AnaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
