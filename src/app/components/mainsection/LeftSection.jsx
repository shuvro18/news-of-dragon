import Link from 'next/link';


const LeftSection = ({ category, active }) => {
    return (
        <div>
            <h2 className="font-semibold text-xl text-gray-700 pb-5">All Category</h2>
            <ul className="text-gray-500 text-center flex flex-col gap-2 ">
                {category.map(e => <ol key={e.category_id} className={`${active === e.category_id && "bg-slate-300 rounded-xl text-secondary font-bold"} py-2 text-lg `}>
                    <Link className='block' href={`/category/${e.category_id}`}>
                        {e.category_name}
                    </Link>
                </ol>)}
            </ul>
        </div>
    );
};

export default LeftSection;