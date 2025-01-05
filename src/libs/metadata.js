// lib/metadata.js

// Base metadata for the entire site - this serves as our default configuration
const baseMetadata = {
    title: {
      default: "OrientHeight | Global Citizenship & Residency Investment Experts",
      template: "%s | OrientHeight"
    },
    description: "Expert guidance for citizenship, residency & tax optimization programs. Nigerian-based global investment migration specialists.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://orientheight.com",
      siteName: "OrientHeight",
    }
  };
  
  // Metadata for main navigation pages
  const mainNavMetadata = {
    home: {
      title: "OrientHeight | Premier Investment Migration & Second Citizenship Specialists",
      description: "Secure your global mobility with expert citizenship and residency solutions. Nigeria's leading advisory firm for investment migration, golden visas, and tax optimization.",
    },
    citizenship: {
      title: "Citizenship by Investment Programs | Global Second Passport Solutions",
      description: "Expert guidance on premium citizenship programs worldwide. Secure visa-free travel to 160+ countries. Nigerian-based specialists in investment migration.",
    },
    residency: {
      title: "Global Residency Programs | Premium Investment Migration Solutions",
      description: "Strategic residency solutions in Europe, Americas & Asia. Expert guidance on Golden Visa programs from Nigeria's leading investment advisory firm.",
    },
    realEstate: {
      title: "International Real Estate Investment | Premium Global Properties",
      description: "Curated selection of premium real estate investments across Europe and Asia. Expert guidance on property investment for citizenship and residency programs.",
    },
    tax: {
      title: "International Tax Optimization | Strategic Planning Services",
      description: "Bespoke tax optimization solutions for high-net-worth individuals. Expert guidance on international tax planning and wealth preservation strategies.",
    },
    about: {
      title: "About OrientHeight | Your Trusted Investment Migration Partner",
      description: "Nigeria's premier investment migration advisory firm. Expertise in citizenship, residency, and tax optimization solutions for discerning clients.",
    },
    contact: {
      title: "Contact OrientHeight | Investment Migration Specialists",
      description: "Connect with Nigeria's leading investment migration experts. Professional guidance for citizenship, residency, and tax optimization programs.",
    },
    comparison: {
      title: "Compare Investment Migration Programs | Expert Analysis",
      description: "Comprehensive comparison of global citizenship and residency programs. Make informed decisions with expert guidance from Nigeria's leading advisory firm.",
    },
    services: {
      title: "Investment Migration Services | Comprehensive Solutions",
      description: "Complete range of investment migration services including citizenship, residency, real estate, and tax optimization. Expert guidance from Nigerian specialists.",
    }
  };
  
  // Static program metadata for fixed routes
  const staticProgramMetadata = {
    stKittsNevis: {
      title: "St. Kitts and Nevis Citizenship by Investment | Starting from $250,000",
      description: "Secure St. Kitts & Nevis citizenship in 4-6 months. Visa-free access to 166 countries, no residency requirements. Expert guidance from Nigeria's leading investment advisory.",
    },
    antiguaBarbuda: {
      title: "Antigua and Barbuda Citizenship by Investment | From $100,000",
      description: "Obtain Antigua citizenship with visa-free access to 161 countries. Real estate options from $200,000 or contribution from $100,000. Premium advisory services from Nigeria.",
    },
    maltaNaturalization: {
      title: "Malta Citizenship by Naturalization | Premium EU Passport",
      description: "Secure Maltese citizenship through naturalization. Access to EU benefits and visa-free travel to 180+ countries. Expert guidance from Nigerian specialists.",
    },
    turkiye: {
      title: "Turkish Citizenship by Investment | Real Estate from $400,000",
      description: "Obtain Turkish citizenship through real estate investment. Strategic location between Europe and Asia, visa-free travel to 110+ countries.",
    },
    uk: {
      title: "UK Tier 1 Investor Visa | Premium British Residency",
      description: "Secure UK residency through investment. Path to British citizenship, access to world-class education and healthcare. Expert guidance from Nigeria.",
    },
    italy: {
      title: "Italian Residency by Investment | European Lifestyle",
      description: "Obtain Italian residency through strategic investment. Access to EU benefits and path to citizenship. Professional guidance from Nigerian specialists.",
    },
    uae: {
      title: "UAE Golden Visa | Premium Middle East Residency",
      description: "Secure long-term UAE residency through investment. Tax-free lifestyle and global business hub access. Expert guidance from Nigerian advisors.",
    },
    usa: {
      title: "US EB-5 Investment Visa | American Dream",
      description: "Secure US permanent residency through EB-5 investment. Path to American citizenship and global opportunities. Expert guidance from Nigerian specialists.",
    }
  };
  
  // Dynamic program metadata generator
 

// lib/metadata.js
import { doc, getDoc } from 'firebase/firestore';
import { db } from "@/libs/firebase/clientApp";

async function generateProgramMetadata({ params, type }) {
  try {
    const programRef = doc(db, "services", type, "programs", params.id);
    const programSnapshot = await getDoc(programRef);

    if (programSnapshot.exists()) {
      const programData = programSnapshot.data();

      return {
        title: `${programData.name || params.id} ${type === 'citizenship' ? 'Citizenship' : 'Residency'} by Investment Program | OrientHeight`,
        description: `Secure ${programData.name || params.id} ${type === 'citizenship' ? 'citizenship' : 'residency'}${programData.processingTime ? ` in ${programData.processingTime}` : ''}. ${programData.visaFreeAccess ? `Visa-free access to ${programData.visaFreeAccess} countries.` : ''} Expert guidance from Nigeria's leading investment advisory.`,
        openGraph: {
          type: 'website',
          title: `${programData.name || params.id} Investment Program | OrientHeight`,
          description: `Secure your future with our ${programData.name || params.id} investment program. Professional guidance from Nigeria's leading investment migration firm.`,
          url: `https://orientheight.com/${type === 'citizenship' ? 'ohcitizenship' : 'ohresidency'}/${params.id}`,
          siteName: 'OrientHeight',
        }
      };
    }

    return {
      title: `${params.id.replace(/-/g, ' ')} Investment Program | OrientHeight`,
      description: `Learn about our ${params.id.replace(/-/g, ' ')} investment program. Expert citizenship and residency guidance from Nigeria's leading advisory firm.`,
      openGraph: {
        type: 'website',
        title: `${params.id.replace(/-/g, ' ')} Investment Program | OrientHeight`,
        description: `Learn about ${params.id.replace(/-/g, ' ')} investment opportunities with OrientHeight.`,
        url: `https://orientheight.com/${type === 'citizenship' ? 'ohcitizenship' : 'ohresidency'}/${params.id}`,
        siteName: 'OrientHeight',
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return baseMetadata;
  }
}

export {
  baseMetadata,
  mainNavMetadata,
  staticProgramMetadata,
  generateProgramMetadata
};
