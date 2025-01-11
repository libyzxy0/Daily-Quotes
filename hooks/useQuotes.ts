import { useState, useEffect } from 'react'

type QuoteType = {
  quote: string;
  advice: string;
  author: string;
  image: string;
}

const getImage = async (keywords: string[]) => {
  try {
    const unsplashRes = await fetch(`https://api.unsplash.com/search/photos?query=${JSON.stringify(keywords)}&client_id=fBDcGsoT8rRHK6e92x83TgHOzHyHTJWmKCUlkn1NsAQ&per_page=1&orientation=landscape`);
    const imageData = await unsplashRes.json();
    return imageData.results[0].urls.regular;
  } catch(error) {
    console.log(error)
    return null
  }
}

export function useQuote() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quote, setQuote] = useState<QuoteType | null>(null);
  
  const getQuote = async (q?: string) => {
    try {
      setLoading(true)
      if(loading) return;
      
      const response = await fetch(`https://zenquotes.io/api/quotes`);
      const data = await response.json();
      
      const adviceResponse = await fetch(`https://api.joshweb.click/api/llama-3-70b?q=give%20me%20a%20supporting%20long parents style advice%20for%20this%20quote%20in%20a%20long%20sentence dont use too fancy words like embrace; store it json object also add keywords to search for bg cover unsplash based on that quote, only response PLAIN JSON OBJECT; DONT ADD ANY TEXT Dont add anytext because i will parse it as JavaScript object two keys only, advice and keywords:${encodeURIComponent(data[0].q)}`);
      
      const adviceData = await adviceResponse.json();
      
      const { advice, keywords } = JSON.parse(adviceData.result);
 
      const img = await getImage(keywords);
      
      setQuote({
        quote: data[0].q,
        author: data[0].a,
        advice: advice,
        image: img
      });
      setError(null);
    } catch (error: any) {
      setError(error);
      setQuote(null);
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    const fetchQ = () => {
      getQuote()
    };
    fetchQ()
  }, [])
  
  return { 
    getQuote,
    quote,
    loading,
    error
  }
}