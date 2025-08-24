'use client';

import { useFormState } from 'react-dom';
import { getAISuggestions } from '@/app/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lightbulb, Loader2, Upload } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialState = {
  data: null,
  error: null,
};

function SubmitButton() {
    // This hook is not available yet in stable React
    // const { pending } = useFormStatus();
    // For now we will just show the text
  return (
    <Button type="submit" size="lg" className="w-full">
      <Lightbulb className="mr-2" />
      Generate Suggestions
    </Button>
  );
}

export default function SuggestionsPage() {
  const [state, formAction] = useFormState(getAISuggestions, initialState);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Feature Suggestions</h1>
        <p className="text-muted-foreground">
          Let AI analyze your data to generate potential features for your roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card>
            <form action={formAction}>
                <CardHeader>
                    <CardTitle>Input Data</CardTitle>
                    <CardDescription>
                    Provide customer feedback, market trends, and competitor data.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                    <Label htmlFor="customerFeedback">Customer Feedback</Label>
                    <Textarea
                        id="customerFeedback"
                        name="customerFeedback"
                        placeholder="Paste customer support tickets, survey results, etc."
                        rows={6}
                        required
                    />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="marketTrends">Market Trends</Label>
                    <Textarea
                        id="marketTrends"
                        name="marketTrends"
                        placeholder="Enter notes on recent market shifts, new technologies, etc."
                        rows={6}
                        required
                    />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="competitorData">Competitor Data</Label>
                    <Textarea
                        id="competitorData"
                        name="competitorData"
                        placeholder="Describe what your main competitors are shipping."
                        rows={6}
                        required
                    />
                    </div>
                     <div className="space-y-2 pt-2">
                        <Label htmlFor="file-upload">Or Upload Data File</Label>
                        <div className="flex items-center gap-2">
                            <Input id="file-upload" type="file" className="flex-1" />
                             <Button type="button" variant="outline" size="icon" aria-label="Upload file">
                                <Upload className="h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">Note: File upload is for demonstration and is not functional.</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton />
                </CardFooter>
            </form>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Generated Suggestions</CardTitle>
            <CardDescription>
              Features suggested by the AI based on your input.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            {state.error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}
            {state.data ? (
              <div className="prose prose-sm max-w-none text-foreground dark:prose-invert whitespace-pre-wrap">
                {state.data.suggestedFeatures}
              </div>
            ) : (
                <div className="flex h-full items-center justify-center rounded-lg border border-dashed">
                    <div className="text-center text-muted-foreground">
                        <Lightbulb className="mx-auto h-12 w-12" />
                        <p className="mt-4">Your suggestions will appear here.</p>
                    </div>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
