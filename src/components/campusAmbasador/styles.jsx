import styled from 'styled-components';
import tw from 'twin.macro';

import { GalleryHeadingContainer } from '../gallery/styles';

const Container = styled.div`
  ${tw`relative flex flex-col items-center justify-between w-full max-w-7xl  mx-auto slg:flex-row mt-16 mb-10`}
`;

const ContentSection = styled.div`
  ${tw`flex flex-col w-full mb-8 space-y-4 
      sm:space-y-6 
       md:mb-0 
      slg:w-1/2 `}
`;

const Description = styled.p`
  ${tw`mb-4 text-lg font-semibold text-white leading-relaxed
      sm:mb-5 sm:text-2xl
      md:text-xl md:leading-[1.6]
      lg:text-[28px]
      xl:text-[32px] xl:leading-[1.73]`}
`;

const End = styled.p`
  ${tw`mb-4 text-[18px] text-center ssm:text-start md:text-[20px] text-[#FC952A] font-bold leading-[1.73] font-geist
  sm:mb-5`}
`;

const IllustrationSection = styled.div`
  ${tw`w-full pl-0 mt-6 sm:mb-3.5
      sm:mt-8 
      md:mt-0 md:pl-2
      slg:w-1/2 lg:pl-6 
      md:w-[70%]
      xl:pl-8`}
`;

const TitleContainer = styled(GalleryHeadingContainer)``;

const ItemContainer = styled.li`
  ${tw`flex items-center gap-2 py-4 sm:gap-4 md:gap-3`}
  align-self: stretch;
`;

const PointContainer = styled.div`
  ${tw`flex flex-wrap items-center sm:flex-nowrap md:flex-wrap lg:flex-nowrap`}
`;

const SvgIconContainer = styled.div`
  ${tw`flex-shrink-0 mr-2 sm:mr-4 md:mr-3 lg:mr-6`}
`;

const TextContainer = styled.div`
  ${tw`flex flex-col flex-1 min-w-0`}
`;

const Title = styled.p`
  ${tw`
  text-[#FC952A] font-satoshi truncate text-sm
      sm:text-base
      md:text-sm
      lg:text-base
      `}
`;

const Text = styled.p`
  ${tw`text-sm text-white font-satoshi sm:text-base md:text-sm lg:text-base`}
`;

const OuterCover = styled.div`
  ${tw`flex w-full  mt-8 justify-end
      lg:justify-end md:w-[95%]
      lg:w-[100%] 
      xl:w-[85%]
      2xl:w-[80%]
      lg:mr-8
      `}
`;

const InnerCover = styled.div`
  ${tw`ssm:ml-10 flex flex-col items-center sm:items-start justify-start`}
`;

export {
  Container,
  ContentSection,
  Description,
  End,
  IllustrationSection,
  InnerCover,
  ItemContainer,
  OuterCover,
  PointContainer,
  SvgIconContainer,
  Text,
  TextContainer,
  Title,
  TitleContainer,
};
