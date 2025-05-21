import { useState } from "react";
import { useEffect } from "react";

export default function useFetchWords(wordListPath) {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWords() {
      setIsLoading(true);
      try {
        const response = await fetch(wordListPath);
        if (!response.ok) {
          throw new Error("Failed to fetch words");
        }
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWords();
  }, [wordListPath]);

  return { words, setWords, isLoading };
}
