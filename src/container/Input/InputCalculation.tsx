import React, { Fragment, useState } from 'react'
import { Input } from 'semantic-ui-react';

const InvoiceTable = () => {
  const [fields, setFields] = useState<JSX.Element[]>([]);
  const [Hour, setHour] = useState(10)
  const [Rate, setRate] = useState(10)
  const [total, setTotal] = useState(0)

  const handleHourChange = (newValue: any) => {
    setHour(newValue);
    setTotal(newValue * Rate);
  };

  const handleRateChange = (newValue: any) => {
    setRate(newValue);
    setTotal(newValue * Hour);
  };

  const addField = () => {
    const newField = <InvoiceTable key={fields.length} />;
    setFields([...fields, newField]);
  };

  const removeField = (index: any) => {
    const updatedFields = [...fields];
    updatedFields.splice(index);
    setFields(updatedFields);
  }

  return (
    <Fragment>
      <div className='flex flex-row border-bottom  padding-2 '>
         <Input Value={0} onChange={handleHourChange} />
         <Input Value={0} onChange={handleRateChange}/>
         <Input className='invoice' value={total} />
        <div className='width-5 text-md text-heading-grey flex flex-align-center'>
          <div className='padding-r-4' onClick={removeField}>Minus</div>
          <div onClick={addField}>ADD</div>
        </div>
      </div>
      <div className='flex flex-column'>
        {fields.map((field, index) => (
          <div key={index}>{field}</div>
        ))}
      </div>
    </Fragment>

  )
}
function InputCalculation() {
  return (
    <div><InvoiceTable/></div>
  )
}

export default InputCalculation