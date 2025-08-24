export type FeatureStatus = 'Backlog' | 'In Progress' | 'Completed';

export interface Feature {
  id: string;
  title: string;
  description: string;
  status: FeatureStatus;
  impact: number; // 1-10
  reach: number; // 1-10
  effort: number; // 1-10
  alignment: {
    salesEnablement: number; // 1-10
    customerRetention: number; // 1-10
    brandRecognition: number; // 1-10
  };
  owner: {
    name: string;
    avatarUrl?: string;
  };
  deadline: string; // ISO string for date
}
