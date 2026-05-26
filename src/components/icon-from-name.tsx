import {
  Building2,
  CalendarDays,
  Flower2,
  Home,
  Landmark,
  Leaf,
  Lightbulb,
  MapPin,
  Phone,
  ShieldCheck,
  Shovel,
  Snowflake,
  Sparkles,
  Sprout,
  Trees,
  Truck,
  Waves,
} from "lucide-react";

export const iconMap = {
  Building2,
  CalendarDays,
  Flower2,
  Home,
  Landmark,
  Leaf,
  Lightbulb,
  MapPin,
  Phone,
  ShieldCheck,
  Shovel,
  Snowflake,
  Sparkles,
  Sprout,
  Trees,
  Truck,
  Waves,
};

export type IconName = keyof typeof iconMap;

export function IconFromName({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = iconMap[name];

  return <Icon className={className} aria-hidden="true" />;
}
