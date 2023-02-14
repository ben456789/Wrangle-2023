import HeroSmall from "@/components/banners/HeroSmall"
import PrivacyText from "@/text/privacy/PrivacyText"

import MerchantLayout from "../components/layout/MerchantLayout"

export default function Privacy() {
  return(
    <>
      <HeroSmall 
        title="Privacy Policy"
      />
      <PrivacyText />
    </>
    
  )
}


Privacy.getLayout = function getLayout(page) {
  return (
    <MerchantLayout>
      {page}
    </MerchantLayout>
  )
} 