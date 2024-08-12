import React from "react";
import ProductCars from "../../ProductCard/ProductCars";
import styles from "./Designers.module.css";
// import Card from "../home/Card";
import image1 from "../../../assets/videos/imagess 11.jpg";
import image2 from "../../../assets/videos/imagess 22.jpg";
import image3 from "../../../assets/videos/imagess 33.jpg";
import image4 from "../../../assets/videos/imagess 44.jpg";
import image5 from "../../../assets/videos/images 55.jpg";
import image6 from "../../../assets/images/devid goggins.webp";
import Card from "./card/Card";

const Designers = () => {
  const radius = 150;
  const cards = [
    {
      id: 1,
      imageSrc: image1,
    },
    { id: 2, imageSrc: image2 },
    { id: 3, imageSrc: image3 },
    { id: 4, imageSrc: image4 },
    { id: 5, imageSrc: image5 },
    { id: 6, imageSrc: image6 },
  ];

  return (
    <div className={styles.container}>
      <button className={styles.creativesButton}>
        over 3 million ready-to-work creatives
      </button>
      <p className={styles.destinationText}>
        <h1>
          The world’s destination <br /> for design
        </h1>
        <button className={styles.getStartedButton}>Get Started</button>
      </p>
      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            videoSrc={card.videoSrc}
            style={{
              transform: `rotate(${
                index * (360 / cards.length)
              }deg) translateX(${radius}px)`,
              margin: "0",
              position: "absolute",
            }}
          />
        ))}
      </div>
      <p className={styles.exploreText}>Explore inspiring designs</p>
      <ProductCars />
      <div className={styles.yellowRectangle}>
        <h1>
          Find your next
          <br /> designer today
        </h1>
        <p>
          The word's leading brands use Dribble to hire creative talent. <br />{" "}
          Browse millions of top-rated portfolios to find your perfect <br />
          creative match.
        </p>
        <div className={styles.buttonsContainer}>
          <button className={styles.getStartedButton}>Get Started Now</button>
          <button className={styles.learnAboutButton}>
            Learn About Hiring
          </button>
        </div>
      </div>
    </div>
  );
};

export default Designers;
