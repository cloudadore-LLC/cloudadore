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
    <div className="bg-white rounded-xl border shadow-sm p-6 text-center hover:shadow-md transition">
      <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{featureCardHeader}</h3>
      <p className="text-gray-600 text-sm">{featureCardText}</p>
    </div>
  );
};

export default Card;
