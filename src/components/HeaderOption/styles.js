import styled from "styled-components";

export const Wrapper = styled.div`
  .headerOption {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    color: gray;
    cursor: pointer;
  }

  .headerOption:hover {
    color: black;
  }

  .headerOption__icon {
    height: 24px;
    width: 24px;
  }
  .headerOption__title {
    font-size: 11px;
    font-weight: 400;
  }
`;
