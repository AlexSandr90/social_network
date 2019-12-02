import styled from 'styled-components';

const SidebarMain = styled.div`
    grid-area: nav;
    background-color: #2bff25;
    height: 100vh;
`;
const SidebarMainLink = styled.a`
    text-decoration: none;
    color: #fff;
    line-height: 1.5;
`;
const SidebarMainList = styled.li`
    list-style-type: none;
`;
const SidebarMainListLastChild = styled.li`
    list-style-type: none;
    margin-top: .5rem
`;
const SidebarMainNav = styled.nav``;
const SidebarMainNavItems = styled.ul``;

export {
    SidebarMain,
    SidebarMainNav,
    SidebarMainLink,
    SidebarMainList,
    SidebarMainNavItems,
    SidebarMainListLastChild
};
