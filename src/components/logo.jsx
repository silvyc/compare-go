import { Image } from "@chakra-ui/react";

const Logo = ({ src }) => <Image src={`/img/${src}`} height="4vh" alt={src} />;

const LogoH = ({ src }) => <Image src={`/img/${src}`} height="8vh" alt={src} />;

export default Logo;
