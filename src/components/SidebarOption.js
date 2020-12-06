import React from 'react';
import './css/SidebarOption.css'

function SidebarOption({Icon, title, id}) {
    return (
        <div className={id ? "sidebarOption channel" : "sidebarOption"} >
            {Icon && <Icon className="sidebarOption-icon" />}
            {Icon ? <h3>{title}</h3> : <h3><span className="sidebarOption-icon">#</span> {title}</h3>}
        </div>
    )
}

export default SidebarOption;
