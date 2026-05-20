import LeftSection from "@/app/components/mainsection/LeftSection";
import LoginSection from "@/app/components/mainsection/LoginSection";
import MiddleSection from "@/app/components/mainsection/MiddleSection";
import { category, selectCategory } from "@/lib/page";
import Image from "next/image";




const categoryDetailsPage = async ({ params }) => {

    const { id } = await params
    const categoryData = await category();
    const selectCategoryData = await selectCategory(id)
    
    return (
        <div>
            <div className="grid grid-cols-12 gap-5 container mx-auto  ">
                <div className="col-span-3 rounded-md p-3">
                    <LeftSection category={categoryData} active={id}></LeftSection>
                </div>
                <div className="col-span-6  rounded-md p-3">
                    <h2 className="font-semibold text-xl text-gray-700 pb-5">Dragon News Home</h2>

                    {
                        selectCategoryData.length > 0 ? selectCategoryData.map((element,ind) =>
                             <div key={ind}>
                                <MiddleSection element={element}></MiddleSection>
                             </div>) 
                        
                        
                        
                        : <div>
                            <div>
                                <Image src="https://i.ibb.co.com/1fGwRzb4/sad-anime-sawako-kuronuma-2uaw5qji1sggamv0.gif" alt='sad gif' width={1000} height={900}></Image>
                            </div>

                            <h2 className="mt-4 text-3xl text-center font-bold">
                                No News At This Moment
                            </h2>
                        </div>
                    }

                </div>
                <div className="col-span-3  rounded-md p-3">
                    <h2 className="font-bold text-xl text-gray-700 pb-5">Login With</h2>
                    <LoginSection></LoginSection>
                </div>
            </div>
        </div>
    );
};

export default categoryDetailsPage;