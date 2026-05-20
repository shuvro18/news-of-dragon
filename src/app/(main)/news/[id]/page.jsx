import LoginSection from "@/app/components/mainsection/LoginSection";
import { showNewsDetails } from "@/lib/page";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";


const newsPage = async ({ params }) => {
    const { id } = await params
    const details = await showNewsDetails(id);
    console.log(details)
    return (
        <div className="container mx-auto ">
            <h2 className="font-semibold text-xl">Dragon News</h2>
            <div className="grid grid-cols-12 py-5 gap-4">


                <div className="col-span-8 p-3 border-2 border-gray-200 rounded-md shadow-2xl">
                    <Image src={details.image_url} alt="news image" height={500} width={500} className="w-full"></Image>
                    <p className="font-semibold text-xl text-neutral/90 py-5"> {details.title} </p>
                    <h2 className="  text-neutral/70  py-3">
                        {details.details}
                    </h2>
                    <div>
                        
                       <Link href={`/category/${details.category_id}`}> <button className="btn btn-secondary"> <FaArrowLeft />All news in this category</button></Link>
                    </div>
                </div>


                <div className="col-span-4">
                    <LoginSection></LoginSection>
                </div>

            </div>

        </div>
    );
};

export default newsPage;