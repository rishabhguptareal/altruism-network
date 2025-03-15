
import { DonationOpportunity, Recipient, Donor } from './types';

export const mockOpportunities: DonationOpportunity[] = [
  {
    id: '1',
    title: 'Clean Water Initiative in Rural Tanzania',
    summary: 'Providing clean drinking water to 10 villages in rural Tanzania through solar-powered filtration systems.',
    category: 'Community',
    location: {
      country: 'Tanzania',
      city: 'Arusha',
      global: false,
    },
    proofType: 'Images',
    description: `Our organization has been working with communities in rural Tanzania for the past 3 years, 
    addressing the critical need for clean drinking water. The current project targets 10 villages where water 
    contamination has led to numerous health issues. We've partnered with local leaders and engineers to 
    implement solar-powered water filtration systems that are sustainable, low-maintenance, and effective. 
    These systems can provide clean water to approximately 5,000 people and last for at least 10 years 
    with proper maintenance. We've already successfully deployed similar systems in 5 other villages, 
    leading to a 60% reduction in waterborne illnesses.`,
    proofUrls: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    recipientAddress: '0x1234567890abcdef1234567890abcdef12345678',
    goalAmount: 50000,
    raisedAmount: 12500,
    createdAt: '2023-09-15T10:30:00Z',
    recipientId: 'r1',
    featured: true,
    impact: 'With $1,000, we can provide one complete water filtration system that serves approximately 500 people. This includes installation, training for local maintenance, and a one-year supply of replacement filters.'
  },
  {
    id: '2',
    title: 'Coding Bootcamp for Underserved Youth',
    summary: 'Providing tech education and coding skills to 100 students from low-income communities in Mexico City.',
    category: 'Education',
    location: {
      country: 'Mexico',
      city: 'Mexico City',
      global: false,
    },
    proofType: 'Multiple',
    description: `This 12-week intensive coding bootcamp aims to bridge the digital divide by providing 
    comprehensive software development training to 100 young adults (ages 18-25) from underserved communities. 
    The curriculum covers web development fundamentals, JavaScript frameworks, and backend technologies, 
    along with essential soft skills like problem-solving and teamwork. Upon graduation, participants will 
    have created a portfolio of projects and will receive job placement assistance. Our previous bootcamps 
    have achieved a 70% employment rate within 6 months of completion, with an average 300% increase in income 
    for graduates.`,
    proofUrls: ['/placeholder.svg', '/placeholder.svg'],
    recipientAddress: '0x2345678901abcdef2345678901abcdef23456789',
    goalAmount: 75000,
    raisedAmount: 45000,
    createdAt: '2023-08-05T14:20:00Z',
    recipientId: 'r2',
    featured: true,
    impact: 'With $1,000, we can provide full scholarships for two students, covering tuition, learning materials, internet access, and mentorship for the entire bootcamp duration.'
  },
  {
    id: '3',
    title: 'Reforestation Project in the Amazon',
    summary: 'Planting 50,000 native trees to restore 100 acres of deforested land in the Brazilian Amazon.',
    category: 'Environment',
    location: {
      country: 'Brazil',
      city: 'Manaus',
      global: true,
    },
    proofType: 'Images',
    description: `This reforestation initiative focuses on restoring biodiversity in one of the most 
    critical ecosystems on our planet. Working with indigenous communities and environmental scientists, 
    we identify optimal areas for reforestation and select native species that will thrive and support 
    local wildlife. Our approach includes monitoring and maintenance for 3 years after planting to ensure 
    the forest's successful establishment. The project employs members of local communities, providing 
    sustainable livelihoods while fostering environmental stewardship. Each acre reforested captures 
    approximately 300 tons of CO2 over 30 years.`,
    proofUrls: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    recipientAddress: '0x3456789012abcdef3456789012abcdef34567890',
    goalAmount: 100000,
    raisedAmount: 28000,
    createdAt: '2023-10-20T09:15:00Z',
    recipientId: 'r3',
    featured: false,
    impact: 'With $1,000, we can plant and maintain approximately 500 trees, restoring 1 acre of rainforest. This includes seedling cultivation, planting, 3 years of maintenance, and community training.'
  },
  {
    id: '4',
    title: 'Mobile Health Clinic for Remote Communities',
    summary: 'Establishing a mobile health clinic to provide basic healthcare to 15 remote villages in northern India.',
    category: 'Healthcare',
    location: {
      country: 'India',
      city: 'Himachal Pradesh',
      global: false,
    },
    proofType: 'Documents',
    description: `Our mobile health clinic initiative addresses the critical healthcare gap in remote 
    mountainous villages where the nearest medical facility is often more than 50 miles away. The mobile 
    clinic will be equipped with diagnostic equipment, essential medications, and staffed by a doctor, 
    nurse, and community health worker. It will provide preventive care, maternal and child health services, 
    management of common illnesses, and health education. The clinic will visit each village bi-weekly on 
    a rotating schedule, serving approximately 12,000 people across all villages. We've already secured 
    partnerships with local medical associations and pharmaceutical suppliers to ensure sustainability.`,
    proofUrls: ['/placeholder.svg'],
    recipientAddress: '0x4567890123abcdef4567890123abcdef45678901',
    goalAmount: 85000,
    raisedAmount: 37500,
    createdAt: '2023-07-10T11:45:00Z',
    recipientId: 'r4',
    featured: true,
    impact: 'With $1,000, we can fund the mobile clinic operations for approximately one week, providing care to around 200 patients. This covers fuel, medical supplies, medications, and staff salaries.'
  },
  {
    id: '5',
    title: 'Open Source AI Research for Climate Solutions',
    summary: 'Developing open-source AI models to optimize renewable energy systems and reduce carbon emissions.',
    category: 'Research',
    location: {
      country: 'Global',
      global: true,
    },
    proofType: 'Text',
    description: `This research initiative brings together a global team of AI researchers, climate scientists, 
    and renewable energy engineers to develop open-source artificial intelligence solutions for climate 
    challenges. Our current focus is on creating models that can optimize the integration of renewable 
    energy sources into existing power grids, predict energy demands, and minimize waste. All research, 
    algorithms, and models developed will be freely available to the public, allowing for widespread 
    implementation and adaptation. Our preliminary models have demonstrated the potential to improve energy 
    efficiency by 15-20% in test scenarios.`,
    proofUrls: ['/placeholder.svg'],
    recipientAddress: '0x5678901234abcdef5678901234abcdef56789012',
    goalAmount: 150000,
    raisedAmount: 62000,
    createdAt: '2023-11-05T16:30:00Z',
    recipientId: 'r5',
    featured: false,
    impact: 'With $1,000, we can fund approximately 40 hours of research and development time, including computational resources, data acquisition, and collaborative tools for our distributed team.'
  },
  {
    id: '6',
    title: 'Community Art Center Renovation',
    summary: 'Renovating an abandoned building into a community art center in Detroit, providing creative space for local youth.',
    category: 'Arts',
    location: {
      country: 'United States',
      city: 'Detroit',
      global: false,
    },
    proofType: 'Multiple',
    description: `This project transforms a vacant 10,000 square foot former warehouse into a vibrant 
    community art center in a neighborhood with limited access to arts education. The renovated space will 
    include multi-purpose studios for visual arts, music, dance, and digital media; a small performance 
    venue; gallery space; and classrooms for workshops and classes. The center will offer free and 
    low-cost programming for youth ages 8-18, as well as evening and weekend activities for the broader 
    community. We've secured donated architectural services and volunteer construction support, but need 
    funding for materials, specialized equipment, and to ensure building code compliance.`,
    proofUrls: ['/placeholder.svg', '/placeholder.svg'],
    recipientAddress: '0x6789012345abcdef6789012345abcdef67890123',
    goalAmount: 120000,
    raisedAmount: 75000,
    createdAt: '2023-06-25T13:20:00Z',
    recipientId: 'r6',
    featured: false,
    impact: 'With $1,000, we can complete the renovation of one studio space, including flooring, lighting, electrical work, paint, and basic equipment. Each studio will serve approximately 200 youth per year.'
  }
];

