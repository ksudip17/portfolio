import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
}) => {
  return (
    <div
      className={`bg-white dark:bg-secondary-800 rounded-xl shadow-sm dark:shadow-secondary-900 p-6 ${
        hover ? 'transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;