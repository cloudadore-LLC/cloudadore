import React from 'react'


interface  FeatureCardProps{
    icon: React.ReactNode;
    featureCardHeader: string;
    featureCardText: string;
    children?: React.ReactNode;
}

const Card = ({icon,featureCardHeader, featureCardText, children}:FeatureCardProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Card