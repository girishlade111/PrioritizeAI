'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { Feature, FeatureStatus } from '@/lib/types';
import { MOCK_FEATURES } from '@/lib/mock-data';

// This context is now primarily used for client-side interactions
// like opening forms and performing updates. The initial data is passed
// as props from Server Components.

interface IFeatureContext {
  features: Feature[];
  setFeatures: React.Dispatch<React.SetStateAction<Feature[]>>;
  addFeature: (feature: Omit<Feature, 'id' | 'status'>) => void;
  updateFeature: (feature: Feature) => void;
  updateFeatureStatus: (featureId: string, newStatus: FeatureStatus) => void;
}

const FeatureContext = createContext<IFeatureContext | undefined>(undefined);

export const FeatureProvider = ({
  initialFeatures,
  children,
}: {
  initialFeatures: Feature[];
  children: ReactNode;
}) => {
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);

  const addFeature = useCallback((featureData: Omit<Feature, 'id' | 'status'>) => {
    const newFeature: Feature = {
      ...featureData,
      id: `feature-${Date.now()}-${Math.random()}`,
      status: 'Backlog',
      // Add a default avatar if not provided
      owner: {
        ...featureData.owner,
        avatarUrl: featureData.owner.avatarUrl || 'https://placehold.co/40x40.png',
      }
    };
    setFeatures(prev => [...prev, newFeature]);
  }, []);

  const updateFeature = useCallback((updatedFeature: Feature) => {
    setFeatures(prev => prev.map(f => (f.id === updatedFeature.id ? updatedFeature : f)));
  }, []);
  
  const updateFeatureStatus = useCallback((featureId: string, newStatus: FeatureStatus) => {
    setFeatures(prev => prev.map(f => (f.id === featureId ? { ...f, status: newStatus } : f)));
  }, []);

  return (
    <FeatureContext.Provider value={{ features, setFeatures, addFeature, updateFeature, updateFeatureStatus }}>
      {children}
    </FeatureContext.Provider>
  );
};

export const useFeatures = () => {
  const context = useContext(FeatureContext);
  if (!context) {
    throw new Error('useFeatures must be used within a FeatureProvider');
  }
  return context;
};
