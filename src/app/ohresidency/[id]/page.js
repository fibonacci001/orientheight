import { collection, getDocs } from 'firebase/firestore';
import { db } from "@/libs/firebase/clientApp";

import ResidencyDetailsPrimary from './ResidencyDetailsPrimary';

export async function generateStaticParams() {
  try {
    const programsRef = collection(db, "services", "Residency", "programs");
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
     
      
      
    ];
  }
}

export default function Page({ params }) {
  return <ResidencyDetailsPrimary params={params} />;
}