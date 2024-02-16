import { GrRestaurant } from "react-icons/gr";
import pizza from "../../assets/pizza.png";

const Title = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "10rem",
        margin: "12px auto",
        gap: "24px",
        background: `url(${pizza}) no-repeat center center/cover`,
        backgroundSize: "cover",
        backgroundColor: "#242424",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px",
          margin: "12px",
          backgroundColor: "rgba(251,219,101,0.6)",
          borderRadius: "64px",
          textTransform: "uppercase",
          color: "white",
          // add text outline stroke
          WebkitTextStroke: "2px black",
        }}
      >
        <div>
          <GrRestaurant
            style={{
              fontSize: "4rem",
              color: "#3B3317",
            }}
          />
        </div>
        <h1>Chef&apos;s Choice Pizza</h1>
      </div>
    </div>
  );
};

export default Title;
