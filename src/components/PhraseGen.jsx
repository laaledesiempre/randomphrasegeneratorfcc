import { useEffect } from "react";
import { fetchAllPhrases } from "../store/slices/phrases";
import { setpayload } from "../store/slices/fetch";
import { useDispatch, useSelector } from "react-redux";
export const PhraseGen = () => {
  const store = useSelector((state) => state.phrasesReducer.list);
  const fetch = useSelector((state) => state.fetchReducer.fetchStatus);
  const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchAllPhrases());
    }, [dispatch]);

    useEffect(() => {
        if (typeof store === "object") {
        dispatch(setpayload(true));
        }
    }, [store]);

  if (!fetch) {
    return <h1>loading</h1>;
  } else {
    return (
      <>
        <div className="phrasegrid">
          <h1 className="title">Phrase Generator!</h1>
          <h2 className="prename">
            Created with love by <span className="myName">@laaledesiempre</span>
          </h2>
          <h3 className="randomPhrase" id="randomPhrase">
            {store.quote}
          </h3>
          <h4 className="nameFromRandom" id="name">
            {store.author}
          </h4>
        </div>
      </>
    );
  }
};
