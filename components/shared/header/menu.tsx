import Link from "next/link";
import { EllipsisVertical, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import UserButton from "./user-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = ({ session }: { session: any }) => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <UserButton session={session} />
      </nav>
      <nav className="md:hidden ">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription />
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <UserButton session={session} />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
