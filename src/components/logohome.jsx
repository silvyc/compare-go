import { Image } from "@chakra-ui/react";

const LogoH = ({ src }) => <Image src={`/img/${src}`} height="15vh" alt={src} />;

export default LogoH;