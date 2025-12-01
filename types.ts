import { ReactNode } from 'react';

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
  buttonText: string;
}

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}