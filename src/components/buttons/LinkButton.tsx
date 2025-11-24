import { ArrowUpIcons } from "@/icons/icons";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  [key: string]: unknown;
  icon?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  className = "",
  icon = true,
  ...props
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center justify-center uppercase gap-2 w-fit px-6 py-3 bg-primary2 text-white barlow font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:shadow-lg rounded-sm ${className}`}
      {...props}
    >
      {label}
      {icon && (
        <span>
          <ArrowUpIcons />
        </span>
      )}
    </Link>
  );
};

export default LinkButton;
