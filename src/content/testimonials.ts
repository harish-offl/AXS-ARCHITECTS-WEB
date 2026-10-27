export interface Testimonial {
  name: string;
  text: string;
  published: boolean;
}

// Authentic testimonials extracted verbatim from the original website.
// No star ratings or additional attribution have been added beyond the source.
export const testimonials: Testimonial[] = [
  {
    name: "Sabeena Mohideen",
    text: "Truly a 5 Star experience, exceeding expectations. I would definitely recommend AXS Architects. Highly talented architects. They design practical buildings without compromising the look.",
    published: true,
  },
  {
    name: "Satisfied Client",
    text: "A highly knowledgeable and cooperative team. Professional, precise, and detail-oriented. I'm very pleased with their turnkey work.",
    published: true,
  },
  {
    name: "James",
    text: "AXS Architects provided a truly exceptional experience, exceeding all of my expectations. Their highly talented team of architects designed a practical building that perfectly balances functionality with aesthetic appeal.",
    published: true,
  },
];

export function getTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.published);
}
