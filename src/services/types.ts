export interface Platform {
  name: string;
  status: 'connected' | 'pending';
  id: string;
}

export interface UserProfile {
  name: string;
  email: string;
  subscription: 'paid' | 'unpaid';
  platforms: Platform[];
}