export const mockRecipients: Recipient[] = [
  {
    id: 'r1',
    name: 'Tanzania Water Foundation',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    kycVerified: true,
    biography: 'Non-profit organization focused on providing clean water solutions to rural communities in East Africa since 2015.',
    opportunities: ['1'],
    proofOfWork: 'Completed 15 water projects serving over 25,000 people. Published impact reports and received certification from the Tanzania Water Authority.',
    createdAt: '2022-05-12T08:30:00Z'
  },
  {
    id: 'r2',
    name: 'Code for Future Mexico',
    walletAddress: '0x2345678901abcdef2345678901abcdef23456789',
    kycVerified: true,
    biography: 'Educational initiative that provides coding and digital skills training to underserved communities across Mexico.',
    opportunities: ['2'],
    proofOfWork: 'Trained over 500 students with a 70% job placement rate. Partnerships with 25 tech companies for internships and employment.',
    createdAt: '2021-11-30T14:45:00Z'
  },
  {
    id: 'r3',
    name: 'Amazon Reforestation Collective',
    walletAddress: '0x3456789012abcdef3456789012abcdef34567890',
    kycVerified: true,
    biography: 'Coalition of environmental scientists and indigenous communities working to restore and protect the Amazon rainforest.',
    opportunities: ['3'],
    proofOfWork: 'Successfully reforested 500 acres with 250,000 native trees. Published research on reforestation methods in peer-reviewed journals.',
    createdAt: '2020-08-15T10:15:00Z'
  },
  {
    id: 'r4',
    name: 'Himalayan Health Initiative',
    walletAddress: '0x4567890123abcdef4567890123abcdef45678901',
    kycVerified: true,
    biography: 'Healthcare organization providing medical services to remote mountain communities in northern India.',
    opportunities: ['4'],
    proofOfWork: 'Served over 30,000 patients through existing health programs. Team includes licensed medical professionals with rural healthcare experience.',
    createdAt: '2021-04-20T09:30:00Z'
  },
  {
    id: 'r5',
    name: 'Open Climate AI Consortium',
    walletAddress: '0x5678901234abcdef5678901234abcdef56789012',
    kycVerified: true,
    biography: 'International research collective developing open-source AI solutions for climate change mitigation and adaptation.',
    opportunities: ['5'],
    proofOfWork: 'Published 8 research papers and released 3 open-source AI models. Team includes researchers from top universities and climate institutes.',
    createdAt: '2022-01-10T16:45:00Z'
  },
  {
    id: 'r6',
    name: 'Detroit Arts Revival',
    walletAddress: '0x6789012345abcdef6789012345abcdef67890123',
    kycVerified: true,
    biography: 'Community organization focused on increasing access to arts education and creative spaces in underserved Detroit neighborhoods.',
    opportunities: ['6'],
    proofOfWork: 'Successfully operated two smaller community art programs reaching 500 youth annually. Secured city permits and partial funding for renovation.',
    createdAt: '2021-09-05T11:20:00Z'
  }
];

