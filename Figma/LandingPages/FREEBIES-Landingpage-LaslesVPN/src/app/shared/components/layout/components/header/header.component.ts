import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MENU_ITEMS } from '../../../../../../assets/data/menu-items';
import { CapitalizePipe } from '../../../../pipes/capitalize.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, MenubarModule, CapitalizePipe, 
    ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  menuItems = MENU_ITEMS;
  ngOnInit(): void {
    console.log('init of component header');
  }
}
