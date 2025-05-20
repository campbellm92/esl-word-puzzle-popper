import { useState } from "react";
import IntroScreen from "./IntroScreen";
import WordPuzzleGame from "./WordPuzzleGame";

export default function Game() {
  const [gameHasStarted, setGameHasStarted] = useState(false);

  return (
    <>
      {gameHasStarted ? (
        <WordPuzzleGame />
      ) : (
        <IntroScreen onStart={() => setGameHasStarted(true)} />
      )}
    </>
  );
}