export const mockDonor: Donor = {
  id: 'd1',
  preferredCategories: ['Environment', 'Education', 'Technology'],
  preferredGeographies: [
    {
      country: 'Global',
      global: true
    },
    {
      country: 'United States',
      global: false
    }
  ],
  donationHistory: [
    {
      opportunityId: '3',
      amount: 500,
      currency: 'ETH',
      timestamp: '2023-11-15T09:30:00Z',
      transactionHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890'
    },
    {
      opportunityId: '5',
      amount: 750,
      currency: 'USDC',
      timestamp: '2023-10-22T14:15:00Z',
      transactionHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
    }
  ],
  showActiveOnly: true,
  createdAt: '2023-06-10T11:45:00Z'
};

export const getOpportunityById = (id: string): DonationOpportunity | undefined => {
  return mockOpportunities.find(opportunity => opportunity.id === id);
};

export const getRecipientById = (id: string): Recipient | undefined => {
  return mockRecipients.find(recipient => recipient.id === id);
};

export const getRecipientByOpportunityId = (opportunityId: string): Recipient | undefined => {
  const opportunity = getOpportunityById(opportunityId);
  if (!opportunity) return undefined;
  return getRecipientById(opportunity.recipientId);
};

export const getFeaturedOpportunities = (): DonationOpportunity[] => {
  return mockOpportunities.filter(opportunity => opportunity.featured);
};

export const getAllOpportunities = (): DonationOpportunity[] => {
  return mockOpportunities;
};

export const getOpportunitiesByCategory = (category: string): DonationOpportunity[] => {
  return mockOpportunities.filter(opportunity => opportunity.category === category);
};

export const getOpportunitiesByCountry = (country: string): DonationOpportunity[] => {
  return mockOpportunities.filter(opportunity => 
    opportunity.location.global || opportunity.location.country === country
  );
};
