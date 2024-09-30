// app/country/[country]/page.tsx
import { countries, Country } from '../data';
import Link from 'next/link';

interface CountryPageProps {
  params: {
    country: string;
  };
}

const CountryPage = ({ params }: CountryPageProps) => {
  const { country } = params;
  const countryData: Country | undefined = countries[country.toLowerCase()];

  if (!countryData) {
    return <h1>Country not found.</h1>;
  }

  return (
    <div className="country-col">
      <h6 className='font-extralight text-xs text-center'>Assignment By Nousheen Atif</h6>
      <h1>{countryData.name}</h1>
      <p>Population: {countryData.population}</p>
      <p>Capital: {countryData.capital}</p>

      <div className="navigation-buttons pb-8">
        <Link href="/country" className="button">Back to Country List</Link>
        {/* Add logic for the next/previous country if needed */}
      </div>
    </div>
  );
};

export default CountryPage;
