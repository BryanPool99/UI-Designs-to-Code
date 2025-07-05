import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../../../shared/components/ui/custom-button/custom-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  title: string = 'Want anything to be easy with LaslesVPN.';
  subtitle: string = 'Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.';
  buttonStyles = {
    backgroundColor: '#F53838',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 'bold',
    boxShadow: '-1px 8px 7px 1px rgba(245, 56, 56, 0.34)'
  };
}
