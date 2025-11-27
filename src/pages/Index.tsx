import { useState } from "react";
import { DiagramBox } from "@/components/DiagramBox";
import { DiagramContainer } from "@/components/DiagramContainer";
import { ContentModal } from "@/components/ContentModal";

// Variáveis para conteúdo de texto - edite estas variáveis para adicionar conteúdo
const CONTENT_MAP: Record<string, string> = {
  "Multi-Step Checkout": "VTEX Multi-step checkout guides the shopper through cart setting, delivery input information, and payment selection. It provides a smooth experience, better adapted for small buyers that expected a B2C-like experience.\nThis checkout natively consumes B2B capabilities such as Contracts and Organizational Units, ensuring that every step is aligned with the buyer's commercial terms and compliance requirements.",
  "Discovery Experience": "",
  "Intelligent Search": "",
  "Self-service sign-up": "",
  "CMS": "",
  "Punchout": "",
  "AI Powered Quick-Order": "",
  "Buying Policies": "",
  "Approval Workflows": "",
  "Budgeting Control": "",
  "Accounting Fields": "",
  "AI Quoting Experience": "",
  "Quote Approval Workflow": "",
  "Sales Performance Tracking": "",
  "Buyer Overview": "",
  "Sales Team Management": "",
  "Personalized Contracted Terms": "",
  "Hierarchical Organization Structure": "",
  "AI Bulk Management": "",
  "Address Book": "",
  "Shared Payment Methods": "",
  "Roles & Permissions": "",
  "Authentication & SSO": "",
  "Catalog": "",
  "Pricing": "",
  "Promotions": "",
  "Distributed Order Management": "",
  "Payment Gateway": "",
  "VTEX IO": "",
  "APIs": "",
  "DaaS": "",
  "WebOps": "",
  "Data Pipeline": "",
  "VTEX Shield": "",
  "Analytics & Reporting": "",
  "ERP": "",
  "OMS/WMS": "",
  "PIM": "",
  "CRM": "",
  "Payments": "",
  "EDI": "",
  "Tax Providers": "",
};

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState<{ title: string; content: string }>({
    title: "",
    content: "",
  });

  const handleBoxClick = (title: string) => {
    setSelectedBox({
      title,
      content: CONTENT_MAP[title] || "",
    });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background p-8" style={{ width: "1600px", margin: "0 auto" }}>
      <div className="flex gap-6">
        {/* Main Platform Section */}
        <div className="flex-1 border-4 border-pink-light rounded-3xl p-6 space-y-6">
          {/* Top Row - Self-Service, Procurement, Assisted */}
          <div className="grid grid-cols-3 gap-4">
            <DiagramContainer title="Self-Service Buying" variant="pink">
              <DiagramBox 
                label="Multi-Step Checkout" 
                onClick={() => handleBoxClick("Multi-Step Checkout")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Discovery Experience" 
                onClick={() => handleBoxClick("Discovery Experience")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Intelligent Search" 
                onClick={() => handleBoxClick("Intelligent Search")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Self-service sign-up" 
                onClick={() => handleBoxClick("Self-service sign-up")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="CMS" 
                onClick={() => handleBoxClick("CMS")}
                className="bg-primary text-primary-foreground border-primary"
              />
            </DiagramContainer>

            <DiagramContainer title="Procurement Tools" variant="pink">
              <DiagramBox 
                label="Punchout" 
                onClick={() => handleBoxClick("Punchout")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="AI Powered Quick-Order" 
                onClick={() => handleBoxClick("AI Powered Quick-Order")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Buying Policies" 
                onClick={() => handleBoxClick("Buying Policies")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Approval Workflows" 
                onClick={() => handleBoxClick("Approval Workflows")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Budgeting Control" 
                onClick={() => handleBoxClick("Budgeting Control")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Accounting Fields" 
                onClick={() => handleBoxClick("Accounting Fields")}
                className="bg-primary text-primary-foreground border-primary"
              />
            </DiagramContainer>

            <DiagramContainer title="Assisted Buying" variant="pink">
              <DiagramBox 
                label="AI Quoting Experience" 
                onClick={() => handleBoxClick("AI Quoting Experience")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Quote Approval Workflow" 
                onClick={() => handleBoxClick("Quote Approval Workflow")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Sales Performance Tracking" 
                onClick={() => handleBoxClick("Sales Performance Tracking")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Buyer Overview" 
                onClick={() => handleBoxClick("Buyer Overview")}
                className="bg-primary text-primary-foreground border-primary"
              />
              <DiagramBox 
                label="Sales Team Management" 
                onClick={() => handleBoxClick("Sales Team Management")}
                className="bg-primary text-primary-foreground border-primary"
              />
            </DiagramContainer>
          </div>

          {/* B2B Commerce */}
          <DiagramContainer title="B2B Commerce" variant="navy">
            <DiagramBox 
              label="Personalized Contracted Terms" 
              onClick={() => handleBoxClick("Personalized Contracted Terms")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="Hierarchical Organization Structure" 
              onClick={() => handleBoxClick("Hierarchical Organization Structure")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="AI Bulk Management" 
              onClick={() => handleBoxClick("AI Bulk Management")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="Address Book" 
              onClick={() => handleBoxClick("Address Book")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="Shared Payment Methods" 
              onClick={() => handleBoxClick("Shared Payment Methods")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="Roles & Permissions" 
              onClick={() => handleBoxClick("Roles & Permissions")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="Authentication & SSO" 
              onClick={() => handleBoxClick("Authentication & SSO")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
          </DiagramContainer>

          {/* Commerce Foundation */}
          <DiagramContainer title="Commerce Foundation" variant="navy">
            <DiagramBox 
              label="Catalog" 
              onClick={() => handleBoxClick("Catalog")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="Pricing" 
              onClick={() => handleBoxClick("Pricing")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="Promotions" 
              onClick={() => handleBoxClick("Promotions")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="Distributed Order Management" 
              onClick={() => handleBoxClick("Distributed Order Management")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
            <DiagramBox 
              label="Payment Gateway" 
              onClick={() => handleBoxClick("Payment Gateway")}
              className="bg-secondary text-secondary-foreground border-secondary"
            />
          </DiagramContainer>

          {/* Developer Platform */}
          <DiagramContainer title="Developer Platform" variant="slate">
            <DiagramBox 
              label="VTEX IO" 
              onClick={() => handleBoxClick("VTEX IO")}
              className="bg-accent text-accent-foreground border-accent"
            />
            <DiagramBox 
              label="APIs" 
              onClick={() => handleBoxClick("APIs")}
              className="bg-accent text-accent-foreground border-accent"
            />
            <DiagramBox 
              label="DaaS" 
              onClick={() => handleBoxClick("DaaS")}
              className="bg-accent text-accent-foreground border-accent"
            />
            <DiagramBox 
              label="WebOps" 
              onClick={() => handleBoxClick("WebOps")}
              className="bg-accent text-accent-foreground border-accent"
            />
          </DiagramContainer>
        </div>

        {/* External Integrations */}
        <div className="w-80 space-y-4">
          <h2 className="text-xl font-bold text-primary text-center mb-4">
            External Integrations
          </h2>
          <DiagramBox 
            label="Analytics & Reporting" 
            onClick={() => handleBoxClick("Analytics & Reporting")}
            className="bg-muted text-muted-foreground border-muted"
          />
          <DiagramBox 
            label="ERP" 
            onClick={() => handleBoxClick("ERP")}
            className="bg-muted text-muted-foreground border-muted"
          />
          <DiagramBox 
            label="OMS/WMS" 
            onClick={() => handleBoxClick("OMS/WMS")}
            className="bg-muted text-muted-foreground border-muted"
          />
          <DiagramBox 
            label="PIM" 
            onClick={() => handleBoxClick("PIM")}
            className="bg-muted text-muted-foreground border-muted"
          />
          <DiagramBox 
            label="CRM" 
            onClick={() => handleBoxClick("CRM")}
            className="bg-muted text-muted-foreground border-muted"
          />
          <DiagramBox 
            label="Payments" 
            onClick={() => handleBoxClick("Payments")}
            className="bg-muted text-muted-foreground border-muted"
          />
          <DiagramBox 
            label="EDI" 
            onClick={() => handleBoxClick("EDI")}
            className="bg-muted text-muted-foreground border-muted"
          />
          <DiagramBox 
            label="Tax Providers" 
            onClick={() => handleBoxClick("Tax Providers")}
            className="bg-muted text-muted-foreground border-muted"
          />
        </div>
      </div>

      {/* VTEX Add-Ons */}
      <div className="mt-8 flex justify-center gap-4">
        <h2 className="text-xl font-bold text-primary self-center">
          VTEX Add-Ons
        </h2>
        <DiagramBox 
          label="Data Pipeline" 
          onClick={() => handleBoxClick("Data Pipeline")}
          className="bg-muted text-muted-foreground border-muted"
        />
        <DiagramBox 
          label="VTEX Shield" 
          onClick={() => handleBoxClick("VTEX Shield")}
          className="bg-muted text-muted-foreground border-muted"
        />
      </div>

      <ContentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedBox.title}
        content={selectedBox.content}
      />
    </div>
  );
};

export default Index;
