import React from "react";

// export const Home = props => {
//   return <div>Hello from home {props.name}</div>;
// };

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      people: ["Justin", "Rob", "Tom BRady"]
    };
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        {this.state.people.map(person => (
          <p>{person}</p>
        ))}
      </div>
    );
  }
}
