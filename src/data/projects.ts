import iconCity from "@/assets/properties/icon-city.jpg";
import iconResidency from "@/assets/properties/icon-residency.jpg";
import iconResidency2 from "@/assets/properties/icon-residency-2.jpg";
import iconVillage from "@/assets/properties/icon-village.jpg";
import iconVillage2 from "@/assets/properties/icon-village-2.jpg";

export interface Project {
  slug: string;
  name: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
  amenities: { category: string; items: string[] }[];
  pricing: {
    startingFrom: string;
    plotSizes: string[];
    emiNote?: string;
    registryNote?: string;
  };
  seo: {
    title: string;
    description: string;
  };
  images: string[];
  mapQuery: string;
}

export const projects: Project[] = [
  {
    slug: "icon-city",
    name: "Icon City",
    location: "NH-139, Patna",
    status: "RERA Approved",
    description: "Icon City is a premier real estate project in Patna, standing at the forefront of the city's residential and luxury property market. Located strategically near AIIMS, it offers high-quality, affordable homes and plots designed for long-term value.",
    highlights: [
      "500 Meters from National Highway - 139",
      "8.5 Km from AIIMS Hospital",
      "Banks & ATMs within 500 Meters",
      "Prime Residential Location"
    ],
    amenities: [
      {
        category: "Infrastructure",
        items: ["Advanced Drainage System", "Solar Street Lights", "Reliable Electricity Supply"]
      },
      {
        category: "Security",
        items: ["24x7 Security with CCTV", "Fully Gated Society", "Intercom Facility"]
      },
      {
        category: "Lifestyle",
        items: ["Top-Class Community Park", "Children's Play Area", "Green Walking Tracks"]
      }
    ],
    pricing: {
      startingFrom: "Starting ₹1599 / Sq. Ft",
      plotSizes: ["900 Sq. Ft", "1200 Sq. Ft", "1500 Sq. Ft"],
      emiNote: "Flexible EMI plans available up to 24 months.",
      registryNote: "Immediate registry and mutation support."
    },
    seo: {
      title: "Icon City - Premium Plots Near AIIMS Patna | Dhruv Iconic",
      description: "Discover Icon City by Dhruv Iconic. Gated society plots on NH-139, Patna with modern amenities and RERA approval."
    },
    images: [iconCity, iconResidency2, iconVillage2],
    mapQuery: "NH-139 Patna AIIMS"
  },
  {
    slug: "icon-residency",
    name: "Icon Residency",
    location: "Bihta, Patna",
    status: "Under Development",
    description: "Icon Residency is known for offering luxury homes and prime residential plots in Patna. We are dedicated to delivering high-quality construction with modern amenities, strategically located in the most sought-after neighborhoods.",
    highlights: [
      "Located in the Heart of Bihta",
      "Modern Eco-Friendly Amenities",
      "On-Time Delivery Guarantee",
      "Excellent Returns on Investment"
    ],
    amenities: [
      {
        category: "Core Utilities",
        items: ["24x7 Security Surveillance", "Uninterrupted Electricity", "Smart Waste Management"]
      },
      {
        category: "Leisure",
        items: ["Green Walking Tracks", "Dedicated Play Areas", "Community Hall"]
      }
    ],
    pricing: {
      startingFrom: "Starting ₹1999 / Sq. Ft",
      plotSizes: ["900 Sq. Ft", "1200 Sq. Ft", "1500 Sq. Ft", "2000 Sq. Ft"],
      emiNote: "Low interest EMI options from leading banks."
    },
    seo: {
      title: "Icon Residency Bihta - Luxury Residential Plots | Dhruv Iconic",
      description: "Icon Residency offers prime plots in Bihta, Patna. Modern gated community with high ROI potential."
    },
    images: [iconResidency, iconResidency2, iconCity],
    mapQuery: "Bihta Patna Bihar"
  },
  {
    slug: "icon-village",
    name: "Icon Village",
    location: "Maner, Patna",
    status: "RERA Approved",
    description: "The Biggest Township Project in Maner, Patna. Icon Village stands out with its combination of affordability and luxury living, offering spacious layouts and modern infrastructure.",
    highlights: [
      "Biggest Township in Maner",
      "Flexible EMI Plans (up to 36 months)",
      "Registry & Mutation on 25% Payment",
      "Resell with 27-29% Hike Potential"
    ],
    amenities: [
      {
        category: "Community",
        items: ["World-Class Parks", "High-End Clubhouse", "Community Center"]
      },
      {
        category: "Safety",
        items: ["24/7 Gated Security", "CCTV Monitoring", "Fire Safety Systems"]
      }
    ],
    pricing: {
      startingFrom: "Starting ₹1299 / Sq. Ft",
      plotSizes: ["900 Sq. Ft", "1200 Sq. Ft", "1800 Sq. Ft"],
      emiNote: "Extended EMI plans available up to 36 months.",
      registryNote: "Possession on 25% payment."
    },
    seo: {
      title: "Icon Village Maner - Biggest Township in Patna | Dhruv Iconic",
      description: "Icon Village by Dhruv Iconic in Maner, Patna. Affordable luxury plots with the largest township facilities."
    },
    images: [iconVillage, iconVillage2, iconResidency],
    mapQuery: "Maner Patna Bihar"
  }
];

export const getProjectBySlug = (slug: string) => {
  return projects.find((p) => p.slug === slug);
};
