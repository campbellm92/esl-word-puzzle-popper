import { useState } from "react";
import { useEffect } from "react";
import { shuffleWordsArray } from "../utils/shuffleWordsArray";

export default function useFetchWords(wordListPath) {
  const [words, setWords] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAndPrepareWords() {
      try {
        const response = await fetch(wordListPath);
        const data = await response.json();
        const shuffledNouns = shuffleWordsArray(data.A1["n."]);
        const shuffledVerbs = shuffleWordsArray(data.A1["v."]);
        const shuffledAdjectives = shuffleWordsArray(data.A1["adj."]);

        const categories = [
          { name: "n.", words: shuffledNouns },
          { name: "v.", words: shuffledVerbs },
          { name: "adj.", words: shuffledAdjectives },
        ];

        const correctCategory =
          categories[Math.floor(Math.random() * categories.length)];

        const correctWords = correctCategory.words.slice(0, 5);

        const remainingCategories = categories.filter(
          (category) => category.name !== correctCategory.name
        );

        const incorrectCategory =
          remainingCategories[
            Math.floor(Math.random() * remainingCategories.length)
          ];

        const incorrectWord = incorrectCategory.words[0];

        const gameWordsArray = [...correctWords, incorrectWord];

        setWords(gameWordsArray);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    }
    fetchAndPrepareWords();
  }, [wordListPath]);

  return { words };
}
