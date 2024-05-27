
import { NextRequest, NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';
import AdminSignIn  from '@/app/ui/components/AdminSignIn';


    





export default function AdminAutPage() {
    return (
        <div className='bg-slate-100 mx-4'>
            <h1 className='text-2xl text-center text-slate-700 mt-7 p-4'>Admin Aut</h1>
            <AdminSignIn/>
        </div>
    )
}


