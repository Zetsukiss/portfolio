import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-5">
      <div className="container">
        <h2 className="mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
}
