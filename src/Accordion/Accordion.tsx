import React, { FC, useState } from 'react';
import AccordionItem from './AccordionItem';
import { CompanyType } from "../types/company";

interface IAccordionProps {
  companies: CompanyType[];
}

const Accordion: FC<IAccordionProps> = ({ companies }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className='accordion'>
      {companies.map((company: CompanyType, index: number) => (
        <AccordionItem key={company.id} title={company.name} company={company} isOpen={index === openIndex} 
          toggleAccordion={() => toggleAccordion(index)} />
      ))}
    </ul>
  );
};

export default Accordion;
