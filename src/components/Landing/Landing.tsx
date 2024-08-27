//Landing component
const Landing = () => {
  return (
    <div className="prose text-white max-w-[80ch] [&>h2]:font-bold [&>ul>li]:pl-4 [&>h3]:mt-5 [&>h3]:text-xl [&>h2]:text-2xl ">
      <h2 id="welcome-to-playground">Welcome to Playground</h2>
      <p className="mb-5">
        <strong>Showcasing Unique React UI Components</strong>
      </p>
      <p>
        Hi, I&#39;m Mohmd. Welcome to <strong>Playground</strong> – my
        personal portfolio where I share creative and innovative React UI
        components. Explore a variety of elements, each with detailed
        explanations and code snippets to inspire and educate.
      </p>
      <h3 id="what-you-ll-find">What You&#39;ll Find</h3>
      <ul>
        <li>
          <strong>Creative Components:</strong> Discover a range of unique React
          UI elements.
        </li>
        <li>
          <strong>Detailed Code:</strong> Each component includes comprehensive
          code and explanations.
        </li>
        <li>
          <strong>Personal Showcase:</strong> A glimpse into my skills and
          passion for UI development.
        </li>
      </ul>
      <h3 id="explore-and-enjoy">Explore and Enjoy</h3>
      <p>
        Browse, play, and get inspired. Welcome to my Playground – where
        creativity meets code.
      </p>
    </div>
  );
};

export default Landing;
