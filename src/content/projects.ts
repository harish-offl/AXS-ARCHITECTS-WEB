export type ProjectCategory = "Residential" | "Commercial" | "Interiors";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  description: string | null;
  cover: string;
  gallery: ProjectImage[];
  status: "completed" | "ongoing" | "conceptual";
  area: string | null;
  features: string[];
  alt: string;
  published: boolean;
  illustrative: boolean;
}

// Extracted from axsarchitects.com portfolio section.
// Project descriptions are not present in the source website (image-only galleries),
// so description is null and must not be fabricated. Areas/feature lists are also
// unavailable from the source and are intentionally left empty.
export const projects: Project[] = [
  {
    slug: "the-grey-barn-kodaikanal",
    name: "The Grey Barn, Kodaikanal",
    category: "Commercial",
    location: "Kodaikanal, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/1.jpg",
    alt: "The Grey Barn commercial building exterior, Kodaikanal",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1.jpg", alt: "The Grey Barn exterior" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2.jpg", alt: "The Grey Barn exterior view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/3.jpg", alt: "The Grey Barn exterior view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/4.jpg", alt: "The Grey Barn exterior view 4" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/5.jpg", alt: "The Grey Barn exterior view 5" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/6.jpg", alt: "The Grey Barn exterior view 6" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/7.jpg", alt: "The Grey Barn exterior view 7" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "azad-residence-iyyapanthangal-chennai",
    name: "Azad Residence",
    category: "Residential",
    location: "Iyyapanthangal, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/1-1.jpg",
    alt: "Azad Residence exterior, Iyyapanthangal Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-1.jpg", alt: "Azad Residence exterior" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2-1.jpg", alt: "Azad Residence exterior view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/3-1.jpg", alt: "Azad Residence exterior view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/4-1.jpg", alt: "Azad Residence exterior view 4" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/5-1.jpg", alt: "Azad Residence exterior view 5" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "mr-george-villa-ayyapanthangal-chennai",
    name: "Mr. George Villa",
    category: "Residential",
    location: "Ayyapanthangal, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/1-2.jpg",
    alt: "Mr. George Villa exterior, Ayyapanthangal Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-2.jpg", alt: "Mr. George Villa exterior" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2-2.jpg", alt: "Mr. George Villa exterior view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/3-2.jpg", alt: "Mr. George Villa exterior view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/4-2.jpg", alt: "Mr. George Villa exterior view 4" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "mr-kolandaivel-residence-the-valley-view-villa",
    name: "The Valley View Villa",
    category: "Residential",
    location: "Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/1-3.jpg",
    alt: "The Valley View Villa exterior",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-3.jpg", alt: "The Valley View Villa exterior" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2-3.jpg", alt: "The Valley View Villa exterior view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/3-3.jpg", alt: "The Valley View Villa exterior view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/5-2.jpg", alt: "The Valley View Villa exterior view 4" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "mr-pakkir-residence-vgn-highness-chennai",
    name: "Mr. Pakkir Residence",
    category: "Residential",
    location: "VGN Highness, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/1-4.jpg",
    alt: "Mr. Pakkir Residence exterior, VGN Highness Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-4.jpg", alt: "Mr. Pakkir Residence exterior" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2-4.jpg", alt: "Mr. Pakkir Residence exterior view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/3-4.jpg", alt: "Mr. Pakkir Residence exterior view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/4-3.jpg", alt: "Mr. Pakkir Residence exterior view 4" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "mr-ranganathan-villa-vgn-highness-chennai",
    name: "Mr. Ranganathan Villa",
    category: "Residential",
    location: "VGN Highness, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/1-5.jpg",
    alt: "Mr. Ranganathan Villa exterior, VGN Highness Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-5.jpg", alt: "Mr. Ranganathan Villa exterior" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2-5.jpg", alt: "Mr. Ranganathan Villa exterior view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/3-5.jpg", alt: "Mr. Ranganathan Villa exterior view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/4-4.jpg", alt: "Mr. Ranganathan Villa exterior view 4" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "mr-salik-residence-kodaikanal",
    name: "Mr. Salik Residence",
    category: "Residential",
    location: "Kodaikanal, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/1-6.jpg",
    alt: "Mr. Salik Residence exterior, Kodaikanal",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-6.jpg", alt: "Mr. Salik Residence exterior" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2-6.jpg", alt: "Mr. Salik Residence exterior view 2" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "mr-suresh-residence-vgn-highness-chennai",
    name: "Mr. Suresh Residence",
    category: "Residential",
    location: "VGN Highness, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/1-1_1_11zon.jpeg",
    alt: "Mr. Suresh Residence exterior, VGN Highness Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-1_1_11zon.jpeg", alt: "Mr. Suresh Residence exterior" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-1_2_11zon.jpg", alt: "Mr. Suresh Residence exterior view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-2_3_11zon.jpg", alt: "Mr. Suresh Residence exterior view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-3_4_11zon-scaled.jpg", alt: "Mr. Suresh Residence exterior view 4" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-4_5_11zon-scaled.jpg", alt: "Mr. Suresh Residence exterior view 5" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-5_6_11zon-scaled.jpg", alt: "Mr. Suresh Residence exterior view 6" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-6_7_11zon-scaled.jpg", alt: "Mr. Suresh Residence exterior view 7" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-7_8_11zon-scaled.jpg", alt: "Mr. Suresh Residence exterior view 8" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1-8_9_11zon-scaled.jpg", alt: "Mr. Suresh Residence exterior view 9" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "mrs-hema-residence-vgn-highness-chennai",
    name: "Mrs. Hema Residence",
    category: "Residential",
    location: "VGN Highness, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/Elevation-1_11zon.jpg",
    alt: "Mrs. Hema Residence elevation, VGN Highness Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Elevation-1_11zon.jpg", alt: "Mrs. Hema Residence elevation 1" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Elevation-2_11zon.jpg", alt: "Mrs. Hema Residence elevation 2" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "the-twin-house-avadi-chennai",
    name: "The Twin House",
    category: "Residential",
    location: "Avadi, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/0_1_11zon.jpg",
    alt: "The Twin House exterior, Avadi Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/0_1_11zon.jpg", alt: "The Twin House exterior" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/01_2_11zon.jpg", alt: "The Twin House exterior view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1_3_11zon.jpg", alt: "The Twin House exterior view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2_4_11zon-scaled.jpg", alt: "The Twin House exterior view 4" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "kitchen-designexecution-choolaimedu",
    name: "Kitchen Design + Execution",
    category: "Interiors",
    location: "Choolaimedu, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/View-1_1_11zon-1.jpg",
    alt: "Kitchen design and execution, Choolaimedu Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/View-1_1_11zon-1.jpg", alt: "Kitchen view 1" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/View-2_2_11zon-1.jpg", alt: "Kitchen view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/View-3_3_11zon-1.jpg", alt: "Kitchen view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/View-4_4_11zon-1.jpg", alt: "Kitchen view 4" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/View-5_5_11zon-scaled.jpg", alt: "Kitchen view 5" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/View-6_6_11zon-scaled.jpg", alt: "Kitchen view 6" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "kitchen-design-execution-avadi",
    name: "Kitchen Design + Execution",
    category: "Interiors",
    location: "Avadi, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/Kitchen_Mr.Anand_Avadi-1.jpg",
    alt: "Kitchen design and execution, Avadi Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Kitchen_Mr.Anand_Avadi-1.jpg", alt: "Kitchen view 1" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Kitchen_Mr.Anand_Avadi-2.jpg", alt: "Kitchen view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Kitchen_Mr.Anand_Avadi-3.jpg", alt: "Kitchen view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Kitchen_Mr.Anand_Avadi-4.jpg", alt: "Kitchen view 4" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Kitchen_Mr.Anand_Avadi-5.jpg", alt: "Kitchen view 5" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Kitchen_Mr.Anand_Avadi-6.jpg", alt: "Kitchen view 6" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "residence-appasamy-capella-vadapalani",
    name: "Residence | Appasamy Capella",
    category: "Residential",
    location: "Vadapalani, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/All-Renders_Project-Capella-03_1_11zon.jpg",
    alt: "Residence Appasamy Capella, Vadapalani Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/All-Renders_Project-Capella-03_1_11zon.jpg", alt: "Appasamy Capella render 1" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/All-Renders_Project-Capella-04_2_11zon.jpg", alt: "Appasamy Capella render 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/All-Renders_Project-Capella-05_3_11zon.jpg", alt: "Appasamy Capella render 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/All-Renders_Project-Capella-06_4_11zon.jpg", alt: "Appasamy Capella render 4" },
    ],
    status: "conceptual",
    area: null,
    features: [],
    illustrative: true,
    published: true,
  },
  {
    slug: "residence-ark-builders-kodambakkam",
    name: "Residence | Ark Builders",
    category: "Residential",
    location: "Kodambakkam, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/0.-Foyer_2_11zon.jpg",
    alt: "Residence Ark Builders foyer, Kodambakkam Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/0.-Foyer_2_11zon.jpg", alt: "Ark Builders foyer" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1.-Living-Room-View-1_3_11zon.jpg", alt: "Ark Builders living room 1" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2.-Living-Room-View-2_4_11zon.jpg", alt: "Ark Builders living room 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/5.-Master-Bed-View-1_8_11zon.jpg", alt: "Ark Builders master bedroom" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Accent-Wall-View_1_11zon.jpg", alt: "Ark Builders accent wall" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Dining-View_2_11zon.jpg", alt: "Ark Builders dining" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "residence-capella-vadapalani",
    name: "Residence | Capella",
    category: "Residential",
    location: "Vadapalani, Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/Daughter-Room-First-Cut-1_1_11zon.jpg",
    alt: "Residence Capella, Vadapalani Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Daughter-Room-First-Cut-1_1_11zon.jpg", alt: "Capella daughter room" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Kitchen-First-Cut-1_5_11zon.jpg", alt: "Capella kitchen" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Living_Dining_FIrst-Cut-2_9_11zon.jpg", alt: "Capella living dining" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Master-Bedroom-First-CUt-1_17_11zon.jpg", alt: "Capella master bedroom" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "residence-prestige-bella-vista-chennai",
    name: "Residence | Prestige Bella Vista",
    category: "Residential",
    location: "Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/1_1_11zon.jpg",
    alt: "Residence Prestige Bella Vista, Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/1_1_11zon.jpg", alt: "Prestige Bella Vista view 1" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/2_2_11zon.jpg", alt: "Prestige Bella Vista view 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/3_3_11zon.jpg", alt: "Prestige Bella Vista view 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/4_4_11zon.jpg", alt: "Prestige Bella Vista view 4" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/5_5_11zon.jpg", alt: "Prestige Bella Vista view 5" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
  {
    slug: "willow-walk",
    name: "Willow Walk",
    category: "Interiors",
    location: "Chennai, Tamil Nadu",
    description: null,
    cover: "https://axsarchitects.com/wp-content/uploads/2023/03/Willow-Walk-01_1_11zon.jpg",
    alt: "Willow Walk interiors, Chennai",
    gallery: [
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Willow-Walk-01_1_11zon.jpg", alt: "Willow Walk interior 1" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Willow-Walk-02_2_11zon-scaled.jpg", alt: "Willow Walk interior 2" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Willow-Walk-03_3_11zon.jpg", alt: "Willow Walk interior 3" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Willow-Walk-04_4_11zon.jpg", alt: "Willow Walk interior 4" },
      { src: "https://axsarchitects.com/wp-content/uploads/2023/03/Willow-Walk-05_5_11zon.jpg", alt: "Willow Walk interior 5" },
    ],
    status: "completed",
    area: null,
    features: [],
    illustrative: false,
    published: true,
  },
];

export const featuredProjectSlugs = [
  "the-grey-barn-kodaikanal",
  "mr-suresh-residence-vgn-highness-chennai",
  "residence-ark-builders-kodambakkam",
  "willow-walk",
  "azad-residence-iyyapanthangal-chennai",
];

export const categories = ["Residential", "Commercial", "Interiors"] as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProject(slug);
  if (!current) return [];
  return projects
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}
