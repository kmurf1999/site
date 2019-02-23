import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { MdArrowForward } from 'react-icons/md';

import Button from '@components/Button';
import colors from '@styles/colors';
import Main from '../layouts/Main';
import profile_picture from '../static/profile_picture.jpg';

const AboutPageStyle = styled.div`
  padding: 20px 10px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .about-page-picture {
    border-radius: 50%;
    border: 3px solid ${colors.navy};
    width: 200px;
    height: 200px;
    margin-bottom: 16px;
  }

  > button {
    margin-top: 16px;
  }

  .about-page-hr {
    width: 150px;
    height: 2px;
    background: ${colors.darkGray};
    margin-bottom: 16px;
  }

  .about-page-p {
    vertical-align: middle;
    max-width: 450px;
    > strong { font-weight: bold; }
  }
`;



const AboutPage = () => (
  <Main>
    <AboutPageStyle>
      <img className="about-page-picture" alt="me" src={profile_picture}/>
      <h1>
        About Me
      </h1>
      <div className="about-page-hr"/>
      <p className="about-page-p">
        {"Hi, I'm Kyle."}
      </p>
      <p className="about-page-p">
        I'm a sophomore computer science student currently based in Tempe, Arizona with
        freelance experience doing fullstack web development.
      </p>
      <p className="about-page-p">
        I enjoy doing fullstack development because I get to exercise my artistic ability on the
        front-end by designing aesthetic and function UI, while applying my coding knowledge on
        the backend.
      </p>
      <p className="about-page-p">
        I'm most familiar with
        <strong>
          { ' React.js ' }
        </strong>
        and
        <strong>
          {' Node.js '}
        </strong>
        and associated technologies like
        <strong>
          {' Redux '}
        </strong>
        and
        <strong>
          {' Webpack'}
        </strong>
        , just to name a few.
      </p>
      <Button
        onClick={() => Router.push('/contact')}
        color={colors.darkGray}
        width="150px"
      >
        Contact Me
        <MdArrowForward />
      </Button>
    </AboutPageStyle>
  </Main>
);

export default AboutPage;
