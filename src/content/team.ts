export interface TeamMember {
  name: string;
  role: string;
  image: string | null;
  imageAlt: string;
  bio: string | null;
  published: boolean;
}

// Team members as listed on the original About page.
// Approved photographs are not available in the source, so image is null and
// bios are intentionally not fabricated.
export const team: TeamMember[] = [
  {
    name: "Thameem Ansari",
    role: "Chief Architect",
    image: null,
    imageAlt: "Thameem Ansari, Chief Architect",
    bio: null,
    published: true,
  },
  {
    name: "Saffa Roshan",
    role: "Chief Architect",
    image: null,
    imageAlt: "Saffa Roshan, Chief Architect",
    bio: null,
    published: true,
  },
  {
    name: "Razia Fathima",
    role: "Design Partner",
    image: null,
    imageAlt: "Razia Fathima, Design Partner",
    bio: null,
    published: true,
  },
  {
    name: "Vinduja",
    role: "Junior Architect",
    image: null,
    imageAlt: "Vinduja, Junior Architect",
    bio: null,
    published: true,
  },
];

export function getTeam(): TeamMember[] {
  return team.filter((t) => t.published);
}
