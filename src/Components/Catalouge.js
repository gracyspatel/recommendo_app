import React,{useState,useEffect} from 'react'
import { Catalogues } from './mock';
import {
    Flex,
    Icon,
    Link
} from "@chakra-ui/react";

import Checkbox1 from './Checkbox';

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


const Catalouge = () => {
    const [isCheckAll, setIsCheckAll] = useState(true);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
          setIsCheck([]);
        }
      };


    useEffect(() => {
        setList(Catalogues);
    }, [list])

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
          setIsCheck(isCheck.filter(item => item !== id));
          console.log(isCheck);
        }
      };

    

    return (

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
    )
}


export default Catalouge