import MainLayout from "./layout/MainLayout";
import CardsLayout from "./layout/CardsLayout";
import PreviewCard from "./components/PreviewCard";
import iconSedan from "./components/svg/icon-sedans.svg";
import iconSuv from "./components/svg/icon-suvs.svg";
import iconLuxury from "./components/svg/icon-luxury.svg";

const content = [
  {
    icon: iconSedan,
    colour: "#E28625",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    title: "sedans",
  },
  {
    icon: iconSuv,
    colour: "#006971",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    title: "suvs",
  },
  {
    icon: iconLuxury,
    colour: "#004140",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
    title: "luxury",
  },
];

function App() {
  return (
    <MainLayout>
      <CardsLayout>
        {content.map((card) => (
          <PreviewCard
            title={card.title}
            icon={card.icon}
            text={card.text}
            colour={card.colour}
          />
        ))}
      </CardsLayout>
    </MainLayout>
  );
}

export default App;
