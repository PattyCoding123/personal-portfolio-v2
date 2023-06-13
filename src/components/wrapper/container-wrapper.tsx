/**
 * Wrapper for the container components. It will add a
 * styling for each container component and include different
 * icons for Navigation and social media.
 */

interface ContainerWrapperProps {
  id: string;
  children: React.ReactNode;
}

export default function ContainerWrapper({
  children,
  id,
}: ContainerWrapperProps) {
  return (
    <div id={id} className="flex min-h-screen w-full flex-row">
      {/* <SocialMedia /> */}
      <div className="xs:pt-16 xs:px-4 xs:pb-8 flex w-full flex-1 flex-col items-center justify-center px-8 py-16">
        {children}
      </div>
      {/* <NavigationDots active={id} /> */}
    </div>
  );
}