import { VStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";


const NavBar = () => {
    return (
        <VStack justifyContent={"space-between"} padding='10px'>
            <Image src={logo} boxSize='60px'></Image>
            <ColorModeSwitch />
        </VStack>
    )
}

export default NavBar;

