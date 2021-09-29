import { useDispatch, useSelector } from "react-redux";
import { somar, subtrair } from "../../store/modules/counter/actions";

export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleSomar = () => {
    return dispatch(somar(1));
  };
  const handleSubtrair = () => {
    return dispatch(subtrair(1));
  };

  return (
    <div>
      <div>
        <div>{counter}</div>
        <div>
          <button onClick={handleSomar}>+</button>
          <button onClick={handleSubtrair}>-</button>
        </div>
      </div>
    </div>
  );
};
