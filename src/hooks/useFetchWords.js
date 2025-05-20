import { useState } from "react";

import { useEffect } from "react";

export default function useFetchWords(wordListPath) {
  const [words, setWords] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //   const MAX_WORDS = 6;
    async function fetchWords() {
      try {
        const response = await fetch(wordListPath);
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    }
    fetchWords();
  }, [wordListPath]);

  return { words };
}
