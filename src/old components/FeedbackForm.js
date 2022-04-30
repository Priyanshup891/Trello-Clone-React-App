import React from 'react';
import { useForm} from "react-hook-form";

export default function FeedbackForm() {
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);
    

  return (
    <div  id="feedback" className='bg-zinc-800 p-5 text-slate-200  pb-20 md:py-20 min-h-screen'>
        <h2 className='text-4xl font-bold py-5 text-center'>Leave Some Feedback</h2>

        <form id="survey-form" onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col justify-center gap-y-5 max-w-3xl m-auto w-[90%] p-4
          bg-zinc-700 rounded-md  border-slate-100 border-solid border-2 border-opacity-40 '>
            <div className='flex'>
                <input type="text" id="name" name="name" placeholder="Enter your name" required
                {...register("name")}
                className='bg-zinc-600 rounded px-2 flex-auto'/>
            </div>
            <div className='flex'>
                <input type="email" id="email" name="email" placeholder="Enter your email"
                {...register("mail")}
                className='bg-zinc-600 px-2 flex-auto rounded'/>
            </div>
            <div  className='flex'>
                <input type="text" id="subject" name="subject" placeholder="Subject" required 
                {...register("subject")}
                className='bg-zinc-600 px-2 flex-auto rounded'/>
            </div>
            <fieldset className='flex'> 
                <textarea name="bio" rows="3" cols="30" placeholder="Enter your raccomandation..." 
                {...register("mailbody")}
                    required className='bg-zinc-600 px-2 flex-auto rounded w-[90%]'>
                </textarea>
            </fieldset>

            <input type="submit" id="submit" value="Submit"
            className='border-solid border-2 border-sky-700 rounded text-lg max-w-lg m-auto p-5 px-10
            hover:shadow-md hover:shadow-sky-900 active:bg-sky-900'/>
        </form>
    </div>
  )
}
