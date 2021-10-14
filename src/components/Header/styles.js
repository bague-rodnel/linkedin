import styled from "styled-components";

export const Wrapper = styled.div`
  .header {
    position: sticky;
    top: 0;
    z-index: 999;

    height: 52px;
    border-bottom: 0.1px solid lightgray;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .header__left {
    display: flex;
    align-items: center;
  }

  .header__logo {
    height: 40px;
    width: 40px;
    margin-right: 4px;
  }

  .header__logo svg {
    width: 100%;
    height: 100%;
    fill: var(--blue);
  }

  .header__search {
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 30px;
    color: gray;
    background: #eef3f8;
  }

  .header__search input {
    outline: none;
    border: none;
    background: none;
    padding-left: 8px;
  }

  .header__right {
    display: flex;
  }
`;
