import fs from 'fs';
import path from 'path';

const getPdfEntries = () => {
  const dataPath = path.join(process.cwd(), 'data', 'pdfs.json');
  if (!fs.existsSync(dataPath)) {
    return [];
  }

  try {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch (error) {
    return [];
  }
};

export default function sitemap() {
  const twoHoursAgo = new Date();
  twoHoursAgo.setHours(twoHoursAgo.getHours() - 0);
  const pdfs = getPdfEntries();
  const pdfUrls = pdfs.map((pdf) => ({
    url: new URL(pdf.url, 'https://aerocartrips.com').toString(),
    lastModified: pdf.uploadedAt ? new Date(pdf.uploadedAt) : twoHoursAgo,
    changeFrequency: 'monthly',
    priority: 1.0,
  }))

  return [
    {
      url: 'https://aerocartrips.com',
      lastModified: twoHoursAgo,
      changeFrequency: 'Weekly',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-airlines',
      lastModified: twoHoursAgo,
      changeFrequency: 'Weekly',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/how-to-book-sky-tickets-sky-airlines',
      lastModified: twoHoursAgo,
      changeFrequency: 'Weekly',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-airlines-faq',
      lastModified: twoHoursAgo,
      changeFrequency: 'Weekly',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-questions/how-to-cancel-a-sky-airline-flight-by-phone',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-questions/how-to-add-baggage-to-sky-airline-booking',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-questions/how-to-book-cheap-sky-airline-flights-by-phone',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-questions/how-to-book-family-travel-via-sky-airline-phone',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-questions/how-to-book-sky-airline-via-toll-free-number',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-questions/how-to-book-group-flights-by-phone',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-questions/how-to-book-last-minute-flights-sky-airline',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-questions/how-to-call-sky-airline-after-hours',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-questions/how-to-call-sky-airline-customer-service-usa',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/sky-airline-contact',
      lastModified: twoHoursAgo,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/favicon.ico',
      lastModified: twoHoursAgo,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/pdf',
      lastModified: twoHoursAgo,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://aerocartrips.com/upload-pdf',
      lastModified: twoHoursAgo,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: "https://aerocartrips.com/about",
      lastModified: twoHoursAgo,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...pdfUrls,
  ];
}
  
  