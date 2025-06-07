import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  @Input() socialMedia: { icon: string, url: string } = { icon: '', url: '' };
}
