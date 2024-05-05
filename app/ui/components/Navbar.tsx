import Link from 'next/link';
import NavLinks from '@/app/ui/components/NavLinks';

export default function SideNav() {
    return (
        <div className="flex sm:justify-center shadow">
            {/* Logo */}
                <Link  href="/" className=" bg-emerald-600 p-3 hover:bg-green-500">
                    <div className="text-white text-xl font-bold">
                        <h1>Nyköpings Moské</h1>
                    </div>
                </Link>

            
            {/* Navigation Links */}
            <NavLinks />

            

        </div>
    );
}
