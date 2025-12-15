import { ArrowUpIcons } from "@/icons/icons";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  [key: string]: unknown;
  icon?: boolean;
  download?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  className = "",
  icon = true,
  download = false,
  ...props
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`avenir flex items-center justify-center uppercase gap-2 w-fit px-6 py-3 bg-primary2 text-white barlow font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:shadow-lg rounded-sm ${className}`}
      {...props}
      download={true}
    >
      {label}
      {icon && (
        <span>
          <ArrowUpIcons />
        </span>
      )}

      {download && (
        <span>
          <MdOutlineFileDownload size={26} />
        </span>
      )}
    </Link>
  );
};

export default LinkButton;
