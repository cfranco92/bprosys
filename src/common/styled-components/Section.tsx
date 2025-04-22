'use client';

import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({
  id,
  title,
  description,
  children,
  className = ''
}: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-20 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        {children}
      </div>
    </section>
  );
};

export default Section; 