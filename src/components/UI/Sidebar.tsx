interface AsideBarProps {
    openAside: boolean;
}

export const AsideBar = ({ openAside }: AsideBarProps) => {
    return (
        <aside
            className={`w-1/4 bg-slate-600 h-full absolute left-0`}
        >
            <nav className="w-full h-full">
                <ul className="flex flex-col gap-2 text-xl font-semibold">
                    <li className="p-2 border-2 rounded-sm bg-slate-500">Dashboard</li>
                    <li className="p-2 border-2 rounded-sm bg-slate-500">Produtos</li>
                </ul>
            </nav>
        </aside>
    );
};
