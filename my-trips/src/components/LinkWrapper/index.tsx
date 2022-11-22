import { AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { Wrapper } from './styles';

interface LinkWrapperProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function LinkWrapper({ children, href }: LinkWrapperProps) {
  return (
    <Wrapper>
      <Link href={href}>{children}</Link>
    </Wrapper>
  );
}
