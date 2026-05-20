const category = async ()=>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return  data.data.news_category

}

export default async function Home() {

  const categoryData = await category();
  console.log(categoryData)

  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto  ">
        <div className="col-span-3 rounded-md p-3">
          <h2 className="font-semibold text-xl text-gray-700 pb-5">All Category</h2>
          <ul className="text-gray-500 text-center flex flex-col gap-2 ">
            {categoryData.map(e=><ol key={e.category_id} className="py-2 text-lg bg-slate-300">
              {e.category_name}
            </ol>)}
          </ul>
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
