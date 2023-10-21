import { Checkmark } from "react-checkmark";
import { useState, useEffect } from "react";
import waterSports from "../assets/water-sports.jpg";
import biking from "../assets/biking.jpg";
import adventure from "../assets/adventure-tourism.jpg";
import theater from "../assets/theater.jpg";
import historicSites from "../assets/heritage-sites.jpg";
import shopping from "../assets/shopping.jpg";
import dining from "../assets/culinary-travel.jpg";
import climbing from "../assets/climbing.jpg";
import views from "../assets/hotel-view.jpg";
import luxury from "../assets/luxury-hotel.jpeg";
import boutique from "../assets/boutique-hotel.jpg";
import pool from "../assets/pools.jpg";
import gym from "../assets/gym-fitness.jpg";

function CheckBoxCard(props) {
  const [clicked, setClicked] = useState(false);
  const [cardImage, setImage] = useState();

  useEffect(() => {
    const images = {
      "Beach / Water Sports": waterSports,
      Adventure: adventure,
      Biking: biking,
      "Music & Theater": theater,
      "Historical Sites": historicSites,
      "Fashion / Shopping": shopping,
      Dining: dining,
      Climbing: climbing,
      Views: views,
      Luxury: luxury,
      Boutique: boutique,
      Pool: pool,
      "Gym & Fitness": gym,
    };
    setImage(images[props.label]);
  }, [props.label]);

  const cardClicked = (e) => {
    setClicked(!clicked);
  };

  return (
    <div
      onClick={cardClicked}
      class="relative bg-white mx-4 my-4 rounded max-w-lg overflow-hidden shadow-lg transition ease-in-out delay-150 hover:scale-110 duration-300"
    >
      <div class="absolute bottom-4 right-2">
        {clicked ? <Checkmark size="large" /> : <p></p>}
      </div>
      <div class="w-60 h-52">
        <img
          class="object-cover w-full h-full md:object-scale-down"
          src={cardImage}
          alt=""
        />
      </div>
      <h1 class="text-lg font-bold">{props.label}</h1>
    </div>
  );
}

export default CheckBoxCard;
