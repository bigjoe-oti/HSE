import { LucideIcon } from "lucide-react";

export interface Formula {
  title: string;
  formula: string;
  description?: string;
  note?: string;
}

export interface Table {
  headers: string[];
  data: (string | number)[][];
  highlightFirst?: boolean;
}

export interface InfoItem {
  label: string;
  value: string;
  color?: "blue" | "green" | "orange" | "red" | "purple" | "cyan";
}

export interface SectionContent {
  type: "formula" | "table" | "info-grid" | "visual" | "list" | "text";
  title?: string;
  data: any; // More specific types based on 'type'
}

export interface KnowledgeSection {
  id: string;
  title: string;
  icon: string; // Icon name string to be resolved
  color: string;
  categories: {
    title: string;
    icon?: string;
    content: SectionContent[];
  }[];
}
