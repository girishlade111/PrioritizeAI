import { PrioritizationMatrix } from '@/components/prioritization-matrix';
import { MOCK_FEATURES } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MatrixPage() {
  const features = MOCK_FEATURES;

  // Calculate scores for the matrix
  const matrixData = features.map(f => {
    const alignmentScore = (f.alignment.salesEnablement + f.alignment.customerRetention + f.alignment.brandRecognition) / 3;
    const impactScore = (f.impact + f.reach + alignmentScore) / 3;
    return {
      name: f.title,
      effort: f.effort,
      impact: parseFloat(impactScore.toFixed(1)),
    };
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Prioritization Matrix</h1>
        <p className="text-muted-foreground">
          Compare features based on their calculated impact and effort scores.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Impact vs. Effort</CardTitle>
            <CardDescription>A 2-axis scatterplot for strategic feature planning.</CardDescription>
        </CardHeader>
        <CardContent>
            <PrioritizationMatrix data={matrixData} />
        </CardContent>
      </Card>
    </div>
  );
}
