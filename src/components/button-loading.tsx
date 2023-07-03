import { Icons } from "./icons";
import { Button } from "@/components/ui/button";

export function ButtonLoading() {
  return (
    <Button disabled>
      <Icons.loading className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}
