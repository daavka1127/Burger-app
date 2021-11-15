import React from "react";

import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        ШИНЭ ЗАХИАЛГА
      </MenuItem>
      <MenuItem exact link="/orders">ЗАХИАЛГАНУУД</MenuItem>
      <MenuItem exact link="/login">НЭВТРЭХ</MenuItem>
      <MenuItem exact link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
    </ul>
  </div>
);

export default Menu;
