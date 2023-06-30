import Link from "next/link";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
  padding: 20px 0 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  border: solid 2px gray;
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #444;
`;

export default function Navigation() {
  return (
    <Container>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Pieces</StyledLink>
    </Container>
  );
}
