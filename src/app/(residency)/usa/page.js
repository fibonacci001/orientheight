import USAResidencyDetails from "./USAResidencyDetails";

import { staticProgramMetadata } from '@/libs/metadata'

export const metadata = staticProgramMetadata.usa


export default function Page() {
  return <USAResidencyDetails />;
}