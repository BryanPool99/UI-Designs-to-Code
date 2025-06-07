import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-links-section',
  standalone: true,
  imports: [],
  templateUrl: './links-section.component.html',
  styleUrl: './links-section.component.scss'
})
export class LinksSectionComponent {
  @Input() title: string = ''; 
  @Input() links: { label: string, url: string }[] = [];
}
