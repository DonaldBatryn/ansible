"use client";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const NotFoundPage = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src={
          theme === "light"
            ? "/images/ansible-logo.png"
            : "/images/ansible-logo-dark.png"
        }
        priority={true}
        alt={`${APP_NAME} logo`}
        height={48}
        width={48}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = "/")}
        >
          Return to {APP_NAME}
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
