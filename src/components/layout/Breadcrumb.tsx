import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="py-3 text-xs text-muted-foreground">
      <ol className="flex items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {item.href ? (
              <a href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
            {i < items.length - 1 && (
              <ChevronRight className="w-3 h-3" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
