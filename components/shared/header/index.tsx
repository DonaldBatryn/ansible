"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import { APP_NAME } from "@/lib/constants";
import { useTheme } from "next-themes";

const Header = ({ session }: { session: any }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src={
                theme === "light" || systemTheme === "light"
                  ? "/images/ansible-logo-light.png"
                  : "/images/ansible-logo-dark.png"
              }
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu session={session} />
      </div>
    </header>
  );
};

export default Header;
