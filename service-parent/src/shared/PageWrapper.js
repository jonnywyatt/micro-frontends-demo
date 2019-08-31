import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 70%;
  margin: 50px 15%;
`;

const NavBar = styled.div`
  margin: 20px 0;
`;

export const PageWrapper = ({children}) => (
  <React.Fragment>
    <Wrapper>
      <NavBar>
        <Link to='/'>Overview</Link> | <Link to='/things-to-do'>Things to do</Link> | <Link to='/places-to-stay'>Places to stay</Link>
      </NavBar>
      { children }
    </Wrapper>
  </React.Fragment>
);
