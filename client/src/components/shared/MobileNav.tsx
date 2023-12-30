import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FiMenu } from "react-icons/fi"

const MobileNav = () => {
  return (
    <nav className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <span className="cursor-pointer">
            <FiMenu />
          </span>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
