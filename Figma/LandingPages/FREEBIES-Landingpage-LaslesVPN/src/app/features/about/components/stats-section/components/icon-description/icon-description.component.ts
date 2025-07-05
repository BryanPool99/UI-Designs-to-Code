import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-description.component.html',
  styleUrl: './icon-description.component.scss'
})
export class IconDescriptionComponent {
  @Input() iconSrc: string = '';
  @Input() iconAlt: string = '';
  @Input() value: string = '';
  @Input() description: string = '';
  @Input() showDivider: boolean = true;
}
