import styled from "styled-components";

export const Container = styled.div`
width: 1280px;
padding: 20px;
margin-left:auto;
margin-right: auto;
`;

export const List = styled.ul`
list-style: none;
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
gap: 32px 32px;
`;