'use client'

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";



const RegisterPage = () => {



    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleRegisterForm = async (data) => {
        console.log(data)
        
        const { email, name,  password, photo } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
             callbackURL: "/"
        });
        
        console.log(res, error)

        
    }
   

    return (
        <div className="bg-slate-100 flex items-center justify-center h-[80vh] container mx-auto">
            <div className="fieldset bg-base-200 border-base-300 w-xl border p-10 ">
                <h2 className="text-center font-semibold text-gray-600 text-3xl">Register Your Account</h2>
                <div className="divider py-7 border-base-300"></div>
                <form onSubmit={handleSubmit(handleRegisterForm)} >
                    <div className="space-y-4">


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font bold text-xl text-slate-600">Your Name</legend>
                            <input type="text" className="input w-full" placeholder="Type here Name" {...register("name", { required: "Name is required" })} />
                            {errors.name && (<p className="text-red-600">{errors.email.message}</p>)}
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font bold text-xl text-slate-600">Photo URL</legend>
                            <input type="text" className="input w-full" placeholder="Type here Name" {...register("url", { required: "email is required" })} />
                            {errors.url && (<p className="text-red-600">{errors.email.message}</p>)}
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font bold text-xl text-slate-600">Email Address</legend>
                            <input type="email" className="input w-full" placeholder="Type here Email" {...register("email", { required: "email is required" })} />
                            {errors.email && (<p className="text-red-600">{errors.email.message}</p>)}
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend font bold text-xl text-slate-600">Password</legend>
                            <input type="password" className="input w-full " placeholder="Type here password" {...register("password", { required: "password is required" })} />
                            {errors.password && (<span className="text-red-600">{errors.password.message}</span>)}
                        </fieldset>
                        <button className="btn btn-neutral mt-4 w-full">Register</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;