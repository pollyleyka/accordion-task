export interface CompanyType {
  id: number; // Unique identifier
  name: string; // Company name
  employees: number; // Employees count
  date: number; // Unix timestamp
  images: {
    '32x32': string;
    '64x64': string;
    '100x100': string;
  }
}
