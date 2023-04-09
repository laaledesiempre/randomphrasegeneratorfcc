import { PhraseGen } from "./PhraseGen";
import { useEffect, useState } from "react";
import { fetchAllPhrases } from "../store/slices/phrases";
import { setpayload } from "../store/slices/fetch";
import { useDispatch, useSelector } from "react-redux";
export function Centerdiv() {
  const fetch = useSelector((state) => state.fetchReducer.fetchStatus);
  const dispatch = useDispatch();
  const [buttonState, setButtonState] = useState(true);

  const changePhrase = () => {
    setButtonState(true);
    dispatch(setpayload(false));
    dispatch(fetchAllPhrases());
  };
  useEffect(() => {
    if (fetch === true) {
      setButtonState(false);
    }
  }, [fetch]);

  return (
    <>
      <div className="centerdiv">
        <PhraseGen />
      </div>
      <button
        className="reloadbutton"
        onClick={changePhrase}
        disabled={buttonState}
      >
        Push me!
      </button>
    </>
  );
}
