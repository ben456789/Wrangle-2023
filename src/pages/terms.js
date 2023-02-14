import HeroSmall from "@/components/banners/HeroSmall"
import TermsText from "@/text/terms/TermsText"
import BoostBanner from "@/components/banners/BoostBanner"
import MerchantLayout from "../components/layout/MerchantLayout"

export default function Terms() {
  return(
    <>
      <HeroSmall  
        title="Terms"
      />
      <TermsText  />
    </>
    
  )
}

Terms.getLayout = function getLayout(page) {
  return (
    <MerchantLayout>
    {page}
    </MerchantLayout>
  )
} 