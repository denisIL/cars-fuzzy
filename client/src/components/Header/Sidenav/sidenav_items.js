import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { connect } from "react-redux";

function SidenavItems({ user }) {
  const items = [
    {
      type: "navItem",
      icon: "home",
      text: "Home",
      link: "/",
      restricted: false,
    },
    {
      type: "navItem",
      icon: "plus",
      text: "Add car",
      link: "/car/add",
      restricted: true,
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Register",
      link: "/register",
      restricted: false,
      exclude: true,
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Login",
      link: "/login",
      restricted: false,
      exclude: true,
    },
    {
      type: "navItem",
      icon: "file-text-o",
      text: "Logout",
      link: "/logout",
      restricted: true,
    },
  ];

  const element = (item, i) => (
    <div key={i} className={item.type}>
      <Link to={item.link}>
        <FontAwesome name={item.icon} />
        {item.text}
      </Link>
    </div>
  );

  const showItems = () =>
    user.login
      ? items.map((item, i) => {
          if (user.login.isAuth) {
            return !item.exclude ? element(item, i) : null;
          } else {
            return !item.restricted ? element(item, i) : null;
          }
        })
      : null;
  return <div>{showItems()}</div>;
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(SidenavItems);
