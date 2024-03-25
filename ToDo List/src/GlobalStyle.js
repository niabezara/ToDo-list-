import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #8758ff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.App {
  text-align: center;
}

h1 {
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
}
.fa-trash {
  margin-left: 0.75rem;
}
.strikethrough {
  text-decoration: line-through;
}

.checboxdoneIcon{
  background-image: url("/check.jpg");
  background-size:contain;
  z-index: 20;
  background-repeat: no-repeat;
  width: 20px;
  height:17px;
}
`;
