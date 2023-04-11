import { PhraseGen } from "./PhraseGen";
import $ from "jquery";
import { useEffect, useState } from "react";
import { fetchAllPhrases } from "../store/slices/phrases";
import { setpayload } from "../store/slices/fetch";
import { useDispatch, useSelector } from "react-redux";
export function Centerdiv() {
  const fetch = useSelector((state) => state.fetchReducer.fetchStatus);
  const dispatch = useDispatch();
  const [buttonState, setButtonState] = useState(true);
  const [classArray,setClassArray] = useState({
    currentclassname: "",
    palletes: ["pastelpink", "twilightpallete", "deepgreen","freshlime","seriusgrapejuice","stragestsofter","neonmaster","winefun","visitmesa","eboy","summertime","telltell"],
  });
  const changePhrase = () => {
    setButtonState(true);
    dispatch(setpayload(false));
    dispatch(fetchAllPhrases());
  };
  useEffect(() => {
    if (fetch === true) {
      setButtonState(false);
      setClassArray({
        currentclassname: classArray.palletes.filter(
          (e) => e !== classArray.currentclassname
        )[Math.floor(Math.random() * (classArray.palletes.length - 1))],
    palletes: classArray.palletes,
      })
      
      
      $("body").attr("class", classArray.currentclassname);
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
