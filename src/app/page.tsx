import { Jumbotron } from "@/component/jumbotron";
import { Price } from "@/component/price";
import GoogleMapComponent from "@/component/address-map";
import BookConsultation from "@/component/book-consultation";
import { Introduce } from "@/component/introduce";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Introduce />
      <Price />
      <BookConsultation />
      <GoogleMapComponent />
    </div>
  );
}
