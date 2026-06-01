'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";



const LoginPage = () => {



    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLoginForm = async (data) => {
        const { email, password, photo } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            Photo: photo,
            callbackURL: "/",
        });
        
    }


    return (
        <div className="bg-slate-100 flex items-center justify-center h-[80vh] container mx-auto">
            <div className="fieldset bg-base-200 border-base-300 w-xl border p-19 ">
                <h2 className="text-center font-semibold text-gray-600 text-3xl">Login Your Account</h2>
                <div className="divider py-7 border-base-300"></div>
                <form onSubmit={handleSubmit(handleLoginForm)} >
                    <div className="space-y-4">


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
                        <button className="btn btn-neutral mt-4 w-full">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not Have An Account? <Link href={"/register"} className="text-secondary" > Register </Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;