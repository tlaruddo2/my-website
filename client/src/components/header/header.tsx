import { HeaderMenuDrawer } from "./header-menu-drawer";
import { HeaderMenuRegular } from "./header-menu-regular";
import "./header.css";

export const Header = () => {
  return (
    <div>
      {/* <div style={{display:{xs:'none',md:'block', width:"100%"}}}> */}
      <div id="header-regular">
        <HeaderMenuRegular/>  
      </div>
      {/* <div sx={{display:{xs:'block',md:'none', width:"100%"}}}> */}
      <div id="header-drawer">
        <HeaderMenuDrawer/> 
      </div>
    </div>
  );
};
