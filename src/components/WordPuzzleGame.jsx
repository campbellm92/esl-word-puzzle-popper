import WordTile from "./WordTile";
import useFetchWords from "../hooks/useFetchWords";

export default function WordPuzzleGame() {
  const { words } = useFetchWords("../../data/a1-words.json");
  console.log(words);
}
