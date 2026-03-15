import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, Avatar, AvatarFallback, AvatarImage } from '@/components/ui/index';
import { CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"

const AvatarDropdown = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch ('/api/auth/logout', { method: 'POST'});
            router.push('/login');
            router.refresh();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger nativeButton={false} render={
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="grayscale"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            } />
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <UserIcon />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <CreditCardIcon />
                    Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                    <LogOutIcon />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AvatarDropdown