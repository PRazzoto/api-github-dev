import React from "react";

import PropTypes from "prop-types";

import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Login, Name, Avatar, Inner, Data } from "./styles";

function Profiles({ user }) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.followers}&nbsp; <i>followers</i>&nbsp; &middot; &nbsp;{" "}
          {user.following} &nbsp;
          <i>following</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20} /> {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <MdLocationCity size={20} /> {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <MdLink size={20} /> &nbsp;
            <a href={`\\${user.blog}`}>{user.blog}</a>
          </Data>
        )}
      </Inner>
    </Container>
  );
}

Profiles.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
export default Profiles;
