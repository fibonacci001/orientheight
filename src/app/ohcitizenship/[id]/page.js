import { collection, getDocs } from 'firebase/firestore';
import { db } from "@/libs/firebase/clientApp";
import ProjectDetailsPrimary from './ProjectDetailsPrimary';
import { generateProgramMetadata } from '@/libs/metadata';

// Fix 1: Update generateMetadata to handle the correct params
export async function generateMetadata({ params }) {
  // Ensure params are awaited before using
  const resolvedParams = await params;
  return generateProgramMetadata({ params: resolvedParams, type: 'citizenship' });
}

export async function generateStaticParams() {
  try {
    const programsRef = collection(db, "services", "citizenship", "programs");
    const snapshot = await getDocs(programsRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
    }));
  } catch (error) {
    console.error('Error generating params:', error);
    return [
      { id: 'Antigua' },
      { id: 'Grenada' },
      { id: 'stkitts' },
      { id: 'Dominica' },
      { id: 'Malta' },
      { id: 'St_Lucia' },
      { id: 'Turkiye' },
      { id: 'Vanuatu' },
      // Add other known program IDs
    ];
  }
}

export default function Page({ params }) {
  return <ProjectDetailsPrimary params={params} />;
}
