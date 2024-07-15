import Image from "next/image";

import logo from "../../../public/logo.svg";

export default function Logo() {
  return <Image src={logo} alt='Eventy logo' width={53} height={12} />;
}
