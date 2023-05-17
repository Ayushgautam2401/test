import React from 'react'
import Select from 'react-select'
import {useForm,SubmitHandler, Controller} from "react-hook-form"

enum Gender{
    female= 'female', male="male"
}
interface Name{
    first: string;
    Second: string;
    gender: Gender;
    iceCreamType: {label: string; value: string };
}


function HockForm() {
const {register, handleSubmit,control,formState: { errors }}= useForm<Name>();
const onSubmit: SubmitHandler<Name>=  data => console.log(data);
  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
     <label>First Name</label>
      <input {...register("first",{required: true})} />
      <input {...register("Second",{ pattern: /^[A-Za-z]+$/i })} />
      {errors?.Second?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Gender Selection</label>
      <Controller
       name="iceCreamType"
       render={({field})=>(
        <Select
        {...field}
        options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
          ]}
          />
       )}
        control={control}
      />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> 
       <input type="submit" />
      <button type="submit">hello</button>
     </form>
    </>
  )
}

export default HockForm