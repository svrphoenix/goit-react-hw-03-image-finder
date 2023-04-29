import styled from 'styled-components';
import { MoreButton } from '../Button/Button.styled';

// export const Backdrop = styled.div`
//   position: fixed;
//   z-index: 999;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   scroll-behavior: none;
//   background-color: rgba(0, 0, 0, 0.5);
// `;

// export const Content = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   min-height: 300px;
//   max-width: 600px;
//   width: 100%;
//   padding: 12px;
//   background-color: #fff;
//   border-radius: 3px;
//   box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
// `;

export const CloseButton = styled(MoreButton)`
  display: block;
  margin-top: 8px;
  background-color: #717274;
`;

export const Img = styled.img`
  width: 800px;
`;
