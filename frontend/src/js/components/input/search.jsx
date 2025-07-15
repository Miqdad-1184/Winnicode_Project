import React from 'react';
import styled from 'styled-components';

const Search = () => {
  return (
    <StyledWrapper>
      <div className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon search-icon">
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
        </svg>
        <input className="input" type="search" placeholder="Search" />
        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon close-icon">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;

  .group {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .input {
    width: 100%;
    height: 40px;
    padding: 0 2.5rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 25px;
    background-color: white;
    color: #0d0c22;
    outline: none;
    transition: 0.3s ease;
  }

  .icon {
    position: absolute;
    width: 1rem;
    height: 1rem;
    fill: #9e9ea7;
    cursor: pointer;
  }

  .search-icon {
    left: 1rem;
  }
`;

export default Search;
