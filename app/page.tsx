'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";
import { error } from "console";
import { Span } from "next/dist/trace";


// interface register {
//   email:string,
//   number:string,
//   password:string

// }

export default function Home() {

//   const {register,formState:{errors},handleSubmit} =  useForm<register>()

//  function onSubmit  (value:register){
//     console.log(value);
    
//  }


  // return (
    // <div>
    //  <input  onSubmit={handleSubmit(onSubmit)} placeholder="email" {...register('email',{
    //   required:{
    //     value:true,
    //     message:'isrequaierd'
    //   },
    //   minLength:{
    //     value:10,
    //     message:'min lenght 10'
    //   },
    //   pattern:{
    //     value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //     message:'hyedyed'
    //   }
    //  })} />
    //  {errors.email && <div>dhhdhd</div>}
    //  <input type="number" placeholder="number" {...register('number',{
    //   required:true,
    //   minLength:{
    //     value:10,
    //     message:'min lenght 10'
    //   },
    //   maxLength:20
      
    //  })}/>
    //  <input type="password" placeholder="password" {...register('password',{
    //   required:true,
    //   minLength:{
    //     value:10,
    //     message:'min lenght 10'
    //   },
    //   maxLength:8

    //  })}/>
    //  <input type="submit" value="daregistrirdi"/>
    // </div>
  // );

  interface register {
    email:string,
    password:string
  
  }

  const {register,formState:{errors},handleSubmit} =  useForm<register>()

    function onSubmit  (value:register){
        console.log(value);
    }
  return(

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register} type="password" />
      </form>
    </div>
  )
}   
