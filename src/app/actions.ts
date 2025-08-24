'use server';

import { suggestFeatures, SuggestFeaturesInput } from '@/ai/flows/suggest-features';

interface FormState {
    data: { suggestedFeatures: string } | null;
    error: string | null;
}

export async function getAISuggestions(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const input: SuggestFeaturesInput = {
    customerFeedback: formData.get('customerFeedback') as string,
    marketTrends: formData.get('marketTrends') as string,
    competitorData: formData.get('competitorData') as string,
  };

  try {
    const result = await suggestFeatures(input);
    return { data: result, error: null };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to get suggestions: ${errorMessage}` };
  }
}
