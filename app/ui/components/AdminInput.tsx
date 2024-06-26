'use client'
import AdminPanel from '@/app/admin/page';
import React, { useState, useEffect } from 'react';
import AdminSection from './AdminSection';

export default function AdminInput() {
    const [isAdmin, setIsAdmin] = useState(false);


    const handleChange = (e: any) => {
        if (e.target.value === '1234') {
            setIsAdmin(true);

        }
    };


    return (
        <div >
            <div className={`${isAdmin && 'hidden'}`}>
                <input  onChange={handleChange} autoFocus placeholder="Enter code" id="pinInput" />
               <p className='mt-2 p-3'>Please sign in with your admin code</p> 
            </div>

            {isAdmin && <AdminSection />}
        </div>
    );
}