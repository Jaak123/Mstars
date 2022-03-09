const players = [
  {
    name: "jaki",
    score: 30,
    id: 1,
  },
  {
    name: "Bold",
    score: 40,
    id: 2,
  },
  {
    name: "Maral",
    score: 20,
    id: 3,
  },
  {
    name: "Munkh",
    score: 50,
    id: 4,
  },
  {
    name: "Dorj",
    score: 10,
    id: 5,
  },
];

const Player = (props) => {
  console.log(props);
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter score={props.score} />
    </div>
  );
};
const Header = (props) => {
  //   console.log(props);
  return (
    <header>
      <h1>{props.name}</h1>
      <div className="stats">Players: {props.totalplayer}</div>
    </header>
  );
};

class Counter extends React.Component {
  state = {
    score: this.props.score,
  };

  incrementScore = () => {
    // console.log("increment score");
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };
  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  };
  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}
class App extends React.Component {
  state = {
    players: [
      {
        name: "jaki",
        score: 30,
        id: 1,
      },
      {
        name: "Bold",
        score: 40,
        id: 2,
      },
      {
        name: "Maral",
        score: 20,
        id: 3,
      },
      {
        name: "Munkh",
        score: 50,
        id: 4,
      },
      {
        name: "Dorj",
        score: 10,
        id: 5,
      },
    ],
  };

  render() {
    return (
      <div>
        <Header name="Scoreboard" totalplayer={this.state.players.lenght} />
        {this.state.players.map((player) => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            total
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
