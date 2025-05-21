import Button from "./Button";
import SlideInContent from "../animations/SlideInContent";

export default function IntroScreen({ onStart }) {
  return (
    <SlideInContent distance={300} reverse={true}>
      <div className="flex justify-center items-center text-center w-screen h-screen">
        <div className="w-1/2 h-auto p-4 rounded-md border-4 border-zinc-100">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to Word Puzzle Popper!
          </h1>
          <p className="text-xl mb-4">
            Click on the correct words as they appear on the screen.
          </p>
          <Button onClick={onStart}>Play</Button>
        </div>
      </div>
    </SlideInContent>
  );
}
