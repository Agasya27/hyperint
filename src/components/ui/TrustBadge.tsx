import { cn } from "@/lib/utils";
import { Check, Shield, Award, Users } from "lucide-react";

type BadgeVariant = "verified" | "trusted" | "popular" | "certified";

interface TrustBadgeProps {
  variant: BadgeVariant;
  text?: string;
  className?: string;
}

const badgeConfig: Record<BadgeVariant, { icon: typeof Check; defaultText: string }> = {
  verified: { icon: Check, defaultText: "Verified Purchase" },
  trusted: { icon: Shield, defaultText: "Trusted Seller" },
  popular: { icon: Users, defaultText: "Best Seller" },
  certified: { icon: Award, defaultText: "Certified Organic" },
};

export const TrustBadge = ({ variant, text, className }: TrustBadgeProps) => {
  const config = badgeConfig[variant];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "trust-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all",
        "bg-sage-light text-sage border border-sage/10",
        className
      )}
    >
      <Icon className="w-3 h-3" />
      {text || config.defaultText}
    </span>
  );
};
