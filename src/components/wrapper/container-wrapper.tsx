/**
 * Wrapper for the container components. It will add a
 * styling for each container component and include different
 * icons for Navigation and social media.
 */

import { cn } from "@/lib/utils";
import SocialMedia from "../social-media";
import NavigationDots from "../navigation-dots";

interface ContainerWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function ContainerWrapper({
  children,
  id,
  className,
}: ContainerWrapperProps) {
  return (
    <div id={id} className={cn("flex min-h-screen w-full flex-row", className)}>
      <SocialMedia />
      <div className="flex w-full flex-1 flex-col items-center justify-center px-8 py-16 xs:px-4 xs:pb-8 xs:pt-16">
        {children}
      </div>
      <NavigationDots active={id} />
    </div>
  );
}
