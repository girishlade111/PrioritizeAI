'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useFeatures } from '@/context/FeatureContext';
import type { Feature } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface FeatureFormProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  feature?: Feature;
}

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  description: z.string().min(10, 'Description is required.'),
  deadline: z.string().min(1, 'Deadline is required'),
  ownerName: z.string().min(1, "Owner's name is required."),
  impact: z.number().min(1).max(10),
  reach: z.number().min(1).max(10),
  effort: z.number().min(1).max(10),
  alignment: z.object({
    salesEnablement: z.number().min(1).max(10),
    customerRetention: z.number().min(1).max(10),
    brandRecognition: z.number().min(1).max(10),
  }),
});

type FeatureFormData = z.infer<typeof formSchema>;

export function FeatureForm({
  isOpen,
  onOpenChange,
  feature,
}: FeatureFormProps) {
  const { addFeature, updateFeature } = useFeatures();
  const { toast } = useToast();

  const form = useForm<FeatureFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: feature?.title || '',
      description: feature?.description || '',
      deadline: feature?.deadline ? new Date(feature.deadline).toISOString().split('T')[0] : '',
      ownerName: feature?.owner.name || '',
      impact: feature?.impact || 5,
      reach: feature?.reach || 5,
      effort: feature?.effort || 5,
      alignment: {
        salesEnablement: feature?.alignment.salesEnablement || 5,
        customerRetention: feature?.alignment.customerRetention || 5,
        brandRecognition: feature?.alignment.brandRecognition || 5,
      },
    },
  });

  const onSubmit = (data: FeatureFormData) => {
    const featureData = {
        title: data.title,
        description: data.description,
        deadline: new Date(data.deadline).toISOString(),
        owner: { name: data.ownerName },
        impact: data.impact,
        reach: data.reach,
        effort: data.effort,
        alignment: data.alignment,
    };

    if (feature) {
      updateFeature({ ...feature, ...featureData });
      toast({ title: 'Feature Updated', description: `"${data.title}" has been updated.` });
    } else {
      addFeature(featureData);
      toast({ title: 'Feature Added', description: `"${data.title}" has been added to the backlog.` });
    }
    onOpenChange(false);
    form.reset();
  };

  const ScoreSlider = ({ name, label }: { name: any; label: string }) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between">
            <FormLabel>{label}</FormLabel>
            <span className="text-sm font-medium">{field.value}</span>
          </div>
          <FormControl>
            <Slider
              min={1}
              max={10}
              step={1}
              value={[field.value]}
              onValueChange={(value) => field.onChange(value[0])}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{feature ? 'Edit Feature' : 'New Feature'}</DialogTitle>
          <DialogDescription>
            {feature
              ? 'Update the details of this feature.'
              : 'Add a new feature to your backlog for prioritization.'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Implement SSO" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the feature and its value..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
               <FormField
                  control={form.control}
                  name="ownerName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Owner</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Jane Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
            
            <h4 className="text-md font-semibold pt-4">Scoring</h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                    <h5 className="font-medium">Impact</h5>
                    <ScoreSlider name="impact" label="Impact" />
                    <ScoreSlider name="reach" label="Reach" />
                </div>
                <div className="space-y-4">
                    <h5 className="font-medium">Effort</h5>
                    <ScoreSlider name="effort" label="Effort" />
                </div>
                <div className="space-y-4">
                    <h5 className="font-medium">Alignment</h5>
                    <ScoreSlider name="alignment.salesEnablement" label="Sales Enablement" />
                    <ScoreSlider name="alignment.customerRetention" label="Customer Retention" />
                    <ScoreSlider name="alignment.brandRecognition" label="Brand Recognition" />
                </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
              <Button type="submit">
                {feature ? 'Save Changes' : 'Add Feature'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
