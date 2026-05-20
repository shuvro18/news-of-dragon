import LeftSection from "../components/mainsection/LeftSection";

const category = async ()=>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return  data.data.news_category

}

export default async function Home() {

  const categoryData = await category();


  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto  ">
        <div className="col-span-3 rounded-md p-3">
          <LeftSection category={categoryData} active={null}></LeftSection>
        </div>
        <div className="col-span-6  rounded-md p-3">
          <h2 className="font-semibold text-xl text-gray-700 pb-5">Dragon News Home</h2>
        </div>
        <div className="col-span-3  rounded-md p-3">
          <h2 className="font-bold text-xl text-gray-700 pb-5">Login With</h2>
        </div>
    </div>
  );
}
