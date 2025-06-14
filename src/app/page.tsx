import { Jumbotron } from "@/component/jumbotron";
import { Price } from "@/component/price";
import GoogleMapComponent from "@/component/address-map";
import BookConsultation from "@/component/book-consultation";
import { Introduce } from "@/component/introduce";
import { Reason } from "@/component/reason";
import { RealImages } from "@/component/real-images";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Reason />
      <Introduce />
      <Price />
      <BookConsultation />
      {/* <CustomerReview /> */}
      <GoogleMapComponent />
      <RealImages />
      <div className="fixed bottom-40 left-10 z-50 w-20 h-20">
        <style>
          {`
      @keyframes shake {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(0eg); }
        75% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }
    `}
        </style>
        <a
          href="https://zalo.me/0972224282"
          target="_blank"
          style={{ animation: "shake 0.5s infinite", display: "inline-block" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            viewBox="0 0 44 44"
            fill="#000"
          >
            <image
              href="https://w.ladicdn.com/ladiui/icons/social/zalo.svg"
              height="44"
              width="44"
            />
          </svg>
        </a>
        <a
          href="tel:0972224282"
          target="_blank"
          style={{ animation: "shake 0.5s infinite", display: "inline-block" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full mt-2"
            viewBox="0 0 32 32"
            fill="#000"
          >
            <image
              href="https://w.ladicdn.com/ladiui/icons/social/phone-call.svg"
              height="32"
              width="32"
            ></image>
          </svg>
        </a>
      </div>
    </div>
  );
}
