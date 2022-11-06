import React,{useState,useEffect} from "react";
import "../index.css";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FiHome,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import Logo from "../Recemmendo.png";
import Checkbox1 from './Checkbox';
import { Catalogues } from './mock';
import Searchbar from "./Searchbar";
const LinkItemsbtm = [
  { name: "APIS", icon: FiSettings ,toname:"developerapi"},
  { name: "About Us", icon: FiSettings ,toname:"aboutus"},
];

const CheckboxItem = ({ icon, children, ...rest }) => {
    return (
        <Link
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                {...rest}
            >
                {icon && <Icon mr="4" fontSize="16" as={icon} />}
                {children}
            </Flex>
        </Link>
    );
};

export default function SidebarWithHeader({ children, movieList, setMovieList,songList,setSongList,bookData,setBookdata,isCheck,setIsCheck}) {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [list, setList] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        isCheckAll={isCheckAll}
        setIsCheckAll={setIsCheckAll}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        list={list}
        setList={setList}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} isCheckAll={isCheckAll}
        setIsCheckAll={setIsCheckAll}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        list={list}
        setList={setList}/>
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
      <Searchbar setMovieList={setMovieList} movieList={movieList} songList={songList} setSongList={setSongList} bookData={bookData} setBookdata={setBookdata}/>
        {/* {children}  */}
        {/* {console.log(isCheck)} */}
        {children}
        {/* {
          (isCheck[0]==='2' ||isCheck[1]==='2' ||isCheck[2]==='2' )?
          (
            <div>
              {children}
            </div>
          ):(<></>)
        }
        {
          (isCheck[0]==='1' ||isCheck[1]==='1' ||isCheck[2]==='1' )?
          (
            <div>
            {children}
            </div>
          ):(<></>)
        }
        {
          (isCheck[0]==='3' ||isCheck[1]==='3' ||isCheck[2]==='3' )?
          (
            <div>
              {children}
            </div>
          ):(<></>)
        } */}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, isCheckAll,isCheck,setIsCheck,setIsCheckAll,list,setList,...rest }) => {

  const handleSelectAll = () => {
      setIsCheckAll(!isCheckAll);
      setIsCheck(list.map(li => li.id));
      
      if (isCheckAll) {
        setIsCheck([]);
      }
      console.log(isCheck);
    };

    const handleClick = e => {
      const { id, checked } = e.target;
      setIsCheck([...isCheck, id]);
      if (!checked) {
        setIsCheck(isCheck.filter(item => item !== id));
      }
    };

  useEffect(() => {
      setList(Catalogues);
  }, [list])

  return (
    <Box
      transition="3s ease"
      rounded={5}
      m={4}
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="96vh"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <img src={Logo} alt="logo" width={"20px"}/>
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          style={{ marginLeft: "10px" }}
        >
          <Link href="/">
          Recemmendo.
          </Link>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box w={{ base: "full", md: 60 }} pos="fixed" h="full">
        <Flex flexDirection="column" h="85vh" justifyContent="space-between">
          <Box>
          <NavItem icon={FiHome} mr={8} toname="">Home</NavItem>
          {/* <Catalouge /> */}
          <div>
          <CheckboxItem></CheckboxItem>
          <Flex
              alignItems="center"
              justifyContent="space-between"
              mr={12}
          >
              <CheckboxItem icon="" onClick={handleSelectAll}>Select All</CheckboxItem>
              <Checkbox1
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  handleClick={handleSelectAll}
                  isChecked={isCheckAll}
              >
              </Checkbox1>
          </Flex>
          {list.map((link) => (
              <Flex
                  key={link.name}
                  alignItems="center"
                  justifyContent="space-between"
                  mr={12}
              >
                  <CheckboxItem icon={link.icon}>{link.name}</CheckboxItem>
                  <Checkbox1 
                      type="checkbox"
                      name={link.name}
                      mr={12}
                      id={link.id}
                      handleClick={handleClick}
                      isChecked={isCheck.includes(link.id)}
                  ></Checkbox1>
              </Flex>
          ))}
      </div>
          </Box>
          <Box>
            {LinkItemsbtm.map((link) => (
              <NavItem icon={link.icon} key={link.toname} mr={8} toname={link.toname}>{link.name}</NavItem>
            ))}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};


const NavItem = ({ icon,toname, children, ...rest }) => {
  
  return (
    <Link
      href={"/"+toname}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <img src={Logo} alt="logo" width={"20px"}/>
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          marginLeft={"10px"}
          fontWeight="bold"
        >
          Recemmendo.
        </Text>
      </Flex>
      <HStack spacing={{ base: "0", md: "6" }}></HStack>
    </Flex>
  );
};
