'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting features based on customer feedback, market trends, and competitor data.
 *
 * - suggestFeatures - The main function to trigger the feature suggestion flow.
 * - SuggestFeaturesInput - The input type for the suggestFeatures function.
 * - SuggestFeaturesOutput - The output type for the suggestFeatures function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFeaturesInputSchema = z.object({
  customerFeedback: z
    .string()
    .describe('Customer feedback data, can include multiple feedback entries.'),
  marketTrends: z
    .string()
    .describe('Information about current market trends.'),
  competitorData: z
    .string()
    .describe('Data about what competitors are doing.'),
});
export type SuggestFeaturesInput = z.infer<typeof SuggestFeaturesInputSchema>;

const SuggestFeaturesOutputSchema = z.object({
  suggestedFeatures: z
    .string()
    .describe('A list of suggested features based on the input data.'),
});
export type SuggestFeaturesOutput = z.infer<typeof SuggestFeaturesOutputSchema>;

export async function suggestFeatures(input: SuggestFeaturesInput): Promise<SuggestFeaturesOutput> {
  return suggestFeaturesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFeaturesPrompt',
  input: {schema: SuggestFeaturesInputSchema},
  output: {schema: SuggestFeaturesOutputSchema},
  prompt: `You are a product manager assistant. Analyze the provided customer feedback, market trends, and competitor data to suggest potential features for prioritization.

Customer Feedback:
{{customerFeedback}}

Market Trends:
{{marketTrends}}

Competitor Data:
{{competitorData}}

Based on this information, suggest a list of potential features. Be concise and provide a justification for each feature based on the data provided.
`,
});

const suggestFeaturesFlow = ai.defineFlow(
  {
    name: 'suggestFeaturesFlow',
    inputSchema: SuggestFeaturesInputSchema,
    outputSchema: SuggestFeaturesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
