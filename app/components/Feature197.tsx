"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface Feature197Props {
  features: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Ready-to-Use UI Blocks",
    image: "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
  },
  {
    id: 2,
    title: "Tailwind CSS & TypeScript",
    image: "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
  },
  {
    id: 3,
    title: "Dark Mode & Customization",
    image: "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Every block supports dark mode out of the box and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
  },
  {
    id: 4,
    title: "Accessibility First",
    image: "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation support, and semantic HTML structure. Ensure your website is usable by everyone without extra effort.",
  },
  {
    id: 5,
    title: "Modern Development Stack",
    image: "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    description:
      "Built for modern web development with React 18, Next.js 14, and the latest shadcn/ui components. Take advantage of React Server Components, TypeScript strict mode, and other cutting-edge features while maintaining excellent performance.",
  },
];

const Feature197 = ({ features = defaultFeatures }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);

  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className="max-w-[1200px] mx-auto p-[40px] md:py-[80px]">
      <div className="container mx-auto">
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block">
            <img
              src={activeImage}
              alt="Feature preview"
              className="aspect-[4/3] rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature197 };

