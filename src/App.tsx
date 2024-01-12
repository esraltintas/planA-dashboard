import { JSX, useState } from 'react';
import planaLogo from './assets/images/plana_logo.svg';
import './app.scss';

const Description = `Plan A helps companies monitor, reduce, and offset their carbon footprint,
  based on the data they input about their emissions. Though this gives individual companies visibility
  on their own emissions, it doesn't give us a clear idea on our progress on a country level. This task
  addresses the other side of the problem; using satellite data to estimate the amount of GHG emissions
  in the atmosphere over time to measure our actual impact.`;

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const handleClick = (): void =>
    setCount(count => count + 1);

  return (
    <>
      <article>
        <a href="https://plana.earth/" target="_blank">
          <img src={planaLogo} className="logo" alt="Plan A logo" aria-label="Plan A" />
        </a>
      </article>
      <h1><a href="https://plana.earth/" target="_blank">There is no Plan B</a></h1>
      <p>{Description}</p>
      <div className="card">
        <button onClick={handleClick}>
          Likes {count}
        </button>
      </div>
    </>
  );
};

export default App;
