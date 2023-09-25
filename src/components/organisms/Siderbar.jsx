import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';

const Sidebar = ({ onSelectColor, isDarkMode }) => {
  const colors = ["#C39BD3", "#a5aad9", "#85C1E9", "#F7DC6F", "#75c58e", "#b1ceaf", "#e8f9a2", "#f0b49e", "#e2cb92", ""];

  return (
    <Drawer variant="permanent" anchor="left">
      <div className={`color-picker ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="color-grid">
          {colors.map((color) => (
            <IconButton
              key={color}
              style={{
                backgroundColor: color,
                marginBottom: "20px",
                display: "flex",
                borderColor: "none",
              }}
              onClick={() => onSelectColor(color)}
            >
              <FiberSmartRecordIcon style={{ color: isDarkMode ? "white" : "black" }} />
            </IconButton>
          ))}
        </div>
        <div className="empty-space"></div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
