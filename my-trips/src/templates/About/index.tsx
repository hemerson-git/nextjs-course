import { ReactNode } from 'react';
import { X } from 'phosphor-react';

import { LinkWrapper } from 'components/LinkWrapper';
import { Content, Heading, Body } from './styles';

interface AboutTemplateProps {
  children: ReactNode;
}

export default function AboutTemplate({}: AboutTemplateProps) {
  return (
    <Content>
      <LinkWrapper href="/">
        <X size={24} />
      </LinkWrapper>

      <Heading>My Trips</Heading>

      <Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          ducimus facilis aut blanditiis voluptate obcaecati, nesciunt explicabo
          quas veritatis praesentium aperiam? Corrupti mollitia laboriosam
          dignissimos atque veritatis qui dolor. Suscipit!
        </p>
      </Body>
    </Content>
  );
}
