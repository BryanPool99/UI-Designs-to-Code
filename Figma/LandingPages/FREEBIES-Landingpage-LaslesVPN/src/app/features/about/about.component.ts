import { Component } from '@angular/core';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { StatsSectionComponent } from "./components/stats-section/stats-section.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroSectionComponent, StatsSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
