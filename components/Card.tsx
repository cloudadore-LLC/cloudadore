import React from "react";

interface FeatureCardProps {
  icon?: React.ReactNode;
  profilePhoto?: string,
  featureCardHeader: string;
  fchStyle?: string;
  featureCardText: string;
  fctStyle?: string;
 

  className?: string;
}

const Card = ({
  icon,
  featureCardHeader,
  featureCardText,
  fchStyle,
  fctStyle,
  profilePhoto,
  
  className,
}: FeatureCardProps) => {
  return (
      <div className={className}>
        <div>{profilePhoto}</div>
      <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
      <h3 className={fchStyle}>{featureCardHeader}</h3>
      <p className={fctStyle}>{featureCardText}</p>
    </div>
  );
};

export default Card;
