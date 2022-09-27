import React from "react";
import "./App.css";
import discord from "./content/pictures/discord.png";
import insta from "./content/pictures/instagram.png";
import twit from "./content/pictures/twitter.png";
import locat from "./content/pictures/Location.png";

function HeaderTop() {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Pizza Palace</h1>{" "}
      </div>
      <div className="header-nav">
        <ul>
          <li>
            <button type="button" onclick="visit()">
              Visit
            </button>
          </li>
          <li>
            <button type="button" onclick="menu()">
              Menu
            </button>
          </li>
          <li>
            <button type="button" onclick="premium()">
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
    <div class="footer">
      <div class="contact">
        <h3 class="mr5">Contacts</h3>
        <ul>
          <li>RyuuSleek</li>
          <li>Kakkarot0</li>
        </ul>
      </div>
      <div class="socials">
        <h3 class="mr5">Social</h3>
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
    <div class="home-container">
      <div class="main-content">
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
      <div class="side-content">
        <img src={locat} />
      </div>
    </div>
  );
}

function Container() {
  return <Home />;
}

function App() {
  return (
    <div>
      <HeaderTop />
      <Container />
      <FooterBot />
    </div>
  );
}

export default App;
