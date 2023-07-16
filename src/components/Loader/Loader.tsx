import s from "./Loader.module.scss";

const Loader = () => {
  const counter = ["one", "two", "three", "four", "five"];

  return (
    <div style={{ color: "white" }} className={s.loader}>
      <div className={s.box}>
        <ul>
          {counter.map((el, id) => (
            <li key={id}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Loader;
