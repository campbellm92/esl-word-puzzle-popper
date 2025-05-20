import Button from "./Button";
import SlideInContent from "../animations/SlideInContent";

export default function IntroScreen() {
  return (
    <SlideInContent distance={300} reverse={true}>
      <div className="flex justify-center text-center w-screen h-auto">
        <div className="w-1/2 h-auto p-4 rounded-md border-4 border-zinc-100">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to Word Puzzle Popper!
          </h1>
          <p className="text-xl mb-4">
            Click on the correct words as they appear on the screen.
          </p>
          <Button>New Game</Button>
        </div>
      </div>
    </SlideInContent>
  );
}
