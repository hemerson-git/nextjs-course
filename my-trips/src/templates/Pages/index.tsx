import { ReactNode } from 'react';
import { X } from 'phosphor-react';

import { LinkWrapper } from 'components/LinkWrapper';
import { Content, Heading, Body, Wrapper } from './styles';

export interface PageTemplateProps {
  heading: string;
  body: string;
}

export default function PageTemplate({ body, heading }: PageTemplateProps) {
  return (
    <Content>
      <Wrapper>
        <LinkWrapper href="/">
          <X size={24} />
        </LinkWrapper>

        <Heading>{heading}</Heading>

        <Body>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Body>
      </Wrapper>
    </Content>
  );
}
