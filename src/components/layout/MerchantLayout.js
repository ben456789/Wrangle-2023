import MerchantHeader from "../global/MerchantHeader"
import BoostBanner from "@/components/banners/BoostBanner"

export default function Layout({ children }) {
  return (
    <>
      <MerchantHeader />
      <main>{children}</main>
      <BoostBanner />
    </>
  )
}