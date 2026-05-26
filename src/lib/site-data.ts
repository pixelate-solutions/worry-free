import type { IconName } from "@/components/icon-from-name";

export const contactInfo = {
  phone: "248-585-2808",
  email: "worryfreeoutdoors@gmail.com",
  physicalAddress: ["1460 Rochester Road", "Troy, MI 48083"],
  mailingAddress: ["PO Box 1221", "Royal Oak, MI 48068"],
};

export const serviceAreas = [
  "Auburn Hills",
  "Berkley",
  "Birmingham",
  "Bloomfield Hills",
  "Bloomfield Twp.",
  "Clawson",
  "Detroit",
  "Ferndale",
  "Highland Park",
  "Novi",
  "Rochester",
  "Rochester Hills",
  "Royal Oak",
  "Southfield",
  "Troy",
  "Southeastern Michigan",
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Employment", href: "/employment" },
  { label: "Contact", href: "/contact" },
];

export const servicePageLinks = [
  { label: "Municipal Services", href: "/municipal-services" },
  { label: "Commercial Services", href: "/commercial-services" },
  { label: "Residential Services", href: "/residential-services" },
  { label: "Seasonal Services", href: "/seasonal-services" },
  { label: "Snow & Ice Control", href: "/snow-ice-control" },
];

export const trustItems: Array<{ label: string; detail: string; icon: IconName }> = [
  { label: "Since 1998", detail: "Decades of outdoor service", icon: "CalendarDays" },
  { label: "Licensed & Insured", detail: "Professional field crews", icon: "ShieldCheck" },
  { label: "24/7 Service", detail: "Responsive emergency support", icon: "Phone" },
  { label: "Southeastern Michigan", detail: "Based in Troy, MI", icon: "MapPin" },
];

export type AudienceCardData = {
  title: string;
  href: string;
  icon: IconName;
  accent: string;
  description: string;
};

export const audienceCards: AudienceCardData[] = [
  {
    title: "Municipal",
    href: "/municipal-services",
    icon: "Landmark",
    accent: "emerald",
    description:
      "Landscape management, streetscape care, cleanup, lighting, and year-round exterior maintenance for public spaces.",
  },
  {
    title: "Commercial",
    href: "/commercial-services",
    icon: "Building2",
    accent: "navy",
    description:
      "Reliable grounds maintenance, snow response, powerwashing, and property presentation for business properties.",
  },
  {
    title: "Residential",
    href: "/residential-services",
    icon: "Home",
    accent: "lime",
    description:
      "Lawn care, planting, pavers, irrigation, and seasonal services for homes across Oakland County.",
  },
  {
    title: "Seasonal",
    href: "/seasonal-services",
    icon: "Sparkles",
    accent: "amber",
    description:
      "Spring refreshes, summer color, fall cleanup, holiday decor, and event-ready outdoor support.",
  },
  {
    title: "Snow & Ice Control",
    href: "/snow-ice-control",
    icon: "Snowflake",
    accent: "sky",
    description:
      "Winter property access, safety-focused snow management, and 24/7 storm response planning.",
  },
];

export type ServiceData = {
  title: string;
  category: string;
  icon: IconName;
  description: string;
};

export const services: ServiceData[] = [
  {
    title: "Municipal Landscape Managers",
    category: "Municipal",
    icon: "Landmark",
    description:
      "Coordinated maintenance programs for civic properties, corridors, parks, and streetscape assets.",
  },
  {
    title: "Lawn Maintenance/Fertilizing",
    category: "Maintenance",
    icon: "Leaf",
    description:
      "Mowing, turf care, fertilizing, edging, and detail work that keeps properties consistently maintained.",
  },
  {
    title: "Landscape Maintenance and Design",
    category: "Landscaping",
    icon: "Trees",
    description:
      "Practical design, refreshes, pruning, bed maintenance, and complete landscape care programs.",
  },
  {
    title: "Irrigation",
    category: "Water Management",
    icon: "Waves",
    description:
      "Irrigation service and seasonal support to protect lawns, plantings, and landscape investments.",
  },
  {
    title: "Brick Pavers",
    category: "Hardscape",
    icon: "Shovel",
    description:
      "Paver installation and maintenance for walkways, patios, entrances, and outdoor gathering areas.",
  },
  {
    title: "Retaining Walls",
    category: "Hardscape",
    icon: "Building2",
    description:
      "Functional wall solutions that add structure, improve grade transitions, and complement the landscape.",
  },
  {
    title: "Annual & Perennial Flower Planting",
    category: "Seasonal Color",
    icon: "Flower2",
    description:
      "Seasonal flower programs for entrances, beds, municipal areas, and community-facing spaces.",
  },
  {
    title: "Hanging Basket and Flower Bed Design and Maintenance",
    category: "Seasonal Color",
    icon: "Flower2",
    description:
      "Design, installation, and maintenance for hanging baskets and flower beds with high curb appeal.",
  },
  {
    title: "Sidewalk Powerwashing",
    category: "Cleaning",
    icon: "Waves",
    description:
      "Powerwashing for sidewalks, pedestrian areas, entries, patios, and other hard surfaces.",
  },
  {
    title: "Graffiti & Gum Removal",
    category: "Cleaning",
    icon: "Sparkles",
    description:
      "Responsive removal services for high-traffic public, commercial, and community spaces.",
  },
  {
    title: "Garbage & Litter Control",
    category: "Cleanup",
    icon: "Truck",
    description:
      "Routine and event-based litter control that keeps properties clean, organized, and welcoming.",
  },
  {
    title: "Landscape Lighting",
    category: "Lighting",
    icon: "Lightbulb",
    description:
      "Outdoor lighting support for visibility, curb appeal, entrances, walkways, and landscape features.",
  },
  {
    title: "Holiday Lighting",
    category: "Seasonal",
    icon: "Sparkles",
    description:
      "Seasonal lighting programs that make public spaces, businesses, and homes feel polished for the holidays.",
  },
  {
    title: "Seasonal Holiday Decorations",
    category: "Seasonal",
    icon: "Sparkles",
    description:
      "Holiday display design, installation, and maintenance for attractive, stress-free seasonal presentation.",
  },
  {
    title: "24hr/7day Emergency Outdoor Maintenance",
    category: "Emergency",
    icon: "Phone",
    description:
      "Around-the-clock response for urgent outdoor maintenance needs, weather events, and special situations.",
  },
  {
    title: "24hr/7day Special Event Clean Up",
    category: "Events",
    icon: "CalendarDays",
    description:
      "Pre-event, post-event, and emergency cleanup services for municipal, commercial, and community events.",
  },
  {
    title: "Snow and Ice Control",
    category: "Winter",
    icon: "Snowflake",
    description:
      "Storm-ready snow removal and ice management programs for safe access through Michigan winters.",
  },
  {
    title: "Powerwashing",
    category: "Cleaning",
    icon: "Waves",
    description:
      "Commercial, municipal, and residential washing services for hardscapes and exterior surfaces.",
  },
  {
    title: "Putting Green Installation & Maintenance",
    category: "Specialty",
    icon: "Sprout",
    description:
      "Specialty outdoor installations and maintenance for residential and commercial putting greens.",
  },
];

