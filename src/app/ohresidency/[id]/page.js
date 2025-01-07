import ResidencyDetailsPrimary from './ResidencyDetailsPrimary';
import { generateProgramMetadata } from '@/libs/metadata';

// Define known residency programs
const KNOWN_PROGRAMS = [
  { id: 'Cyprus' },
  { id: 'Egypt' },
  { id: 'Greece' },
  { id: 'Hungary' },
  { id: 'Malta' },
  { id: 'Italy' },
  { id: 'Portugal' },
  { id: 'Spain' },
  { id: 'UAE' },
  { id: 'USA' },
  { id: 'UnitedKingdom' }
];

export async function generateMetadata({ params }) {
  return generateProgramMetadata({ params, type: 'residency' });
}

// For production build, always return the static list
export function generateStaticParams() {
  return KNOWN_PROGRAMS;
}

export default function Page({ params }) {
  return <ResidencyDetailsPrimary params={params} />;
}
