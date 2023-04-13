import { PhraseGen } from "./PhraseGen";
import $ from "jquery";
import { useEffect, useState } from "react";
import { fetchAllPhrases } from "../store/slices/phrases";
import { setpayload } from "../store/slices/fetch";
import { useDispatch, useSelector } from "react-redux";
export function Centerdiv() {
  const fetch = useSelector((state) => state.fetchReducer.fetchStatus);
  const store = useSelector((state) => state.phrasesReducer.list);
  const dispatch = useDispatch();
  const [buttonState, setButtonState] = useState(true);
  const [uriQuote, setUriQuote] = useState("");
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
      setUriQuote(encodeURI(store.quote))
      
      
      $("body").attr("class", classArray.currentclassname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetch]);//'classArray.currentclassname', 'classArray.palletes', and 'store.quote'

  return (
    <>
      <div className="centerdiv" id="quote-box">
        <PhraseGen />
      </div>
      <button id="new-quote"
        className="reloadbutton"
        onClick={changePhrase}
        disabled={buttonState}
      >
        New Quote!
      </button>
      <a className="tweetbutton" target="_blank" rel="noreferrer" href={"https://twitter.com/intent/tweet?text="+uriQuote} id="tweet-quote">Tweet this quote!</a>
    </>
  );
}
