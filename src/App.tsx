import { Chart } from "./components/chart";
import { Logo } from "./components/svg";
import { Divider } from "./components/ui";
import data from "./data/data.json";

const App = () => {
  return (
    <main className="main">
      {/* Balance */}
      <header className="header container rounded">
        <div className="header__texts">
          <h1 className="header__title">My balance</h1>
          <h2 className="header__balance">$921.48</h2>
        </div>
        <figure>
          <Logo />
        </figure>
      </header>

      {/* Card */}
      <section className="section container rounded">
        <h2 className="section__title">Spending - Last 7 days</h2>
        {/* Chart */}
        <Chart data={data} />
        {/* divider */}
        <Divider />
        <div className="section__texts">
          <div className="section__balance">
            <p className="paragraph">Total this month</p>
            <h2>$478.33</h2>
          </div>
          <div className="section__profit">
            <h4>+2.4%</h4>
            <p className="paragraph">from last month </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
