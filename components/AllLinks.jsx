'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AllLinks = () => {
  const pathname = usePathname();

  const pages = [
    { name: 'How to cancel sky flight by phone', url: '/sky-questions/how-to-cancel-a-sky-airline-flight-by-phone' },
    { name: 'How to add baggage sky airline', url: '/sky-questions/how-to-add-baggage-to-sky-airline-booking' },
    { name: 'How to book cheap sky airline', url: '/sky-questions/how-to-book-cheap-sky-airline-flights-by-phone' },
    { name: 'How to book family travel sky airline', url: '/sky-questions/how-to-book-family-travel-via-sky-airline-phone' },
    { name: 'How to book sky airline via toll free number', url: '/sky-questions/how-to-book-sky-airline-via-toll-free-number' },
    { name: 'How to book sky airline flight by phone', url: '/sky-questions/how-to-book-group-flights-by-phone' },
    { name: 'How to book last minute flight sky airline', url: '/sky-questions/how-to-book-last-minute-flights-sky-airline' },
    { name: 'How to call sky airline after hours', url: '/sky-questions/how-to-call-sky-airline-after-hours' },
    { name: 'How to call sky airline customer service usa', url: '/sky-questions/how-to-call-sky-airline-customer-service-usa' },


  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Find more</h2>

      <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4">
        {pages.map((page) => (
          <li key={page.url}>
            <Link
              href={page.url}
              className={`block px-4 py-2 rounded-md text-center transition-all duration-300 
                ${pathname === page.url 
                  ? 'bg-blue-600 text-white font-semibold' 
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white'}
              `}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllLinks;
