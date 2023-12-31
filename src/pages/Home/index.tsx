import { Stack } from "@mui/material";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import FoodDiscount from "../../components/FoodDiscount";
import HowWork from "../../components/HowWork";
import PopularItems from "../../components/PopularItems";
import Footer from "../../components/Footer";
import FeaturedRestaurants from "../../components/FeaturedRestaurants";
import FooterUp from "../../components/FooterUp";
import Deals from "../../components/Deals";

const Home = () => {
  return (
    <Stack>
      <Header />
      <Banner
        title="Are you starving?"
        subtitle="Within a few clicks, find meals that are accessible near you"
        isHomePage
      />
      <FoodDiscount />
      <HowWork />
      <PopularItems />
      <FeaturedRestaurants />
      <Deals/>
      <FooterUp />
      <Footer />
    </Stack>
  );
};

export default Home;
