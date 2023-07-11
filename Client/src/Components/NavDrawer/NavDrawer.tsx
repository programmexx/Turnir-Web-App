import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./NavDrawer.css";
import icon from "../icon";

const NavDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="menuburger">
      <IconButton>
        <MenuIcon
          fontSize="large"
          className="menuburger"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        />
      </IconButton>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="navDrawer__container"
      >
        <Box p={2} width={"70vw"} textAlign="left" role="presentation">
          <div className="closeNav">
            <IconButton>
              <icon.CloseIcon
                fontSize="large"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </IconButton>
          </div>
          <ul className="navdrawerul">
            <li className="navdrawerli">
              <Link to={""}>
                <icon.HomeIcon fontSize="medium" className="navdrawericons" />
                Home
              </Link>
            </li>
            <li className="navdrawerli">
              <Link to={""}>
                <icon.CalendarMonthIcon
                  fontSize="medium"
                  className="navdrawericons"
                />
                Schedule & Results
              </Link>
            </li>
            <li className="navdrawerli">
              <Link to={""}>
                <icon.GroupsIcon fontSize="medium" className="navdrawericons" />
                Teams
              </Link>
            </li>
            <li className="navdrawerli">
              <Link to={""}>
                <icon.InfoIcon fontSize="medium" className="navdrawericons" />
                Logistics
              </Link>
            </li>
            <li className="navdrawerli">
              <Link to={""}>
                <icon.AutoStoriesIcon
                  fontSize="medium"
                  className="navdrawericons"
                />
                Rules
              </Link>
            </li>
            <li className="navdrawerli">
              <Link to={""}>
                <icon.ContactPageIcon
                  fontSize="medium"
                  className="navdrawericons"
                />
                Contact
              </Link>
            </li>
          </ul>
        </Box>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
