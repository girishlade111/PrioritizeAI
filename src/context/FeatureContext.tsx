'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { Feature, FeatureStatus } from '@/lib/types';
import { MOCK_FEATURES } from '@/lib/mock-data';

interface FeatureContextType {
  features: Feature[];
  addFeature: (feature: Omit<Feature, 'id' | 'status'>) => void;
  updateFeature: (feature: Feature) => void;
  updateFeatureStatus: (featureId: string, newStatus: FeatureStatus) => void;
}

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

export const FeatureProvider = ({ children }: { children: ReactNode }) => {
  const [features, setFeatures] = useState<Feature[]>(MOCK_FEATURES);

  const addFeature = useCallback((featureData: Omit<Feature, 'id' | 'status'>) => {
    const newFeature: Feature = {
      ...featureData,
      id: `feature-${Date.now()}-${Math.random()}`,
      status: 'Backlog',
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
    <FeatureContext.Provider value={{ features, addFeature, updateFeature, updateFeatureStatus }}>
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
