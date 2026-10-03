import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface TerminologyItem {
  term: string;
  definition: string;
}

interface TerminologyCategory {
  category: string;
  terms: TerminologyItem[];
}

const insuranceTerminology: TerminologyCategory[] = [
  {
    category: "Plan Types",
    terms: [
      { term: "HMO", definition: "Health Maintenance Organization - Requires a primary care physician and referrals for specialists" },
      { term: "PPO", definition: "Preferred Provider Organization - More flexibility to see any doctor, higher premiums" },
      { term: "EPO", definition: "Exclusive Provider Organization - Like PPO but no out-of-network coverage" },
      { term: "HDHP", definition: "High Deductible Health Plan - Lower premiums, higher deductibles, HSA eligible" },
      { term: "POS", definition: "Point of Service - Hybrid of HMO and PPO features" },
    ],
  },
  {
    category: "Costs & Payments",
    terms: [
      { term: "Premium", definition: "Monthly payment to maintain health insurance coverage" },
      { term: "Deductible", definition: "Amount you pay before insurance starts covering costs" },
      { term: "Copay", definition: "Fixed amount paid for a covered service (e.g., $20 for doctor visit)" },
      { term: "Coinsurance", definition: "Percentage of costs you pay after meeting deductible (e.g., 20%)" },
      { term: "OOP Max", definition: "Out-of-Pocket Maximum - Most you'll pay in a year before 100% coverage" },
    ],
  },
  {
    category: "Coverage Terms",
    terms: [
      { term: "In-Network", definition: "Doctors/facilities contracted with the insurance company for lower rates" },
      { term: "Out-of-Network", definition: "Providers not contracted, usually higher costs or no coverage" },
      { term: "Prior Authorization", definition: "Pre-approval required from insurer before certain services" },
      { term: "Formulary", definition: "List of prescription drugs covered by the plan" },
      { term: "EOB", definition: "Explanation of Benefits - Statement showing what was billed and paid" },
    ],
  },
  {
    category: "Enrollment",
    terms: [
      { term: "OEP", definition: "Open Enrollment Period - Annual window to enroll or change plans" },
      { term: "SEP", definition: "Special Enrollment Period - Triggered by qualifying life events" },
      { term: "QLE", definition: "Qualifying Life Event - Marriage, birth, job loss that allows enrollment" },
      { term: "ACA", definition: "Affordable Care Act - Federal law governing health insurance marketplace" },
      { term: "COBRA", definition: "Continuation coverage after job loss (usually 18-36 months)" },
    ],
  },
];

const bioscientificTerminology: TerminologyCategory[] = [
  {
    category: "Diagnostic Imaging",
    terms: [
      { term: "MRI", definition: "Magnetic Resonance Imaging - Uses magnetic fields for detailed soft tissue images" },
      { term: "CT/CAT", definition: "Computed Tomography - X-ray technology for cross-sectional body images" },
      { term: "Ultrasound", definition: "Uses sound waves to create images of internal organs" },
      { term: "X-Ray", definition: "Electromagnetic radiation to view bones and dense tissues" },
      { term: "PET Scan", definition: "Positron Emission Tomography - Shows metabolic activity in tissues" },
    ],
  },
  {
    category: "Laboratory Equipment",
    terms: [
      { term: "CBC", definition: "Complete Blood Count - Measures blood cell types and quantities" },
      { term: "LIMS", definition: "Laboratory Information Management System - Software for sample tracking" },
      { term: "Centrifuge", definition: "Separates blood/fluid components by spinning at high speeds" },
      { term: "Spectrophotometer", definition: "Measures light absorption to analyze substance concentrations" },
      { term: "PCR", definition: "Polymerase Chain Reaction - Amplifies DNA for detection/analysis" },
    ],
  },
  {
    category: "Patient Monitoring",
    terms: [
      { term: "ECG/EKG", definition: "Electrocardiogram - Records heart's electrical activity" },
      { term: "SpO2", definition: "Oxygen Saturation - Percentage of oxygen in blood (pulse oximetry)" },
      { term: "BP", definition: "Blood Pressure - Systolic/diastolic measurement (e.g., 120/80 mmHg)" },
      { term: "HR", definition: "Heart Rate - Beats per minute (normal: 60-100 BPM)" },
      { term: "Capnography", definition: "Monitors CO2 levels in exhaled breath" },
    ],
  },
  {
    category: "Regulatory & Standards",
    terms: [
      { term: "FDA", definition: "Food and Drug Administration - US regulatory body for medical devices" },
      { term: "CE Marking", definition: "European conformity certification for medical devices" },
      { term: "ISO 13485", definition: "Quality management standard for medical device manufacturers" },
      { term: "HIPAA", definition: "Health Insurance Portability and Accountability Act - Patient data privacy" },
      { term: "EMR/EHR", definition: "Electronic Medical/Health Records - Digital patient documentation" },
    ],
  },
  {
    category: "Equipment Terms",
    terms: [
      { term: "Calibration", definition: "Adjusting equipment to ensure accurate measurements" },
      { term: "Sterilization", definition: "Complete elimination of microorganisms from equipment" },
      { term: "Autoclave", definition: "Steam pressure device for sterilizing surgical instruments" },
      { term: "Infusion Pump", definition: "Delivers fluids/medications at controlled rates" },
      { term: "Ventilator", definition: "Mechanical breathing support device for patients" },
    ],
  },
];

interface TerminologyBoxProps {
  scenarioId: string;
}

export function TerminologyBox({ scenarioId }: TerminologyBoxProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  // Only show for specific scenarios
  if (scenarioId !== "health_insurance_sales" && scenarioId !== "bioscientific") {
    return null;
  }

  const terminology = scenarioId === "health_insurance_sales" 
    ? insuranceTerminology 
    : bioscientificTerminology;

  const title = scenarioId === "health_insurance_sales"
    ? "Insurance Terminology"
    : "Medical Equipment Terminology";

  return (
    <Card className="mb-4 border-action/30 bg-action/5">
      <CardContent className="p-3">
        <Button
          variant="ghost"
          className="w-full flex items-center justify-between p-0 h-auto hover:bg-transparent"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2 text-action">
            <BookOpen className="w-4 h-4" />
            <span className="font-semibold text-sm">{title}</span>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </Button>

        {isExpanded && (
          <div className="mt-3 space-y-3 animate-fade-in">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1">
              {terminology.map((cat, idx) => (
                <Button
                  key={cat.category}
                  variant={activeCategory === idx ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "text-xs h-7",
                    activeCategory === idx && "bg-action hover:bg-action-hover"
                  )}
                  onClick={() => setActiveCategory(idx)}
                >
                  {cat.category}
                </Button>
              ))}
            </div>

            {/* Terms List */}
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {terminology[activeCategory].terms.map((item) => (
                <div
                  key={item.term}
                  className="p-2 rounded-lg bg-background border text-sm"
                >
                  <span className="font-bold text-action">{item.term}</span>
                  <span className="text-muted-foreground"> — {item.definition}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
