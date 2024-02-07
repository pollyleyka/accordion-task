import React, { FC } from 'react';
import { CompanyType } from "../types/company";

interface IItemProps {
  title: string;
  company: CompanyType;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const AccordionItem: FC <IItemProps> = ({ title, company, isOpen, toggleAccordion }) => {

  return (
    <li className='accordion-item'>
      <h2 className='accordion-title' onClick={toggleAccordion}>{title}</h2>
      {isOpen && (
        <section className='accordion-content'>
          <div className='column'>
            <picture>
              <source media="(min-width: 992px)" srcSet={`${company.images['100x100']}`}/>
              <source media="(min-width: 768px)" srcSet={`${company.images['64x64']}`}/>
              <source media="(min-width: 576px)" srcSet={`${company.images['32x32']}`}/>
              <img src={company.images['100x100']} width="100" height="100" alt={company.name}/>
            </picture>
      <span>Company: {company.name}</span>
      <span>Employees: {company.employees}</span>
      <span>Date: {new Date(company.date * 1000).toLocaleDateString()}</span>
    </div>
        </section>
      )}
    </li>
  );
};

export default AccordionItem;