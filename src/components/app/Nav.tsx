import ThemesSwitch from "../ThemesSwitch";

export default function Nav() {
    return (
        <nav class="fixed top-0 left-0 w-full h-16 bg-secondary/25 backdrop-blur border-b flex items-center">
            <div class="container mx-auto flex justify-between items-center py-1 px-4">
                <div>Logo</div>
                <div>
                    <ThemesSwitch placement="start-start" />
                </div>
            </div>
        </nav>
    );
}
