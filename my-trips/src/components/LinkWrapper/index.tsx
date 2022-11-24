import { AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { Wrapper } from './styles';

interface LinkWrapperProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function LinkWrapper({ children, href, ...rest }: LinkWrapperProps) {
  return (
    <Wrapper>
      <Link href={href} {...rest}>
        {children}
      </Link>
    </Wrapper>
  );
}
