import React, { FC } from 'react';
import { CompanyType } from "../types/company";
import big from './asserts/big.png';
import small from './asserts/small.png';
import mid from './asserts/mid.jpeg'
import basic from './asserts/basic.jpg'

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
          <div className='row'>
            {/* <picture>
              <source media="(min-width: 576px)" srcSet={company.images['32x32']}/>
              <source media="(max-width: 992px)" srcSet={company.images['64x64']}/>
              <source media="(min-width: 992px)" srcSet={company.images['100x100']}/>
              <img src={company.images['100x100']} width="100" height="100" alt={company.name}/>
            </picture> */}
            <picture>
              <source type="image/png" media="(max-width: 576px)" srcSet={small}/>
              <source type="image/jpeg" media="(max-width: 992px)" srcSet={mid}/>
              <source type="image/jpeg" media="(min-width: 992px)" srcSet={big}/>
              <img src={basic} width="100" height="100" alt={company.name}/>
            </picture> 
        <div className='column'>
        <span>Company: {company.name}</span>
      <span>Employees: {company.employees}</span>
      <span>Date: {new Date(company.date * 1000).toLocaleDateString()}</span>
        </div>
    </div>
        </section>
      )}
    </li>
  );
};

export default AccordionItem;