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
    } else if (this.props.page === "Menu") {
      return <Menu />;
    }
  }
}

function Visit() {
  return (
    <div className="Reservation">
      <button
        type="button"
        title="This does not gurantee seats. It's applicable on the people at the moment."
      >
        Apply
      </button>
    </div>
  );
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_focused: false,
      menu: [],
    };
    this.info = {};
  }

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => this.setState({ menu: data }));
  }

  render_element() {
    return (
      <>
        {this.state.menu.map((row) => (
          <MenuEle
            title={row.title}
            description={row.description}
            image="https://via.placeholder.com/640x360/"
            onClick={() => this.handleClick(row)}
          />
        ))}
      </>
    );
  }

  handleClick(info) {
    this.info = {
      title: info.title,
      description: info.description,
      image: "https://via.placeholder.com/640x360/",
    };
    this.setState({ is_focused: true });
  }

  exit() {
    this.setState({ is_focused: false });
  }

  render() {
    if (this.state.is_focused) {
      return (
        <div className="Menu">
          {this.render_element()}
          <MenuEleFocused info={this.info} exit={() => this.exit()} />
        </div>
      );
    } else {
      return <div className="Menu">{this.render_element()}</div>;
    }
  }
}

class MenuEle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MenuEle" onClick={() => this.props.onClick()}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

function MenuEleFocused(props) {
  return (
    <div className="MenuEle-focused">
      <div className="focused-detail">
        <div className="focused-image">
          <img src={props.info.image} />
        </div>
        <div className="focused-description">
          <h3>{props.info.title}</h3>
          <p>{props.info.description}</p>
        </div>
      </div>
      <button className="exit" onClick={() => props.exit()}>
        Exit
      </button>
    </div>
  );
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

async function getMenu() {
  let data = await fetch("/users").then((response) => response.json());
  return data;
}

function App() {
  return <Main />;
}

export default App;
