import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const HeaderPage = () => {
    return (
        <div className='text-center py-8 space-y-2'>

            <Image className='mx-auto' src={logo} width={300} height={200} alt='logo'></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMMM dd ,yyyy")}</p>
        </div>
    );
};

export default HeaderPage;