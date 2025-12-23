import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({icon, title, description}) => {
    return (
      <div className="p-6 bg-contrast dark:bg-background rounded-2xl shadow-2xl shadow-contrast/2 hover:shadow-contrast/6 cursor-pointer hover:scale-102 transition-all duration-500 border border-transparent hover:border-primary">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-foreground dark:text-foreground">{title}</h3>
        <p className="text-text dark:text-foreground">{description}</p>
      </div>
    )
}