import { collection, getDocs } from 'firebase/firestore';
import { db } from "@/libs/firebase/clientApp";

import ProjectDetailsPrimary from './ProjectDetailsPrimary';

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