import Card from "@/components/Card/Card";
import HomePicture from "@/components/Home/HomePicture";
import OfferCardsHomePage from "@/components/OfferCardsHomePage/OfferCardsHomePage";
import AboutUsHome from "@/components/Home/aboutUsHome/AboutUsHome";
import SuggestionCarts from "@/components/Home/suggestionCart/SuggestionCarts";
import Accessories from "@/components/accessoriesHome/Accessories";
import TrustFooter from "@/components/footer/TrustFooter";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="homeContainer">
      <HomePicture />
      <AboutUsHome />
      <OfferCardsHomePage />
      <Accessories />
      <SuggestionCarts />
      <Footer />
    </div>
  );
}
