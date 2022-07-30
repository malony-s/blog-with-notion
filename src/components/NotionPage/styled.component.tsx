import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

export const PageLink = ({
  href,
  ...others
}: PropsWithChildren<{ href: string }>) => {
  const { pathname, query } = useRouter();
  return (
    <Link
      href={{
        pathname: `${pathname}${href}`.replace("//", "/"),
        query: query,
      }}
      passHref
    >
      <a {...others} />
    </Link>
  );
};
