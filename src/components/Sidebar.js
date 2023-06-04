import Nav from "./Skeleton/Nav"
export default function Sidebar() {
    const sidebarStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }
    return (
        <aside style={sidebarStyle} className="sidebar-component">
            <h2>Sidebar</h2>
        </aside>

    )
}