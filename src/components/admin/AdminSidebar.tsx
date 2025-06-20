
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Grid2x2, 
  Grid3x3, 
  Upload, 
  User,
  LogOut
} from 'lucide-react';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface AdminSidebarProps {
  user: SupabaseUser;
  onSignOut: () => void;
}

const AdminSidebar = ({ user, onSignOut }: AdminSidebarProps) => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard',
      icon: Grid2x2,
    },
    {
      title: 'Gallery',
      path: '/admin/gallery',
      icon: Grid3x3,
    },
    {
      title: 'Categories',
      path: '/admin/categories',
      icon: Upload,
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
        <p className="text-sm text-gray-600 mt-1">Sparsh Yoga CMS</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                className="w-full justify-start"
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.title}
              </Button>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <Card className="p-3 mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.email}
              </p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </Card>
        
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={onSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
