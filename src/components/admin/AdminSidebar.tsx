
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Grid2x2, 
  Grid3x3, 
  Upload, 
  User,
  LogOut,
  X
} from 'lucide-react';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface AdminSidebarProps {
  user: SupabaseUser;
  onSignOut: () => void;
  onClose?: () => void;
}

const AdminSidebar = ({ user, onSignOut, onClose }: AdminSidebarProps) => {
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

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-64 bg-white shadow-lg flex flex-col h-full lg:h-screen">
      <div className="p-4 sm:p-6 border-b flex justify-between items-center">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">Admin Panel</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Sparsh Yoga CMS</p>
        </div>
        
        {/* Close button for mobile */}
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.path} to={item.path} onClick={handleLinkClick}>
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                className="w-full justify-start text-sm sm:text-base"
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
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                {user.email}
              </p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </Card>
        
        <Button
          variant="outline"
          className="w-full justify-start text-sm"
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
