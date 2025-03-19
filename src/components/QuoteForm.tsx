import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(1);
  
  // Add state for form values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    propertyType: "",
    currentHeating: ""
  });
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues(prev => ({ ...prev, [id]: value }));
  };
  
  // Handle select changes
  const handlePropertyTypeChange = (value: string) => {
    setFormValues(prev => ({ ...prev, propertyType: value }));
  };
  
  const handleHeatingTypeChange = (value: string) => {
    setFormValues(prev => ({ ...prev, currentHeating: value }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // Use the form values from state instead of getElementById
      const response = await fetch("https://script.google.com/macros/s/AKfycbzdzjm309WtZHwrcyOsR2q9zVSXmcP-jb76FDDQ60LR3-Va0obn5erEGLSp1NNncIwiew/exec", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: { "Content-Type": "application/json" },
        mode: "no-cors" // This is often needed for Google Apps Script
      });
  
      setFormStep(2);
      toast({
        title: "Request submitted!",
        description: "Local installers will contact you shortly with free quotes.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div id="quote-form" className="glass-card p-6 md:p-8 w-full max-w-md mx-auto">
      {formStep === 1 ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Smith" 
              required 
              value={formValues.name}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com" 
              required 
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="07123456789" 
              required 
              value={formValues.phone}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="postcode">Postcode</Label>
            <Input 
              id="postcode" 
              placeholder="SW1A 1AA" 
              required 
              value={formValues.postcode}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="property-type">Property Type</Label>
            <Select 
              value={formValues.propertyType}
              onValueChange={handlePropertyTypeChange}
              required
            >
              <SelectTrigger id="property-type">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="detached">Detached House</SelectItem>
                <SelectItem value="semi-detached">Semi-detached</SelectItem>
                <SelectItem value="terraced">Terraced</SelectItem>
                <SelectItem value="flat">Flat/Apartment</SelectItem>
                <SelectItem value="bungalow">Bungalow</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="current-heating">Current Heating System</Label>
            <Select 
              value={formValues.currentHeating}
              onValueChange={handleHeatingTypeChange}
              required
            >
              <SelectTrigger id="current-heating">
                <SelectValue placeholder="Select current heating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gas">Gas Boiler</SelectItem>
                <SelectItem value="oil">Oil Boiler</SelectItem>
                <SelectItem value="electric">Electric Heating</SelectItem>
                <SelectItem value="none">No Central Heating</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-heat-600 hover:bg-heat-700 shadow-soft hover:shadow-glow transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Free Quotes From Local Installers"}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            By submitting this form, you agree to our <Link to="/privacy" className="underline hover:text-heat-600">Privacy Policy</Link> and <Link to="/terms" className="underline hover:text-heat-600">Terms of Service</Link>.
          </p>
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="mb-6 flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 animate-fade-in" />
          </div>
          <h3 className="text-2xl font-bold mb-2 animate-fade-in">Thank You!</h3>
          <p className="text-muted-foreground mb-6 animate-fade-in-up">
            Your request has been submitted successfully. Local installers in your area will contact you shortly with competitive quotes.
          </p>
          <Button 
            onClick={() => setFormStep(1)}
            className="border border-input bg-background hover:bg-accent hover:text-accent-foreground animate-fade-in-up"
          >
            Submit Another Request
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuoteForm;
