export interface Country {
  name: string;
  population: string;
  capital: string;
}

export const countries: Record<string, Country> = {
  canada: { name: "Pakistan", population: "241  million", capital: " Islamabad" },
  usa: { name:     " United States", population: "331 million", capital: "Washington, D.C." },
  germany: { name: " Germany", population: "83 million", capital: "Berlin" },
  australia: { name: "Australia", population: "25 million", capital: "Canberra" },
  japan: { name:    " Japan", population: "125 million", capital: "Tokyo" }
};
