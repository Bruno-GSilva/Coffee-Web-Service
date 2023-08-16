import { Link, To } from "react-router-dom";
import { ElementType } from "react";

type AsideItemProps = {
    route: To;
    label: string;
    icon: ElementType
    onClick?: () => void;
};

export const AsideItem = ({ route, label, icon: Icon, onClick }: AsideItemProps) => {
    return (
        <li>
            <Link
                to={`${route}`}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={onClick}
            >
                <Icon />
                <span className="ml-3">{label}</span>
            </Link>
        </li>
    );
};
