import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
type Contact = {
    name: string;
    className: string;
    href: string;
    icon: any;
};
const contacts: Contact[] = [
    {
        name: "Email",
        className: "bg-yellow-500 hover:bg-yellow-600",
        href: "mailto:jaceycui@gmail.com",
        icon: faEnvelope,
    },

    {
        name: "Github",
        className: "bg-black hover:bg-gray-800/90",
        href: "https://github.com/CuiJiaxin0413",
        icon: faGithub,
    },
    {
        name: "LinkedIn",
        className: "bg-blue-500 hover:bg-blue-600",
        href: "https://www.linkedin.com/in/jiaxincui/",
        icon: faLinkedin,
    },
    {
        name: "Resume",
        className: "bg-green-500 hover:bg-green-600",
        href: "https://drive.google.com/file/d/1FqPekt5LJWFo4SAR086fExKTlDYrg-NS/view?usp=sharing",
        icon: faFile,
    },
];
export default function ContactList({
    delayOffset = 0,
    showWhenInView = true,
}: {
    delayOffset?: number;
    showWhenInView?: boolean;
}) {
    return (
        <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
            {contacts.map((contact, index) => (
                <TooltipProvider delayDuration={0} key={index}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                className={cn(
                                    "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                                    contact.className,
                                )}
                                asChild
                                aria-label={contact.name}
                            >
                                <a
                                    href={contact.href}
                                    target="_blank"
                                    aria-label={contact.name}
                                >
                                    <FontAwesomeIcon icon={contact.icon} className="w-fit" />
                                </a>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent sideOffset={6}>
                            <p>{contact.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
        </MotionList>
    );
}
