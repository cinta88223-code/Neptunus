import React from 'react';
import { LinkItem } from '../types';
import { getIconByName } from './Icons';

interface LinkCardProps {
  link: LinkItem;
  themeColor: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, themeColor }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative w-full p-4 mb-3 rounded-xl flex items-center justify-between
        transition-all duration-300 ease-out
        border border-white/60
        hover:scale-[1.02] hover:shadow-lg
        ${link.highlight 
          ? `bg-gradient-to-r from-${themeColor}-600 to-purple-600 text-white shadow-md border-transparent hover:brightness-110` 
          : 'bg-white/80 text-slate-700 hover:bg-white'
        }
      `}
    >
      <div className={`
        p-2 rounded-full mr-4 flex-shrink-0
        transition-colors duration-300
        ${link.highlight 
          ? 'bg-white/20' 
          : `bg-${themeColor}-50 text-${themeColor}-600 group-hover:bg-${themeColor}-100`
        }
      `}>
        {getIconByName(link.iconName, "w-5 h-5")}
      </div>

      <div className="flex-grow text-left">
        <h3 className={`font-semibold ${link.highlight ? 'text-white' : 'text-slate-800'}`}>
          {link.title}
        </h3>
      </div>

      <div className={`opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300`}>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={link.highlight ? 'text-white' : 'text-slate-400'}
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </a>
  );
};