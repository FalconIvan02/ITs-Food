import "./CardNexo.css";
import "../../assets/styles/CardMenu.css";

export const CardNexo = ({ title, image, isValid }) => {
  return (
    <article className="containerCarta">
      <div className="rectangleImg">
        <img className="menu--image" src={image} alt={title} />
      </div>
      <div className="textCardMenu">
        <div className="textMenu">
          {isValid && <span className="textCardMenu__its">IT'S</span>}
          <h3 className="textCardMenu__title">{title}</h3>
        </div>
      </div>
    </article>
  );
};
