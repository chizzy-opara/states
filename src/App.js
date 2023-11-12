import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Chizzy",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "/icon-5887113_1280.png",
        profession: "Software Developer",
      },
      show: false,
      mountTime: null,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.setState({ mountTime: new Date() });

    this.intervalId = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div>
        <h1>React States Checkpoint</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img
              style={{ width: "200px", height: "200px" }}
              src={person.imgSrc}
              alt={person.fullName}
            />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        {mountTime && (
          <p>
            Time since mount: {Math.floor((new Date() - mountTime) / 1000)}{" "}
            seconds
          </p>
        )}
      </div>
    );
  }
}

export default App;
