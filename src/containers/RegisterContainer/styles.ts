import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LinksArea = styled.div`
  margin-top: 10px;
  text-align: center;

  p {
    margin: 5px 0;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
