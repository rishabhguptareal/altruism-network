
export type ProofType = 'Images' | 'Text' | 'Documents' | 'Video' | 'Multiple';

export type DonationCategory = 
  | 'Education' 
  | 'Healthcare' 
  | 'Environment' 
  | 'Technology' 
  | 'Community' 
  | 'Arts' 
  | 'Emergency Relief'
  | 'Infrastructure'
  | 'Research';

export type Geography = {
  country: string;
  city?: string;
  global: boolean;
};

export type DonationOpportunity = {
  id: string;
  title: string;
  summary: string;
  category: DonationCategory;
  location: Geography;
  proofType: ProofType;
  description: string;
  proofUrls: string[];
  recipientAddress: string;
  goalAmount: number;
  raisedAmount: number;
  createdAt: string;
  recipientId: string;
  featured: boolean;
  impact: string; // How $1K could help
};

export type Recipient = {
  id: string;
  name: string;
  walletAddress: string;
  kycVerified: boolean;
  biography: string;
  opportunities: string[]; // IDs of created opportunities
  proofOfWork: string;
  createdAt: string;
};

export type Donor = {
  id: string;
  preferredCategories?: DonationCategory[];
  preferredGeographies?: Geography[];
  donationHistory: DonationHistory[];
  showActiveOnly: boolean;
  createdAt: string;
};

export type DonationHistory = {
  opportunityId: string;
  amount: number;
  currency: string;
  timestamp: string;
  transactionHash: string;
};

export type CryptoCurrency = 'ETH' | 'BTC' | 'USDC' | 'DAI';
