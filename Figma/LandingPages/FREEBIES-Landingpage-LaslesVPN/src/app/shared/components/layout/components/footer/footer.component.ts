import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { LinksSectionComponent } from './components/links-section/links-section.component';
import { SocialMediaComponent } from "./components/social-media/social-media.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LinksSectionComponent,
    SocialMediaComponent
],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  productLinks =[
    {label: 'Download', url: '#'},
    {label: 'Pricing', url: '#'},
    {label: 'Locations', url: '#'},
    {label: 'Server', url: '#'},
    {label: 'Countries', url: '#'},
    {label: 'Blog', url: '#'},
  ];

  engageLinks =[
    {label: 'LaslesVPN ? ', url: '#'},
    {label: 'FAQ', url: '#'},
    {label: 'Tutorials', url: '#'},
    {label: 'About Us', url: '#'},
    {label: 'Privacy Policy', url: '#'},
    {label: 'Terms of Service', url: '#'},
  ];

  earnMoneyLinks =[
    {label: 'Affiliate', url: '#'},
    {label: 'Become Partner', url: '#'},
  ];

  socialMedias =[
    {icon: PrimeIcons.FACEBOOK, url: '#'},
    {icon: PrimeIcons.TWITTER, url: '#'},
    {icon: PrimeIcons.INSTAGRAM, url: '#'},
    //{icon: PrimeIcons.YOUTUBE, url: '#'},
  ];
}
