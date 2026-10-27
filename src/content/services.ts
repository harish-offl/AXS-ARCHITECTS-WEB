export interface Service {
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  considerations: string[];
  deliverables: string[];
  relatedProjects: string[];
  image: string;
  imageAlt: string;
  published: boolean;
}

export const services: Service[] = [
  {
    slug: "architecture",
    title: "Architecture",
    category: "Residential & Commercial",
    description:
      "At our architecture service, we understand that a well-designed building can not only enhance the functionality of the space but also evoke emotions and leave a lasting impression. That's why we focus on creating beautiful, innovative, and sustainable designs that reflect your personality and meet your unique needs.",
    icon: "Building2",
    considerations: [
      "Site context and orientation",
      "Functional spatial planning",
      "Sustainable design principles",
      "Materiality and construction detail",
      "Local building regulations",
    ],
    deliverables: [
      "Concept design drawings",
      "Floor plans and sections",
      "Elevations and 3D visualisations",
      "Working drawings for execution",
    ],
    relatedProjects: [
      "the-grey-barn-kodaikanal",
      "mr-suresh-residence-vgn-highness-chennai",
      "the-twin-house-avadi-chennai",
    ],
    image: "https://axsarchitects.com/wp-content/uploads/2023/03/1.jpg",
    imageAlt: "Architecture project exterior",
    published: true,
  },
  {
    slug: "interiordesign",
    title: "Interior Design",
    category: "Residential & Commercial Interiors",
    description:
      "Are you looking for an interior design service that can turn your dream space into reality? Our team of talented and experienced designers will work with you to create a space that is not only beautiful but also functional and comfortable.",
    icon: "Sofa",
    considerations: [
      "Client lifestyle and preferences",
      "Space planning and ergonomics",
      "Lighting design",
      "Material and finish selection",
      "Custom joinery and furniture",
    ],
    deliverables: [
      "Interior concept and mood boards",
      "Space planning layouts",
      "Finishes and materials schedule",
      "Custom furniture and joinery details",
    ],
    relatedProjects: [
      "residence-ark-builders-kodambakkam",
      "willow-walk",
      "kitchen-design-execution-avadi",
    ],
    image: "https://axsarchitects.com/wp-content/uploads/2023/03/0.-Foyer_2_11zon.jpg",
    imageAlt: "Interior design foyer",
    published: true,
  },
  {
    slug: "urbandesign",
    title: "Urban Design",
    category: "Urban Planning",
    description:
      "Our urban design service is all about creating vibrant, sustainable, and livable communities that meet the needs of their residents. We believe that a well-designed urban environment can enhance the quality of life and foster social connections. That's why we focus on designing public spaces, streetscapes, and buildings that are functional, beautiful, and sustainable.",
    icon: "Map",
    considerations: [
      "Public realm and streetscapes",
      "Community needs and social connections",
      "Sustainable urban environment",
      "Walkability and accessibility",
      "Mixed-use integration",
    ],
    deliverables: [
      "Urban design framework",
      "Public space concepts",
      "Streetscape design",
      "Design guidelines",
    ],
    relatedProjects: ["the-grey-barn-kodaikanal"],
    image: "https://axsarchitects.com/wp-content/uploads/2023/03/1-1_1_11zon.jpeg",
    imageAlt: "Urban design streetscape",
    published: true,
  },
  {
    slug: "planning",
    title: "Planning",
    category: "Project Planning",
    description:
      "At our planning service, we believe that a well-planned project is the key to success. That's why we take the time to understand our clients' needs and goals and create a detailed plan that outlines every aspect of the project. From site analysis to feasibility studies, we leave no stone unturned to ensure a smooth and successful project.",
    icon: "ClipboardList",
    considerations: [
      "Client needs and goals",
      "Site analysis",
      "Feasibility studies",
      "Project timeline and phasing",
      "Budget alignment",
    ],
    deliverables: [
      "Project brief and requirements",
      "Site analysis report",
      "Feasibility study",
      "Master plan and phasing",
    ],
    relatedProjects: ["mr-pakkir-residence-vgn-highness-chennai"],
    image: "https://axsarchitects.com/wp-content/uploads/2023/03/1-5.jpg",
    imageAlt: "Project planning",
    published: true,
  },
  {
    slug: "3dmodeling",
    title: "3D Modelling",
    category: "Visualisation",
    description:
      "Our 3D modeling service allows clients to visualize their project in a realistic and immersive way. We use the latest technology to create detailed 3D models that accurately represent the final product. This allows our clients to make informed decisions and ensure that their vision is realized.",
    icon: "Cube",
    considerations: [
      "Accurate scale and proportion",
      "Realistic material representation",
      "Lighting and shadow studies",
      "Client decision-making support",
      "Design iteration",
    ],
    deliverables: [
      "Detailed 3D model",
      "Photorealistic renders",
      "Walkthrough animations",
      "Design review visualisations",
    ],
    relatedProjects: ["residence-appasamy-capella-vadapalani"],
    image: "https://axsarchitects.com/wp-content/uploads/2023/03/Render-1_8_11zon.jpg",
    imageAlt: "3D model render",
    published: true,
  },
  {
    slug: "residentialproject",
    title: "Residential Projects",
    category: "Housing",
    description:
      "Whether you're looking to build a new home or renovate an existing one, our residential project service can help you achieve your vision. We work closely with our clients to understand their unique needs and preferences and create a design that is not only beautiful but also functional and sustainable.",
    icon: "Home",
    considerations: [
      "Family lifestyle and needs",
      "Home orientation and natural light",
      "Privacy and zoning",
      "Sustainable materials",
      "Future-proofing and flexibility",
    ],
    deliverables: [
      "Residential concept design",
      "House plans and elevations",
      "Interior coordination",
      "Execution drawings",
    ],
    relatedProjects: [
      "azad-residence-iyyapanthangal-chennai",
      "mr-george-villa-ayyapanthangal-chennai",
      "willow-walk",
    ],
    image: "https://axsarchitects.com/wp-content/uploads/2023/03/0_1_11zon.jpg",
    imageAlt: "Residential home exterior",
    published: true,
  },
  {
    slug: "commercialproject",
    title: "Commercial Projects",
    category: "Commercial",
    description:
      "Our commercial project service is all about helping businesses create spaces that reflect their brand and enhance the customer experience. From retail stores to office spaces, we design buildings that are both functional and visually appealing to attract and retain customers.",
    icon: "Store",
    considerations: [
      "Brand identity and customer experience",
      "Retail and office layout",
      "Footfall and circulation",
      "Signage and visibility",
      "Commercial building codes",
    ],
    deliverables: [
      "Commercial concept design",
      "Retail/office floor plans",
      "Brand-aligned interiors",
      "Execution and coordination",
    ],
    relatedProjects: ["the-grey-barn-kodaikanal"],
    image: "https://axsarchitects.com/wp-content/uploads/2023/03/1.jpg",
    imageAlt: "Commercial building exterior",
    published: true,
  },
  {
    slug: "execution",
    title: "Execution",
    category: "Construction & Execution",
    description:
      "At our execution service, we understand that a successful project is all about execution. That's why we focus on delivering quality workmanship, meeting deadlines, and exceeding expectations. We work closely with our clients to ensure that every aspect of the project is executed to their satisfaction.",
    icon: "Hammer",
    considerations: [
      "Quality workmanship",
      "Project timeline and deadlines",
      "Contractor coordination",
      "Site supervision",
      "Quality control and inspections",
    ],
    deliverables: [
      "Site supervision and coordination",
      "Quality assurance",
      "Timely project delivery",
      "Final inspection and handover",
    ],
    relatedProjects: [
      "kitchen-designexecution-choolaimedu",
      "kitchen-design-execution-avadi",
    ],
    image: "https://axsarchitects.com/wp-content/uploads/2023/03/2.jpg",
    imageAlt: "Project execution site",
    published: true,
  },
  {
    slug: "elevation",
    title: "Elevation Design",
    category: "Exterior Design",
    description:
      "The exterior of a building is the first thing people notice, and we believe that it should make a statement. Our elevation service focuses on creating striking and innovative designs that stand out from the crowd. We pay attention to every detail to ensure that the final product is not only visually appealing but also functional.",
    icon: "Layout",
    considerations: [
      "Street presence and curb appeal",
      "Material and texture palette",
      "Proportion and rhythm",
      "Climate-responsive design",
      "Functional openings and shading",
    ],
    deliverables: [
      "Elevation concepts",
      "Material board",
      "Detailed elevation drawings",
      "3D elevation visualisations",
    ],
    relatedProjects: ["mrs-hema-residence-vgn-highness-chennai"],
    image: "https://axsarchitects.com/wp-content/uploads/2023/03/Elevation-1_11zon.jpg",
    imageAlt: "Building elevation design",
    published: true,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
