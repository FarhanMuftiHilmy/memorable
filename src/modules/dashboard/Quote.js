import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Quote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("")
    const quoteAPI = async () => {
        let arrayOfQuotes = [];
        try{
            const data = await axios.get("http://api.quotable.io/random")
            arrayOfQuotes = data.data;
        } catch(error){
            console.log(error)
        }

        try{
            setQuote(arrayOfQuotes.content)
            setAuthor(arrayOfQuotes.author)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        quoteAPI();
    }, [])

    
  return (
    <div className="quotes">
        <div className="word">
            {quote}
        </div>
        <div className="author">
            {author}
        </div>
        <div class="d-flex justify-content-center">
            <a class="btn btn-secondary btn-xl text-center " onClick={quoteAPI}><i class="fas fa-redo-alt"></i></a>
        </div>
    </div>
  )
}
