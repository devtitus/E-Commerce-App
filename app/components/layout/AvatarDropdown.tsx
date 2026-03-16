import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, Avatar, AvatarFallback, AvatarImage } from '@/components/ui/index';
import { CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"
import { authGet, authPost } from '@/lib/api';

type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
};

const AvatarDropdown = () => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await authGet('/auth/me');
                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                }
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await authPost('/auth/logout');
            router.push('/login');
            router.refresh();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const getInitials = (firstName: string, lastName: string) => {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger nativeButton={false} render={
                <Avatar>
                    {user?.image ? (
                        <AvatarImage
                            src={user.image}
                            alt={`${user.firstName} ${user.lastName}`}
                        />
                    ) : null}
                    <AvatarFallback>
                        {user ? getInitials(user.firstName, user.lastName) : 'CN'}
                    </AvatarFallback>
                </Avatar>
            } />
            <DropdownMenuContent className={'min-w-fit'}>
                {user && (
                    <div className='px-2 py-1.5 text-sm'>
                        <p className='font-medium'>{user.firstName} {user.lastName}</p>
                        <p className='text-muted-foreground text-xs'>{user.email}</p>
                    </div>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                    <LogOutIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AvatarDropdown;
