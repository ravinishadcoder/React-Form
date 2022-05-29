import React from "react";
import {
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const TableCom = ({info}) => {
   // console.log(info)
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption></TableCaption>

        <Tbody>
          <Tr>
            <Td>Name</Td>
            <Td>{info.name}</Td>
          </Tr>
          <Tr>
            <Td>Age</Td>
            <Td>{info.age}</Td>
          </Tr>
          <Tr>
            <Td>Address</Td>
            <Td>{info.adderess}</Td>
          </Tr>
          <Tr>
            <Td>Department</Td>
            <Td>{info.department}</Td>
          </Tr>
          <Tr>
            <Td>Salary</Td>
            <Td>{info.salary}</Td>
          </Tr>
         
        </Tbody>
        
      </Table>
    </TableContainer>
  );
};

export default TableCom;
