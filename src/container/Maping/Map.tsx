import React from 'react'

interface Data1 {
  id?: number;
  name?: string;
  // age?: number;
}

interface Data2 {
  hrid?: number;
  email?: string;
  age?: number;
}

const MyComponent = () => {
  const data1: Data1[] = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Monika",
    },
    {
      id: 3,
      name: "Kaka",
    }
  ]

  const data2: Data2[] = [
    {
      hrid: 1,
      age: 33,
      email:"private"
    },
    {
      hrid: 2,
      age: 25,
      email:"public"
    },
    {
      hrid: 4,
      age: 24,
      email: "private"
    }
  ]

  const matchingData: {id: number, name: string, age: number, email:string}[] = [];
  data1.forEach((d1) => {
    data2.forEach((d2) => {
      if(d2.hrid === d1.id && d2.email!=="public" ){
        matchingData.push({ id: d1.id!, name: d1.name!, age: d2.age!, email:d2.email! })
      }
    });
  });

  console.log(matchingData);

  return <div>Map</div>;
}

export default MyComponent;
