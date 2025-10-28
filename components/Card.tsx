import { User } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  featureCardHeader: string;
  featureCardText: string;

  className?: string;
}

const Card = ({
  icon,
  featureCardHeader,
  featureCardText,

  className,
}: FeatureCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl border shadow-sm p-16 text-center hover:shadow-md transition ${className}`}
    >
      <div className="flex justify-center mb-4 text-blue-600">
        {icon ?? <User size={24} />}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold text-slate-900 truncate">
          {featureCardHeader}
        </h3>
        <div className="mt-1 text-sm text-slate-600">{featureCardText}</div>
      </div>
    </div>
  );
};

export default Card;
