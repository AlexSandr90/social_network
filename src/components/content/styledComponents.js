import styled from 'styled-components';

const ProfileHeadPic = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 200px;
    background: url('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500') 0 0 no-repeat;
    background-size: cover
`;

const ContentMain = styled.div `
   grid-area: content; 
`;

export {
    ContentMain,
    ProfileHeadPic
};
