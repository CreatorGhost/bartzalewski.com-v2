import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 100%;

  .navbar {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      font-family: "Grand Hotel";
      font-size: 36px;
      color: white;
      transition: 0.2s ease;
      text-shadow: 0px 0px 10px black;

      &:hover {
        color: #02d463;
        transition: 0.2s ease;
      }
    }

    &__link {
      margin-left: 20px;
      transition: 0.2s;
      text-shadow: 0px 0px 10px black;

      &:hover:not(.navbar__resume) {
        color: #02d463;
        transition: 0.2s;
      }
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <nav className="navbar__container container--secondary">
        <Link to="/" className="navbar__logo">
          Bart
        </Link>
        <div className="navbar__links">
          <a href="#about" className="navbar__link">
            About
          </a>
          <a href="#projects" className="navbar__link">
            Projects
          </a>
          <a href="#blog" className="navbar__link">
            Blog
          </a>
          <a href="#contact" className="navbar__link">
            Contact
          </a>
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link navbar__resume btn btn--secondary"
          >
            Resume
          </a>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header
