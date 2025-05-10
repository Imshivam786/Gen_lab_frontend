import { Component } from '@angular/core';

@Component({
  selector: 'app-project-info',
  standalone: false,
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss'
})
export class ProjectInfoComponent {

  images = [
    '/assets/hero_image.png',
    '/assets/hero_image.png',
    '/assets/project image.png',
    '/assets/hero_image.png',
    '/assets/hero_image.png'
  ];
  mainImage = this.images[0];

  // In your component TS file
activeTab: 'description' | 'documentation' = 'description';

projectData = {
  description: {
    paragraph: 'A comprehensive SaaS platform leveraging generative AI to create personalized digital companions...',
    components: [
      'Core AI Engine with Personality Matrix',
      'User Interaction Interface',
      'Analytics Dashboard',
      'API Integration Module'
    ],
    services: [
      '24/7 Technical Support',
      'Monthly Reporting & Analytics',
      'Video Conference Support',
      'Project Briefing Classes'
    ],
    includedItems: [
      'Complete Source Code',
      'Technical Documentation',
      'Implementation Guide',
      '1-Year Maintenance Contract'
    ]
  },
  documentation: {
    customizations: [
      'Personality Trait Adjustments',
      'Integration with Third-party APIs',
      'White-label Branding',
      'Multi-language Support'
    ],
    details: [
      { label: 'Framework', value: 'TensorFlow 2.8, React 18' },
      { label: 'Database', value: 'PostgreSQL 14, Redis 6' },
      { label: 'API Standards', value: 'RESTful, GraphQL' },
      { label: 'Compliance', value: 'GDPR, HIPAA' }
    ]
  }
};
  
  setMainImage(image: string) {
    this.mainImage = image;
  }
}
