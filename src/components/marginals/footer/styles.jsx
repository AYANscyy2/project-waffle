import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

import { Body1 } from '@/components/shared/typography/Body';

export const FooterContainer = styled(Body1)`
  ${tw`
  flex
  flex-row
  justify-between
  text-white
  p-4
  pb-8
  mt-12
  overflow-hidden
  h-full
  w-full
  z-50
  border-t-[1px]
  border-[#F6DFC2]
 
  `}

  @media (max-width: 800px) {
    ${tw`
    flex-col-reverse
    items-center
    justify-between
    `}
  }
`;

export const InitialCont = styled.div`
  ${tw`
  w-[70vw]
  flex
  flex-col
  justify-between		
  `}

  @media (max-width: 800px) {
    ${tw`
    w-full
    flex-row
    items-center
    justify-between
    `}
  }
`;

// Cradle Container
export const SecondPendulumContainer = styled.div`
  ${tw` 
  relative
  flex
  flex-col
  items-center
  justify-between
  w-[500px]
  text-white
  p-4
  `}
  @media (max-width: 800px) {
    ${tw`
    p-[0px]
    w-full
    h-[370px]
    `}
  }
`;

export const SocialText = styled.div`
  ${tw`
  absolute
  bottom-12
  left-0.5
  text-[#F6DFC2]
  text-lg
  text-center	
  w-full
  `}
`;

export const SocialsCont = styled.div`
  ${tw`
  flex
  flex-col
  justify-between
  `}
`;
export const CradleContainer = styled.div`
  ${tw`
  flex
  flex-row 
  items-center
  justify-center 
  w-full 
  h-auto 
  p-4
  mx-4
  pt-[100px]
  text-[16px]
  m-auto
  `}
  @media (max-width: 800px) {
    ${tw`
    w-full
    h-[300px]
    pt-[0px]
    `}
  }
  &:hover .ball {
    animation: none;
  }
`;

export const Ball = styled.div`
  transform-origin: 50% -200px;
  ${tw`
  flex
  flex-row 
  items-center
  justify-center
  relative
  text-black
  top-[100px]
  float-left
  w-[40px]
  h-[40px]
  bg-white
  rounded-full
  `}
  &::before {
    content: '';
    ${tw`
    bg-[#575757]
    block
    absolute
    h-[200px]
    w-[3px]
    top-[-200px]
    left-[19px]
    bg-[#575757]
    `}
  }

  @media (max-width: 800px) {
    ${tw`
    top-[80px]
    `}
  }

  &:hover {
    background: linear-gradient(91deg, #e84b7d 0.34%, #b02753 99.81%);
  }
`;

// Define keyframes
const ball1Animation = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(30deg);
  }
`;

const ball1Mob = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(15deg);
    background: linear-gradient(
    91deg,
     #e84b7d 0.34%,
     #b02753 99.81%
    );
  }
`;

const ball5Animation = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-30deg);
  }
`;

const ball5Mob = keyframes`
  0%, 50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-15deg);
    background: linear-gradient(
    91deg,
     #e84b7d 0.34%,
     #b02753 99.81%
    );
  }
`;

const ballColour = keyframes`
  0%, 50% {
    background: white;
  }
  100% {
    background: linear-gradient(
    91deg,
     #e84b7d 0.34%,
     #b02753 99.81%
    );
    
  }
`;

// Apply animations to specific elements
export const Ball1 = styled(Ball)`
  animation:
    ${ball1Animation} 1s infinite alternate,
    ${ballColour} 1s infinite alternate;
  @media (max-width: 600px) {
    animation: ${ball1Mob} 1s ease-out infinite alternate;
  }
  &:hover {
    animation: none;
  }
`;

export const Ball5 = styled(Ball)`
  animation:
    ${ball5Animation} 1s ease-out 1s infinite alternate,
    ${ballColour} 1s ease-out 1s infinite alternate;
  @media (max-width: 600px) {
    animation: ${ball5Mob} 1s ease-out 1s infinite alternate;
  }
  &:hover {
    animation: none;
  }
`;

// export const ImgCont = styled.img`
//   ${tw`
//   w-full
// `}
// `;

export const SocialLogo = styled.img`
  ${tw`
  w-[20px]
`}
`;

// About Container
export const FirstAboutContainer = styled.div`
  ${tw`
  text-white
  p-4

  `}
  @media (max-width: 600px) {
    ${tw`
    h-[250px]
    px-0
  `}
  }
`;

export const FirstRow = styled.div`
  ${tw`
  w-full
  flex
  flex-row
  justify-start	
  p-2
  `}
  @media (max-width: 800px) {
    ${tw`
    flex-col
    w-[50vw]
    mx-0
    `}
  }
  @media (max-width: 500px) {
    ${tw`
    flex-col
    w-[40vw]
    mx-0
    `}
  }
`;

export const FrItems = styled.a`
  ${tw`
  hover:text-[#b02753]
  text-white
  text-xl
  px-4
  py-6
`}
  @media (max-width: 1000px) {
    ${tw`
    px-2
    py-6
    `}
  }
`;

export const AboutBox = styled.div`
  ${tw`
    flex
    flex-row
    text-lg
    w-[55vw]
    mx-4
    my-4
    p-5
    bg-[#F6DFC2]
    border-r-8
    border-b-8
    border-[#AB2651]
    `}
  border-radius: 20px;
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 600px) {
    ${tw`
    w-[80vw]
    m-auto
    `}
  }
`;

export const Para = styled.div`
  ${tw`
    flex
    flex-col
    mx-5
        
    `}
`;
export const Content = styled.p`
  ${tw`
    my-5
    text-[#69645d]
    `}
`;

export const LogoCont = styled.div`
  ${tw`
  w-[250px]
`}
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  ${tw`
    w-full

  `}
  filter: brightness(0);
`;

// Terms and Credits
export const LastLine = styled.div`
  ${tw`
    text-[#A1A1A1]
    h-[50px]
    w-[60vw]
    flex
    flex-row
    justify-center
    items-center
    mx-2
    text-sm
  `}
  @media (max-width: 800px) {
    ${tw`
    pt-3
    gap-7
    w-full
    h-[250px]
    flex-col-reverse
    items-baseline
    `}
  }
  @media (max-width: 600px) {
    ${tw`
    h-[250px]
    flex-col-reverse
    items-baseline
    `}
  }
`;

export const Terms = styled.div`
  ${tw`
  flex
  flex-row
  justify-start	
  `}
  @media (max-width: 600px) {
    ${tw`
    flex-col
    items-baseline
    gap-2
    `}
  }
`;

export const ConditionItems = styled.a`
  ${tw`
  px-4
  py-6
`}
  @media (max-width: 800px) {
    ${tw`
    px-1
    py-4
    `}
  }
`;

export const Credits = styled.div`
  ${tw`
  mx-2
  px-8
  
  `}
  @media (max-width: 1000px) {
    ${tw`
    m-[0px]
    px-2
    `}
  }
`;

//   export const BackgroundWrapper = styled.div`
//     ${tw`
//     relative flex items-center justify-center w-full min-h-screen `}
//     background-attachment: relative;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;

// `;
