import { ScrollView, View } from "react-native";
import HeaderMain from "../../components/header-main/indext";
import BannerCarousel from "../../components/banner-carousel";
import Categories from "../../components/categories";

function HomeScreen() {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <HeaderMain />
      <BannerCarousel />
      <Categories />
    </ScrollView>
  );
}

export default HomeScreen;
