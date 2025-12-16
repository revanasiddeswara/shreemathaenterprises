import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Loader2, Send } from "lucide-react";

const enquiryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type EnquiryFormData = z.infer<typeof enquiryFormSchema>;

interface EnquiryFormProps {
  defaultService?: string;
  compact?: boolean;
}

const serviceOptions = [
  { value: "domestic-ro", label: "Domestic RO Purifiers" },
  { value: "commercial-ro", label: "Commercial RO Plants" },
  { value: "high-mast-lights", label: "High Mast Lights" },
  { value: "solar-solutions", label: "Solar Solutions" },
  { value: "amc-service", label: "AMC & Maintenance" },
  { value: "other", label: "Other Enquiry" },
];

export function EnquiryForm({ defaultService = "", compact = false }: EnquiryFormProps) {
  const { toast } = useToast();

  const form = useForm<EnquiryFormData>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: defaultService,
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: EnquiryFormData) => {
      const response = await apiRequest("POST", "/api/enquiries", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Submitted!",
        description: "Thank you for your interest. We'll contact you shortly.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/enquiries"] });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: EnquiryFormData) => {
    mutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} data-testid="input-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" {...field} data-testid="input-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} data-testid="input-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Interest *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  className="min-h-[100px] resize-none"
                  {...field}
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={mutation.isPending}
          data-testid="button-submit"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Enquiry
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
