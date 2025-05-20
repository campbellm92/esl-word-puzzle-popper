import WordTile from "./WordTile";
import useFetchWords from "../hooks/useFetchWords";

export default function WordPuzzleGame() {
  const { words } = useFetchWords("../../data/a1-words.json");

  console.log("words:", words);

  return (
    <div className="flex flex-col md:flex-row gap-2">
      {Array.isArray(words) &&
        words.map((word, index) => <WordTile key={index}>{word}</WordTile>)}
    </div>
  );
}
