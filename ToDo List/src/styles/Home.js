import styled from "styled-components";

export const Container = styled.div`
  background: #1a1a40;
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 5px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8758ff;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const SubContainer = styled.div`
  width: 100%;
`;

export const Checkbox = styled.div`
  width: 20px;
  height: 17px;
  background-color: ${(props) => (props.checked ? "white" : "white")};
  cursor: pointer;
  border-radius: 4px;
`;
