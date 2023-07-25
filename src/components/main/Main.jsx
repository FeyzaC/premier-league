import "./Main.css";

const Main = (props) => {
  const { img, title, stadyum, capacity } = props;
  return (
    <div className="divCard">
      <img src={img} alt="logo" />
      <h2>Name: {title}</h2>
      <h4>Stadyum name: {stadyum}</h4>
      <p>Capacity: {capacity}</p>
    </div>
  );
};
export default Main;
