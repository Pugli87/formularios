import { styled } from "styled-components";

export const Contain = styled.div`
  //display: flex;
  //flex-direction:column;
  max-width: 280px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 320px) {
    max-width: 767px;
  }

  @media (min-width: 768px) {
    max-width: 1279px;
  }
  `;