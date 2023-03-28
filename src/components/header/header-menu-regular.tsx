import { Box, Button } from "@mui/material";
import React from "react";
import { Logo } from "./logo";
import { MenusRegular } from "./menus/menus-regular";
import './header.css'
  


export const HeaderMenuRegular = () => {
    return (
        <div className="container">
            <Logo/>
            <MenusRegular/>
        </div>
    )
}