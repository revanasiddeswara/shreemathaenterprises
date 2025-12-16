import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import DomesticRO from "@/pages/DomesticRO";
import CommercialRO from "@/pages/CommercialRO";
import HighMastLights from "@/pages/HighMastLights";
import SolarSolutions from "@/pages/SolarSolutions";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/domestic-ro" component={DomesticRO} />
      <Route path="/commercial-ro" component={CommercialRO} />
      <Route path="/high-mast-lights" component={HighMastLights} />
      <Route path="/solar-solutions" component={SolarSolutions} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
