import "../assets/styles/CardNexo.css";
function CardNexo(props) {
    return (
        <div className="containerCarta">
            <div className="rectangleImg">
                <img src={props.menuImg} alt="" />
            </div>
            <div className="textCardMenu">
                <section className="textMenu">
                    <span>IT'S</span>
                    <h3>{props.menuName}</h3>
                </section>
            </div>
        </div>
    );
}
export default CardNexo;
