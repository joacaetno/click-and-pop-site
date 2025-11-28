import { useState } from "react";
import { DiagramBox } from "@/components/DiagramBox";
import { DiagramContainer } from "@/components/DiagramContainer";
import { ContentModal } from "@/components/ContentModal";

// Variáveis para conteúdo de texto - edite estas variáveis para adicionar conteúdo
const CONTENT_MAP: Record<string, string> = {
  "Multi-Step Checkout": `VTEX Multi-step checkout guides the shopper through cart setting, delivery input information, and payment selection. It provides a smooth experience, better adapted for small buyers that expected a B2C-like experience.
This checkout natively consumes B2B capabilities such as Contracts and Organizational Units, ensuring that every step is aligned with the buyer's commercial terms and compliance requirements.`,
  "Discovery Experience": `Discovery Experience delivers a fast, modern storefront built on FastStore, designed to help B2B buyers find the right products with minimal friction. It supports complex catalogs, large assortments, and nuanced purchasing needs, ensuring buyers can quickly navigate categories, compare options, and access relevant product information.
For B2B merchants, this capability increases product exposure, improves conversion across long-tail assortments, and reduces friction in large-volume or repeat purchasing scenarios. A streamlined discovery flow directly impacts order efficiency, average order value, and overall buyer satisfaction.`,
  "Intelligent Search": `Intelligent Search provides high-performance, relevance-driven product search that understands B2B catalog structures and purchasing patterns. It handles variant-rich items, technical descriptions, SKU-level specificity, and availability constraints, returning accurate results even within massive catalogs.
For merchants, Intelligent Search reduces support overhead and accelerates quoting and ordering. For buyers, it cuts discovery time and ensures they always find the correct SKUs, minimizing ordering mistakes and improving operational reliability across procurement workflows.`,
  "Self-service sign-up": `Self-service Sign-up enables prospective buyers to independently request access to a merchant's B2B portal, submit company information, and begin onboarding without manual intervention. It removes friction from account creation, allowing merchants to scale lead intake and qualification while keeping control through automated approval flows.
For B2B merchants, this capability turns their storefront into a continuous acquisition engine, reducing dependency on sales reps for initial onboarding. For buyers, it offers a faster, more transparent entry point to start purchasing, aligning with modern expectations for autonomy and speed.`,
  "CMS": `The new VTEX CMS allows merchants to manage digital content with a modern, component-based editor built for flexibility and speed. It lets teams create landing pages, manage storefront content, and maintain brand consistency without relying on development cycles.
For B2B merchants, it centralizes content governance and accelerates updates for promotions, product launches, or institutional content. For buyers, it ensures a consistent, informative, and professional experience across the entire purchasing journey, supporting trust and clarity in complex B2B transactions.`,
  "Punchout": `VTEX Punchout enables buyers to shop directly on the merchant's B2B e-commerce site while staying connected to their procurement system. The buyer's cart, pricing, and item selections are automatically transferred back into their ERP or procurement tool for final approval and submission. With VTEX native Punchout authorization protocol, this process is done securely, and ensures applicability of contracted products and prices per customer.
For merchants, it expands compatibility with enterprise procurement workflows and makes it easier to win large accounts that require strict system integration. For buyers, it ensures compliance with internal purchasing processes while offering a richer, more accurate shopping experience than static catalogs.`,
  "AI Powered Quick-Order": `AI Powered Quick-Order accelerates repeat and bulk purchasing by allowing buyers to quickly add items using file uploads. Our product interpret ambiguous inputs, suggest the correct SKUs, and reduce errors in high-volume ordering scenarios.
For B2B merchants, this capability increases order throughput and reduces customer service overhead associated with manual entry mistakes. For buyers, it drastically cuts the time required to build large carts, making procurement faster, more intuitive, and less error-prone.`,
  "Buying Policies & Approval Workflows": `Buying Policies & Approval Workflows give organizations full control over how purchases move through their internal governance. Buying Policies define compliance rules—such as spending limits, budget constraints, or category restrictions—that determine when an order must be reviewed. Approval Workflows then route these orders to the appropriate approvers, following the buyer's organizational structure and commercial rules.`,
  "Approval Workflows": `Approval Workflows allow organizations to enforce structured review steps before an order is submitted, based on the Buying Policies in place. Orders can be routed through approvers in different departments or cost centers, following a clear sequential flow.
For merchants, this reduces order cancellations and disputes by aligning with customers' governance processes. For buyers, it ensures every purchase follows internal rules while keeping the full approval chain visible, traceable, and easy to manage.`,
  "Budgeting Control": `Budgeting Control provides tools for organizations to track and govern spend across PO numbers, cost centers, users, or shipping addresses. Combined with Buying Policies and Approval Workflows, it enables enforcement of budget limits throughout the entire organization.
For merchants, it deepens long-term relationships with enterprise customers by supporting disciplined financial governance. For buyers, it prevents overspending, increases accountability, and keeps purchasing aligned with corporate budgets.`,
  "AI Quoting Experience": `AI Quoting Experience enables both sales reps and buyers to generate accurate, personalized quotes in seconds. For buyers, Request for Quotes (RFQ) flows are embedded directly in the buyer portal and powered by AI agents that can read files, extract key information, and structure quotes securely and rapidly. For sales reps, AI agents interpret incoming requests, suggest optimized terms, and act as an analytical companion to support successful negotiations. Reps can also propose quotes through a full Configure, Price, Quote (CPQ) experience. Buyers and sales reps collaborate through conversational interactions within the platform.
For merchants, it accelerates the quote-to-order cycle and ensures consistency across all reps. For buyers, it delivers fast, relevant proposals that reflect their needs, helping them move from negotiation to purchase with less back-and-forth.`,
  "Quote Approval Workflow": `Quote Approval Workflow enforces internal governance before quotes are shared with buyers. Quotes can be routed to managers or commercial teams based on discount thresholds, margin impact, contract terms, or any other business rule.
For merchants, it ensures commercial discipline and protects profitability. For buyers, it results in more reliable and compliant quotes—reducing renegotiations and maintaining trust throughout the sales process.`,
  "Sales Performance Tracking": `Sales Performance Tracking gives managers visibility into rep activity, quote conversion rates, order volume, and account performance. It consolidates operational data into clear metrics, helping identify top performers, uncover bottlenecks, and optimize sales operations. Sales reps also gain access to their own performance insights, enabling better planning and goal setting.
For merchants, it drives accountability and strengthens revenue forecasting. For buyers, it ensures a more responsive and well-coordinated sales experience, grounded in real performance data.`,
  "Buyer Overview": `Buyer Overview centralizes purchasing behavior, active quotes, order history, contract details, and engagement patterns for every customer. It gives sales teams a complete picture of each account, allowing them to tailor interactions and anticipate buyer needs.
For merchants, it enhances account management and supports proactive selling strategies. For buyers, it leads to more relevant communication that aligns with their procurement cadence and requirements.`,
  "Sales Team Management": `Sales Team Management allows organizations to structure sales roles, assign customer portfolios, and define permissions, ensuring each rep has the appropriate level of access to accounts and data. It supports team hierarchies, shared accounts, and governance aligned with complex B2B sales organizations.
For merchants, it provides operational clarity and reduces compliance risks across distributed teams. For buyers, it ensures consistent interactions with the right sales representatives, strengthening long-term commercial relationships.`,
  "Personalized Contracted Terms": `Personalized Contracted Terms allow merchants to define the exact commercial conditions agreed with each buyer organization. Contracts determine assortments, price lists, and payment methods offered to each customer. Every buyer sees only the products, prices, and conditions that apply specifically to them.
For merchants, this ensures precision and consistency in how negotiated agreements are applied at scale. For buyers, it delivers a seamless, compliant purchasing experience that reflects their contracted terms without manual intervention.`,
  "Hierarchical Organization Structure": `VTEX enables merchants to mirror the buyer's internal structure directly in the platform—departments, sub-units, cost centers, and multi-level purchasing groups—through Hierarchical Organization Structure. Each unit can hold its own users, addresses, payment methods, and policies.
For merchants, it ensures that complex enterprise customers operate in a way that matches their internal reality, reducing operational friction. For buyers, it provides clarity and control, letting each organizational level manage purchasing according to its responsibilities and governance.`,
  "AI Bulk Management": `AI Bulk Management for B2B includes two AI-powered capabilities: AI Contract Manager for merchants and AI Buyer Organization Manager for buyers. Merchants can upload large volumes of contract data, catalogs, or pricing updates, and AI agents automatically structure, validate, and configure the information. Buyers can create or maintain their organization structure—users, units, rules, and data—through conversational AI or AI-guided bulk ingestion.
For merchants, it drastically reduces manual work and accelerates onboarding or contract updates. For buyers, it simplifies complex setup tasks and keeps organizational data accurate and easy to maintain.`,
  "Address Book": `Address Book allows buyer organizations to configure shipping and billing addresses at the contract level—essential in any B2B procurement model. It supports multiple locations, predefined recipients, and site-specific delivery rules. Users can reuse addresses according to their permissions and organizational unit.
For merchants, it reduces delivery errors and improves fulfillment accuracy. For buyers, it centralizes operational logistics, ensuring every order is sent to the right place and recipient.`,
  "Shared Payment Methods": `Shared Payment Methods let organizations manage payment methods at the contract or unit level—whether negotiated payment terms or shared credit cards used by multiple users. Permissions ensure that only authorized individuals can access or use these methods during checkout.
For merchants, it simplifies financial administration and ensures the correct terms are applied per buyer. For buyers, it supports secure, compliant purchasing by ensuring the right payment instruments are used by the right people.`,
  "Buyer Roles & Permissions": `Roles & Permissions define what each user in the buyer organization can do on the storefront—buyer, approver, organizational unit manager, administrator, and more. Permissions govern activities such as placing orders, approving purchases, managing budgets, editing users, or accessing analytics.
For merchants, it supports complex governance models and ensures each account operates according to the buyer's rules. For buyers, it creates a controlled environment where responsibilities are clearly assigned and purchasing workflows run smoothly.`,
  "Authentication & SSO": `Authentication & SSO provides secure access methods tailored for B2B, including username-based login, password recovery, and integration with external identity providers. VTEX also offers additional security layers such as MFA, allowing organizations to enforce stringent identity and security standards across all users.
For merchants, it minimizes support issues and aligns with enterprise security expectations. For buyers, it provides a reliable, unified login experience that reduces friction and strengthens account security.`,
  "Catalog": `Catalog provides a flexible and scalable way to manage products, SKUs, categories, and attributes across complex B2B assortments. It supports industrial-grade needs such as technical specifications, variant-rich items, configurable products, and large-volume catalogs. Catalog data integrates seamlessly with contracts and organizational structures to ensure each buyer sees the right products.
Merchants ensures accurate and detailed product information that supports confident, compliant purchasing.`,
  "Pricing": `Pricing delivers robust price management for B2B scenarios, supporting multiple price lists that can be set according to each contract. It ensures that each customer receives the correct pricing in real time, aligned with commercial agreements.`,
  "Promotions": `Promotions enables merchants to configure incentives tailored to B2B purchasing behavior, such as bulk discounts, category-level benefits, contract-specific offers, bundle pricing, or exclusive promotions for certain buyers. It integrates with existing pricing logic and customer rules to ensure accuracy.
For merchants, it helps drive revenue growth, move inventory, and strengthen relationships through targeted commercial actions. For buyers, it provides relevant incentives that encourage repeat purchases and higher-volume orders.`,
  "Distributed Order Management": `Distributed Order Management (DOM) orchestrates the lifecycle of every order across warehouses, suppliers, inventory pools, and fulfillment nodes. It ensures the optimal sourcing path based on availability, delivery speed, cost, and commercial rules. DOM supports split orders, partial deliveries, multi-origin fulfillment, and enterprise-grade SLAs.
For merchants, it improves operational efficiency and lowers fulfillment costs. For buyers, it ensures reliable delivery performance and transparency across their entire order lifecycle.`,
  "Payment Gateway": `Payment Gateway offers a secure, native way to process payments with support for multiple payment methods, authorization flows, fraud checks, and settlement operations. It integrates directly with contract-level payment methods, B2B-specific payment conditions, and also external ERPs for credit control.`,
  "VTEX IO": `VTEX IO provides a serverless, enterprise-grade development platform for building custom applications, storefront components, and integrations. It offers a modular architecture, native deployment tools, and prebuilt capabilities that accelerate development while maintaining flexibility.`,
  "APIs": `VTEX offers comprehensive, well-documented APIs that allow merchants to integrate external systems, automate workflows, and unify data across their commerce ecosystem. These APIs support key areas such as catalog, pricing, inventory, orders, logistics, and B2B features like contracts and organizational structures.`,
  "DaaS": `DaaS (Data as a Service) provides real-time, high-quality access to operational and transactional data—including orders, catalog, pricing, customer records, and data stored in VTEX Master Data. It centralizes this information into unified export streams or APIs, making it easy to feed analytics platforms, BI tools, and enterprise data pipelines.`,
  "WebOps": `WebOps delivers the operational backbone for deploying, monitoring, and maintaining storefront and app infrastructure on VTEX. It includes CI/CD pipelines, observability tools, performance monitoring, and secure delivery frameworks.`,
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
                label="Buying Policies & Approval Workflows" 
                onClick={() => handleBoxClick("Buying Policies & Approval Workflows")}
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
          <DiagramContainer title="B2B Management" variant="navy">
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
              label="Buyer Roles & Permissions" 
              onClick={() => handleBoxClick("Buyer Roles & Permissions")}
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
            <DiagramBox 
              label="Authentication & SSO" 
              onClick={() => handleBoxClick("Authentication & SSO")}
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
