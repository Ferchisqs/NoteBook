import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notebook</h1>

            <button
                onClick={() => handleToggleDarkMode(
                    (previusDarkMode => !previusDarkMode
                )
                )
                } className="save">Dark Mode</button>
                
        </div>
    )
}

export default Header;