import styled from "styled-components";

export const Container = styled.div`
padding: 20px;
`;

export const List = styled.ul`
list-style: none;
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
gap: 32px 32px;
`;