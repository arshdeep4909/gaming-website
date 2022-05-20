import { relevantGamesURL } from "../api";

function Home() {
  const avvei = () => {
    console.log(relevantGamesURL());
  };
  return <div onClick={avvei}>Hello, hope is of the virtue</div>;
}

export default Home;
