export default function Home() {
  const homeHeading = ["S", "a", "m", "p", "l", "i", "c", "i", "t", "y"];

  const renderHeading = (heading: string[]) => {
    const headingElements = heading.map((letter, index) => (
      <span key={index} className="text-white text-5xl">
        {letter}
      </span>
    ));
    return headingElements;
  };

  return (
    <main className="h-screen">
      <div className="max-w-5xl mx-auto flex items-center h-full">
        <h1 className="text-5xl leading-tight font-semibold animate-bounce">
          {renderHeading(homeHeading)}, <br />
          high quality samples.
        </h1>
      </div>
    </main>
  );
}
