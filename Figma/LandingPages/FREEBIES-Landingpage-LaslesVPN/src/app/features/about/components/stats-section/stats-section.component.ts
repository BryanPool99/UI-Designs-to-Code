import { Component } from '@angular/core';
import { IconDescriptionComponent } from "./components/icon-description/icon-description.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [IconDescriptionComponent,CommonModule],
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss'
})
export class StatsSectionComponent {
  dataStatsSection = [
    {
      src: 'assets/icons/user.svg',
      alt: 'Usuarios',
      value: '90+',
      description: 'Users',
      showDivider: true
    },
    {
      src: 'assets/icons/location.svg',
      alt: 'Ubicaciones',
      value: '30+',
      description: 'Locations',
      showDivider: true
    },
    {
      src: 'assets/icons/Server.svg',
      alt: 'Servidores',
      value: '50+',
      description: 'Servers',
      showDivider: false
    },
  ];
}