export const featuredServices = services.slice(0, 8);

export const seasonalServices = [
  {
    season: "Spring",
    title: "Refresh & Reset",
    color: "spring",
    description:
      "Cleanup, bed preparation, mulch, pruning, irrigation startup, annual plantings, and color planning.",
    items: ["Spring cleanup", "Flower planting", "Irrigation startup", "Landscape refresh"],
  },
  {
    season: "Summer",
    title: "Polished All Season",
    color: "summer",
    description:
      "Lawn maintenance, fertilizing, hanging baskets, powerwashing, and detail work during peak growing season.",
    items: ["Lawn maintenance", "Fertilizing", "Powerwashing", "Flower bed care"],
  },
  {
    season: "Fall",
    title: "Prepare & Protect",
    color: "fall",
    description:
      "Fall cleanup, seasonal decor, final turf care, holiday lighting preparation, and winter readiness.",
    items: ["Fall cleanup", "Holiday decor", "Lighting setup", "Winter prep"],
  },
  {
    season: "Winter",
    title: "Snow-Ready Response",
    color: "winter",
    description:
      "Snow and ice control, emergency outdoor maintenance, storm monitoring, and access management.",
    items: ["Snow removal", "Ice control", "24/7 response", "Event cleanup"],
  },
];

export const memberships = [
  "Michigan Green Industry Association",
  "Snow and Ice Management Association",
  "Michigan Business & Professionals Association",
];

export const propertyTypes = ["Municipal", "Commercial", "Condominium", "Residential"];

export const serviceTypes = [
  "Lawn Maintenance/Fertilizing",
  "Landscape Maintenance and Design",
  "Snow and Ice Control",
  "Irrigation",
  "Powerwashing",
  "Holiday Lighting",
  "Emergency Outdoor Maintenance",
  "Special Event Clean Up",
  "Other",
];

export const pageMetadata = {
  about: {
    title: "About Worry Free Inc. | Troy, MI Outdoor Maintenance",
    description:
      "Learn about Worry Free Inc., founded in 1998 by Jeff Birkett and Travis Beard, serving residential, commercial, and municipal clients throughout Southeastern Michigan.",
  },
  services: {
    title: "Outdoor Services | Worry Free Inc.",
    description:
      "Explore lawn care, landscaping, irrigation, pavers, lighting, cleanup, powerwashing, snow and ice control, and 24/7 outdoor maintenance services.",
  },
  municipal: {
    title: "Municipal Services | Worry Free Inc.",
    description:
      "Municipal landscape management, litter control, powerwashing, snow response, lighting, and public-space maintenance for Southeastern Michigan communities.",
  },
  commercial: {
    title: "Commercial Services | Worry Free Inc.",
    description:
      "Commercial lawn, landscape, snow, ice, cleanup, powerwashing, and outdoor maintenance services based in Troy, Michigan.",
  },
  residential: {
    title: "Residential Services | Worry Free Inc.",
    description:
      "Residential lawn care, landscaping, pavers, irrigation, seasonal color, holiday lighting, and snow services across Oakland County.",
  },
  seasonal: {
    title: "Seasonal Services | Worry Free Inc.",
    description:
      "Spring, summer, fall, and winter outdoor services including cleanup, planting, holiday lighting, snow control, and emergency maintenance.",
  },
  snow: {
    title: "Snow & Ice Control | Worry Free Inc.",
    description:
      "24/7 snow and ice control services for municipal, commercial, condominium, and residential customers in Southeastern Michigan.",
  },
  employment: {
    title: "Employment | Worry Free Inc.",
    description:
      "Join Worry Free Inc. in Troy, Michigan. Explore outdoor maintenance, lawn care, landscaping, and snow operation employment opportunities.",
  },
  contact: {
    title: "Contact Worry Free Inc. | Troy, MI",
    description:
      "Request service from Worry Free Inc. Call 248-585-2808, email worryfreeoutdoors@gmail.com, or visit 1460 Rochester Road in Troy, Michigan.",
  },
};
