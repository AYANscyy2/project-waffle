import React from 'react';

import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';

import { DICKLET, DISCORD } from '@/config/content/typgraphy';

const ButtonWrapper = styled.div`
  ${tw`relative inline-block`}
`;

const BackLayer = styled.div`
  ${tw`absolute -bottom-2 right-2 rounded-[0.6rem]`}
  background: ${({ gradient }) => gradient};
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    -bottom: 1.5px;
    right: 1.5px;
  }
`;

const FrontLayer = styled.button`
  ${tw`relative rounded-[0.6rem] font-poppins font-semibold flex items-center justify-center duration-200 overflow-hidden`}
  background: ${({ gradient }) => gradient};
  color: ${({ color }) => color};
  border: ${({ border }) => border || 'none'};
  min-width: 200px;
  min-height: 60px;
  padding: 1rem 1.2rem;

  &:active {
    ${tw`transform -translate-x-2 translate-y-2`}
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    min-width: 160px;
    min-height: 50px;
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
`;

const IconWrapper = styled.div`
  ${({ centered }) => (centered ? tw`mr-2` : tw`absolute`)};
  ${({ position, centered }) => !centered && position};
  padding: 0rem;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const ContentWrapper = styled.div`
  ${tw`flex items-center justify-center`}/* No specific mobile adjustments needed here unless required */
`;

const Button = ({ text, onClick, icon, gradients, color, border, iconPosition, centerIcon }) => {
  const { backLayerGradient, frontLayerGradient } = gradients;

  const content = (
    <>
      {icon && (
        <IconWrapper position={iconPosition} centered={centerIcon}>
          <Image src={icon} alt={text} width={30} height={30} />
        </IconWrapper>
      )}
      {text}
    </>
  );

  return (
    <ButtonWrapper>
      <BackLayer gradient={backLayerGradient} />
      <FrontLayer onClick={onClick} gradient={frontLayerGradient} color={color} border={border}>
        {centerIcon ? <ContentWrapper>{content}</ContentWrapper> : content}
      </FrontLayer>
    </ButtonWrapper>
  );
};

const PrimaryButton = ({ text = 'Click Me!', onClick }) => {
  return (
    <Button
      text={text}
      onClick={onClick}
      icon={DICKLET}
      gradients={{
        backLayerGradient: 'linear-gradient(99deg, #f4e7d6 1.92%, #f6dcba 98.13%)',
        frontLayerGradient: 'linear-gradient(91deg, #e84b7d 0.34%, #b02753 99.81%)',
      }}
      color='linear-gradient(99deg, #f4e7d6 1.92%, #f6dcba 98.13%)'
      iconPosition='bottom: -10px; left: -7.5px;'
      centerIcon={false}
    />
  );
};

const DiscordButton = ({ text = 'Discord', onClick }) => {
  return (
    <Button
      text={text}
      onClick={onClick}
      icon={DISCORD}
      gradients={{
        backLayerGradient: 'linear-gradient(91deg, #E84B7D 0.34%, #B02753 99.81%)',
        frontLayerGradient: 'linear-gradient(99deg, #f4e7d6 1.92%, #f6dcba 98.13%)',
      }}
      color='#b92d5a'
      border='1.2px solid rgba(0, 0, 0, 0.09)'
      centerIcon={true}
    />
  );
};

export { DiscordButton, PrimaryButton };
