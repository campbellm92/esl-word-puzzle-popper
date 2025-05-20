import ClickSpark from "../animations/ClickSpark";

export default function WordTile() {
  return (
    <>
      <ClickSpark
        sparkColor="oklch(72.3% 0.219 149.579)"
        sparkSize={20}
        duration={600}
      >
        <div className="text-center bg-zinc-200 w-fit h-auto p-4 rounded-md border-4 border-zinc-900 cursor-pointer">
          <p className="text-zinc-700 text-3xl font-semibold">Word</p>
        </div>
      </ClickSpark>
    </>
  );
}
