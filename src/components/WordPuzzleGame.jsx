import WordTile from "./WordTile";
import SlideInContent from "../animations/SlideInContent";
import Button from "./Button";
import { useState } from "react";
import usePrepareRounds from "../hooks/usePrepareRounds";

export default function WordPuzzleGame() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [clickedCorrectWords, setClickedCorrectWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState();
  const [feedback, setFeedback] = useState("");
  const [gameCompleted, setGameCompleted] = useState(false);

  const { gameWords, categoryName, correctWords, isLoading } = usePrepareRounds(
    "../../data/a1-words.json",
    round
  );

  const TOTAL_ROUNDS = 10;

  function handleWordChoice(word) {
    setSelectedWord(word);
    if (correctWords.includes(word)) {
      if (!clickedCorrectWords.includes(word)) {
        const updatedCorrectWordsArray = [...clickedCorrectWords, word];
        setClickedCorrectWords(updatedCorrectWordsArray);
        if (updatedCorrectWordsArray.length === correctWords.length) {
          setScore(score + 1);
          setFeedback("Well done! All correct words were found!");
          setTimeout(() => handleGoToNextRound(), 1500);
        } else {
          setFeedback("Correct! Keep going!");
        }
      }
    } else {
      setFeedback("Try again!");
      setTimeout(() => handleGoToNextRound(), 1500);
    }
  }

  function handleGoToNextRound() {
    if (round >= TOTAL_ROUNDS) {
      setGameCompleted(true);
    } else {
      setRound((prevRound) => prevRound + 1);
      setClickedCorrectWords([]);
      setSelectedWord(null);
      setFeedback("");
    }
  }

  function handleResetGame() {
    setRound(1);
    setScore(0);
    setClickedCorrectWords([]);
    setSelectedWord(null);
    setFeedback("");
    setGameCompleted(false);
  }

  function isWordClicked(word) {
    return clickedCorrectWords.includes(word) || word === selectedWord;
  }

  function isWordCorrect(word) {
    return correctWords.includes(word);
  }

  if (gameCompleted) {
    return (
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-3xl font-semibold mb-6">Game Completed!</h1>
        <p className="text-xl mb-8">
          Your final score: {score} out of {TOTAL_ROUNDS}
        </p>
        <Button onClick={handleResetGame}>Play Again</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <p className="mb-10 p-4 text-lg md:text-2xl text-center">
            {`Find the five ${categoryName}!`}
          </p>

          <SlideInContent key={round} distance={300}>
            <div className="grid grid-cols-2 grid-rows-3 md:flex md:flex-row justify-center gap-4 px-4 mb-10">
              {Array.isArray(gameWords) &&
                gameWords.map((word, index) => (
                  <WordTile
                    key={index}
                    onClick={() => handleWordChoice(word)}
                    isClicked={isWordClicked(word)}
                    isCorrect={isWordCorrect(word)}
                  >
                    {word}
                  </WordTile>
                ))}
            </div>
          </SlideInContent>
          <div className="flex flex-col">
            <p>
              Round: {round}/{TOTAL_ROUNDS}
            </p>
            <p>Score: {score}</p>
          </div>
          {feedback && <div className="text-lg">{feedback}</div>}
        </>
      )}
    </div>
  );
}
