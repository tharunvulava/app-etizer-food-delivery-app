import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/tharunvulava");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }
  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="w-14" src={avatar_url}></img>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:tharunvulava</h4>
      </div>
    );
  }
}
export default UserClass;
