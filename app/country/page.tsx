// // app/country/page.tsx
import Link from 'next/link';
import { countries } from './data';
import { FC } from 'react';

const CountryList: FC = () => {
  return (
    <div className=' mt-20' >
    <div className="country-list" >
      <h6 className='font-extralight text-xs text-center'>Assignment By Nousheen Atif</h6>
      <h1>Country List</h1>
      <ul>
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey}>
            <Link href={`/country/${countryKey}`}>
              {countries[countryKey].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default CountryList;






















