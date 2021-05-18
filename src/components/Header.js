import styled from "styled-components";

export default function Header() {
    return <TopBar></TopBar>;
}

const TopBar = styled.header`
    width: 100%;
    height: 70px;
    background: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;