import React from 'react';
import { Heart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Heart className="w-8 h-8 text-blue-600 fill-current" />
      <span className="text-2xl font-bold text-blue-600">Donation Agent</span>
    </div>
  );
};

export default Logo;