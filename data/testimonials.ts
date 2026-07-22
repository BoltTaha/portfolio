export interface Testimonial {
  quote: string;
  rating: number;
  source: string;
  author?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Would always be willing to hire this freelancer. He is so great, quick and hard working.",
    rating: 5,
    source: "Upwork",
    date: "Jun 24, 2026",
  },
  {
    quote:
      "Muhammad was great. Fast, very smart and flexible. Would love to keep working with him on upgrades.",
    rating: 5,
    source: "Upwork",
    date: "Apr 21, 2026",
  },
  {
    quote:
      "Taha is an excellent person, attentive to instructions and my requests. He demonstrated impeccable professionalism, and the results of his work were very satisfactory. I recommend Taha and will call upon him for my future technical needs. Well done, Taha!",
    rating: 5,
    source: "Fiverr",
    author: "noureddinekhoua",
  },
  {
    quote: "A wonderful man.",
    rating: 5,
    source: "Fiverr",
  },
  {
    quote: "Great, good work.",
    rating: 5,
    source: "Fiverr",
  },
];
