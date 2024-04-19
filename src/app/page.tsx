import { Button } from "@/components/ui/button";
import { Button as ButtonPoc } from "@/components/ui/button-poc";
import { ModeToggle } from "@/components/mode-toggle";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 p-24">
      <ModeToggle />
      <div className="flex gap-4">
        <Button>Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
      <div className="flex gap-4">
        <ButtonPoc>Contained</ButtonPoc>
        <ButtonPoc variant="outlined">Outlined</ButtonPoc>
        <ButtonPoc variant="text">Text</ButtonPoc>
      </div>
    </main>
  );
}
