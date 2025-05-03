import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'laslesVpn',
        loadComponent: () =>
            import('./shared/components/layout/layout.component').then(
                (m) => m.LayoutComponent
            ),
        children: [
            // Carga perezosa de módulos
            {
                path: 'home',
                loadComponent: () =>
                    import('./features/home/home.component').then(
                        (m) => m.HomeComponent
                    ),
            },
            {
                path: 'about',
                loadComponent: () =>
                    import('./features/about/about.component').then(
                        (m) => m.AboutComponent
                    ),
            },
            {
                path: 'features',
                loadComponent: () =>
                    import('./features/features/features.component').then(
                        (m) => m.FeaturesComponent
                    ),
            },
            {
                path: 'pricing',
                loadComponent: () =>
                    import('./features/pricing/pricing.component').then(
                        (m) => m.PricingComponent
                    ),
            },
            {
                path: 'testimonials',
                loadComponent: () =>
                    import('./features/testimonials/testimonials.component').then(
                        (m) => m.TestimonialsComponent
                    ),
            },
            {
                path: 'help',
                loadComponent: () =>
                    import('./features/help-section/help-section.component').then(
                        (m) => m.HelpSectionComponent
                    ),
            },
            // Redirección por defecto
            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ],
    },
     // Redirección por defecto
     { path: '', redirectTo: 'laslesVpn', pathMatch: 'full' },
];
