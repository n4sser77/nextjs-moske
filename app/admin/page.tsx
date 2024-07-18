'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSection from '@/app/ui/components/AdminSection';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/validate', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setIsAuthenticated(true);
          setUser(data);
        } else {
          setIsAuthenticated(false);
          router.push('/login');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    console.log('User state updated:', user);
  }, [user]); // Watch for changes in `user` state

  if (loading) {
    return <p>Loading...</p>; // or a loading spinner
  }

  if (!isAuthenticated) {
    return null;
  }

  return <AdminSection/>;
};

export default AdminPage;
