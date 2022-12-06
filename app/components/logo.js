import React from "react";
import Image from 'next/image';

//Logo
import Logo from '/public/chris-cybersec.dev.svg';

const LogoComponent = () => {
  return <Image src={Logo} alt="chris-cybersec.dev - Logo" width={180} />;
};

export default LogoComponent;
