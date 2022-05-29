import React, { useEffect, useRef, useState } from "react";
import Styles from "./Form.module.css";
import { Button, Input, Text } from "@chakra-ui/react";
import { Container, Select, Stack, Checkbox } from "@chakra-ui/react";
import TableCom from "./Table";


const Form = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState({});
  const [show, setShow] = useState(false)
 
  const handeOnChannge = (e) => {
    let { name, value,type,checked } = e.target;
    if(type==="checkbox"){
        setForm({
            ...form,
            [name]: checked,
          });
    }else{
        setForm({
            ...form,
            [name]: value,
          });
    }
    
      //console.log(value)
    //console.log(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!form.name) ref.current.focus();
    // if (!form.password) passRef.current.focus();
    setData(form)
    setShow(true)
    
    
  };
  return (
      <>
    <Container className={Styles.Container}>
      <div>
        Form
        <form onSubmit={handleSubmit}>
          <div>
            <Text mb="8px" className={Styles.text}>
              Name
            </Text>
            <Input
              name="name"
              value={form.name}
              onChange={handeOnChannge}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </div>
          <br />
          <div className={Styles.age}>
            <label htmlFor="">Age</label>
            <Input
             value={form.age}
              htmlSize={4}
              width="auto"
              type="Number"
              placeholder="Enter age"
              name="age"
              onChange={handeOnChannge}
            />
          </div>
          <br />
          <div>
            <Text mb="8px" className={Styles.text}>
              Address
            </Text>
            <Input
              value={form.adderess}
              name="adderess"
              onChange={handeOnChannge}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </div>
          <br />
          <div>
            <Select placeholder="Department" onChange={handeOnChannge} name="department" value={form.department}>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
              <option value="Back-end">Fullstack</option>
            </Select>
          </div>
          <br />
          <div className={Styles.age}>
            <label htmlFor="">Salary:-</label>
            <Input
              value={form.salary}
              htmlSize={4}
              width="auto"
              type="Number"
              
              placeholder="Enter Salary"
              name="salary"
              onChange={handeOnChannge}
            />
          </div>
          <br />
          <div>
            <p className={Styles.age}>Marital Status{form.name}</p>
            <Stack spacing={5} direction="row">
              <Checkbox colorScheme="red" name="Ismarried" value={form.Ismarried} onChange={handeOnChannge}>Married</Checkbox>
              <Checkbox colorScheme="green" name="Ismarried" value={form.Ismarried} onChange={handeOnChannge}>Unmarried</Checkbox>
            </Stack>
          </div>
          <br />
         <Button colorScheme='blue' type="submit">submit</Button>
        </form>
      </div>
      
    </Container>
    { show ? <TableCom info={data}/>:null}
    </>
  );
};

export default Form;
