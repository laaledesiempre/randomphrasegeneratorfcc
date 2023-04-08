import { useEffect, useState } from "react"
import {fetchAllPhrases} from "../store/slices/phrases"
import { useDispatch,useSelector } from "react-redux"
export const PhraseGen=()=>{
    const [isFetched,setIsFetched]=useState(false)  
    const store= useSelector(state => state.phrasesReducer.list) 
    const dispatch= useDispatch()
    useEffect (()=>{
        
        dispatch(fetchAllPhrases())
        
    },[dispatch])

  useEffect (()=>{
        if (typeof store==='object'){
        setIsFetched(true)}
        
        
    },[store])
    
    
    
    if (!isFetched) {return <h1>loading</h1>} else {return<>
            <div className="phrasegrid">
                <h1 className="title">Phrase Generator!</h1>
                <h2 className="prename">Created with love by <span className="myName">@laaledesiempre</span></h2>
                <h3 className="randomPhrase" id="randomPhrase">{store.quote}</h3>
                <h4 className="nameFromRandom" id="name">{store.author}</h4>
            </div>       
        </>}
}