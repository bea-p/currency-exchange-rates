import styled from "styled-components";

export const FormWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-flow: row;
  }
`;

export const Input = styled.input`
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  margin: 0.3rem;
`;

export const Select = styled.select`
  border-radius: 0.5rem;
  padding: 0.3rem 0.5rem;
  margin: 0.3rem;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));

  @supports (font: -apple-system-body) and (-webkit-appearance: none) {
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

export const FormResult = styled.div`
  margin: 1rem;
  color: blue;
`;

export const Error = styled.div`
  margin-top: 1rem;
  color: red;
`;
