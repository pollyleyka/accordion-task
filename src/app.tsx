import axios from 'axios';
import React, { useState, useEffect, FC } from 'react';

import { CompanyType } from "./types/company";
import Accordion from './Accordion/Accordion';

const endpoint = "https://api.npoint.io/e01cac7d042707a00a72";
interface IRespData {
  companies: CompanyType[];
}

export const App: FC = () => {
  const [companies, setCompanies] = useState<CompanyType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IRespData>(endpoint);
        setCompanies(response.data.companies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Companies</h1>
      <Accordion companies={companies} />
    </>
  );
};
