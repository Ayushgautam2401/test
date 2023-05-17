import React, { Fragment, useState } from 'react'
import './table.css'

interface Coustom {
  header: string;
  customButton?: any;
  value?: any;
  noValue?: any;

}
const tableHeader = [
  {
    id: 'header',
    name: "tomuxh"
  },
  {
    id: 'value',
    name: "zeon"
  },
  {
    id: 'zfref',
    name: "hi"
  },
  {
    id: 'hina',
    name: "No"
  }
]

const emp = [
  {
    id: 1,
    header: "zz",
    value: "ayush",
    zfref: 'raaka',
    hina: "raju"
  }
]

const CoustomTable = ({ header, customButton, value, noValue }: Coustom) => {


  const [hide, setHide] = useState(false)
  const hideTable=() => setHide(!hide)

 
  return (
    <Fragment>
      <div className='header'>{header}
        {customButton && <button onClick={hideTable}>Asd</button>}
      </div>

      {hide &&
        <div>

          {value! &&
            <table className='border'>
              <thead>
                {
                  tableHeader.map(({ name, id }) => (
                    <th key={id}>{name}</th>
                  ))
                }
              </thead>
              <tbody>
                {
                  emp.map((ep: any, index: number) => (
                    <tr key={`employee${index}`}>
                      {
                        tableHeader.map(({ id }, index) => (
                          <td key={`${id} ${index}`}>{ep[id]}</td>))
                      }
                    </tr>
                  ))
                }
              </tbody>
            </table>
          }
          {noValue && <div>No value</div>}

        </div>
      }

    </Fragment>
  )
}

export default CoustomTable