import Link from "next/link";


const loginPage = () => {
    return (
        <div className="bg-slate-100 flex items-center justify-center h-[80vh] container mx-auto">
            <div className="fieldset bg-base-200 border-base-300 w-xl border p-19 ">
                <h2 className="text-center font-semibold text-gray-600 text-3xl">Login Your Account</h2>
                <div className="divider py-7 border-base-300"></div>
                <form>
                    <fieldset className="space-y-4">


                        <label className="label font-bold text-xl">Email Address</label>
                        <input type="email" className="input w-full" placeholder="Email" />

                        <label className="label font-bold text-xl">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" />

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p className="text-center">Do not Have An Account? <Link href={"/register"} className="text-secondary" > Register </Link> </p>
            </div>
        </div>
    );
};

export default loginPage;