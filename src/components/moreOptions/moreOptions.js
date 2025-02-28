import { useState } from "react";
import FloatingMenu from "../floatingMenu/floatingMenu";
import "./moreOptions.css";

export default function MoreOptions() {
  const [openMenu, setOpenMenu] = useState(false);
  const [xPosOfClick, setXPosOfClick] = useState(0);

  const openOptionsDropdown = (event) => {
    // alert(2);
    setXPosOfClick(event.clientX);
    setOpenMenu((val) => !val);
  };

  const options = [
    { label: "About us", goto: "aboutUs", haveOptions: false, type: "link" },
    {
      label: "Fonts",
      goto: null,
      haveOptions: true,
      type: "select",
      options: [
        {
          label: "Roboto Mono",
          styles: { fontFamily: "var(--fontOne)" },
          goto: "robotoMono",
          type: "selectOption",
        },
        {
          label: "Crete Round",
          styles: { fontFamily: "var(--fontTwo)" },
          goto: "creteRound",
          type: "selectOption",
        },
      ],
    },
  ];
  return (
    <div className="moreOptions__container">
      <span onClick={openOptionsDropdown}></span>
      <FloatingMenu
        showMenu={openMenu}
        body={options}
        xPosOfClick={xPosOfClick}
      ></FloatingMenu>
    </div>
  );
}
