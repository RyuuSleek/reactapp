import React from "react";
import "./App.css";
import discord from "./content/pictures/discord.png";
import insta from "./content/pictures/instagram.png";
import twit from "./content/pictures/twitter.png";
import locat from "./content/pictures/Location.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: "Home" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(page) {
    this.setState({ page: page });
  }

  render() {
    return (
      <>
        <HeaderTop onChange={this.handleChange} />
        <Container page={this.state.page} />
        <FooterBot />
      </>
    );
  }
}

class Container extends React.Component {
  render() {
    if (this.props.page === "Home") {
      return <Home />;
    } else if (this.props.page === "Visit") {
      return <Visit />;
    }
  }
}

function Visit() {
  return <p>Visit goes here!</p>;
}

function HeaderTop(props) {
  return (
    <div className="header">
      <div className="header-title">
        <button type="button" onClick={() => props.onChange("Home")}>
          Pizza Palace
        </button>
      </div>
      <div className="header-nav">
        <ul>
          <li>
            <button type="button" onClick={() => props.onChange("Visit")}>
              Visit
            </button>
          </li>
          <li>
            <button type="button" onClick={() => props.onChange("Menu")}>
              Menu
            </button>
          </li>
          <li>
            <button type="button" onClick={() => props.onChange("Premium")}>
              Premium
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

function FooterBot() {
  return (
    <div className="footer">
      <div className="contact">
        <h3 className="mr5">Contacts</h3>
        <ul>
          <li>RyuuSleek</li>
          <li>Kakkarot0</li>
        </ul>
      </div>
      <div className="socials">
        <h3 className="mr5">Social</h3>
        <ul>
          <li>
            <img src={discord} />
          </li>
          <li>
            <img src={insta} width="50" height="50" />
          </li>
          <li>
            <img src={twit} />
          </li>
        </ul>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="main-content">
        <p>
          A trendy new place to eat all kinds of foods. The idea behind this
          restaurant came when we considered the possibility of serving all
          kinds of food without limiting it to a set of people. This is why we
          have multiple different menus for different type of people and their
          preferences. We wanted a place that included everyone. So here we are.
        </p>
        <br />
        <p>Some new paragraph.</p>
      </div>
      <div className="side-content">
        <img src={locat} />
      </div>
    </div>
  );
}

function App() {
  return <Main />;
}

export default App;
