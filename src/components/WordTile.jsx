import ClickSpark from "../animations/ClickSpark";

export default function WordTile({
  children,
  onClick,
  isClicked = false,
  isCorrect = false,
}) {
  function getStyles() {
    if (isClicked) {
      return isCorrect ? "text-green-500" : "text-red-500";
    }
    return "text-zinc-700";
  }

  return (
    <>
      <ClickSpark
        sparkColor="oklch(72.3% 0.219 149.579)"
        sparkSize={40}
        duration={300}
      >
        <div
          className={`${getStyles()} text-center text-3xl font-semibold bg-zinc-200 w-full sm:w-auto h-auto p-4 rounded-md border-4 border-zinc-900 cursor-pointer`}
          onClick={() => onClick(children)}
        >
          {children}
        </div>
      </ClickSpark>
    </>
  );
}
