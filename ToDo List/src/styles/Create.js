import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  outline: none;
  background: none;
  border: 1px solid #8758ff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 300px;
  color: #fff;
  &::placeholder {
    color: #ffffff4d;
  }
`;

export const ToDoBtn = styled.button`
  background: #8758ff;
  color: #fff;
  border: none;
  padding: 0.55rem;
  cursor: pointer;
`;
