import { collection, getDocs } from 'firebase/firestore';
import { db } from "@/libs/firebase/clientApp";
import ResidencyDetailsPrimary from './ResidencyDetailsPrimary';
import { generateProgramMetadata } from '@/libs/metadata';

export async function generateMetadata({ params }) {
  // Ensure params are awaited before using
  const resolvedParams = await params;
  return generateProgramMetadata({ params: resolvedParams, type: 'residency' });
}

export async function generateStaticParams() {
  try {
    const programsRef = collection(db, "services", "residency", "programs");
    const snapshot = await getDocs(programsRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
    }));
  } catch (error) {
    console.error('Error generating params:', error);
    return [
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
      { id: 'UnitedKingdom' },
      // Add other known program IDs
    ];
  }
}

export default function Page({ params }) {
  return <ResidencyDetailsPrimary params={params} />;
}


