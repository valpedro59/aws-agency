import Link from "next/link";
import React from "react";

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

const SliderButtons: React.FC<{ button: ButtonProps[] }> = ({ button }) => {
  return button.map(({ id, link, type,  text }) => (
    <Link target="_blank" key={id} href={link} className={type}>
      {text}
    </Link>
  ));
};

export default SliderButtons;