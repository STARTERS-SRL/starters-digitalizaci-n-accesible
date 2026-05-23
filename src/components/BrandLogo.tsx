import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  className = "",
  markClassName = "h-12 w-44",
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={`relative block shrink-0 overflow-hidden ${markClassName} ${className}`}>
      <Image
        src="/logo.png"
        alt="STARTERS Software Development"
        width={520}
        height={160}
        priority={priority}
        className="h-full w-full object-contain object-left"
      />
    </span>
  );
}
