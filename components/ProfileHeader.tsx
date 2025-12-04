import React from 'react';
import { Profile } from '../types';
import { ShareIcon, CheckIcon, MapPinIcon } from './Icons';

interface ProfileHeaderProps {
  profile: Profile;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col items-center text-center mb-6 relative">
      <div className="absolute top-0 right-0">
        <button 
          onClick={handleShare}
          className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors text-slate-600 glass-card"
          aria-label="Share profile"
        >
          {copied ? <CheckIcon className="w-5 h-5 text-green-600" /> : <ShareIcon className="w-5 h-5" />}
        </button>
      </div>

      <div className="relative mb-4 group">
        <div className={`absolute -inset-1 bg-gradient-to-r from-${profile.themeColor}-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
        <img 
          src={profile.avatarUrl} 
          alt={profile.name} 
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-xl"
        />
      </div>

      <h1 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2 mb-1">
        {profile.name}
        <span className="text-blue-500" title="Verified">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.418-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.02-2.147 3.6 0 1.58.875 2.95 2.147 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 4 3.818 4 .47 0 .92-.084 1.336-.25.62 1.333 1.926 2.25 3.437 2.25s2.818-.917 3.437-2.25c.418.165.866.25 1.336.25 2.11 0 3.818-1.79 3.818-4 0-.495-.084-.965-.238-1.4 1.272-.65 2.147-2.02 2.147-3.6zM9.54 16.5l-3.375-3.375 1.75-1.75 1.625 1.625 5.875-5.875 1.75 1.75-7.625 7.625z"></path>
            </svg>
        </span>
      </h1>
      
      <p className="text-sm font-medium text-slate-500 mb-2">{profile.handle}</p>
      
      {profile.location && (
        <div className="flex items-center text-xs text-slate-400 mb-3">
          <MapPinIcon className="w-3 h-3 mr-1" />
          {profile.location}
        </div>
      )}
      
      {profile.bio && (
        <p className="text-slate-600 max-w-xs leading-relaxed text-sm sm:text-base mb-4">
          {profile.bio}
        </p>
      )}

      {profile.promotionalBannerUrl && (
        <div className="w-full mt-2 mb-2 overflow-hidden rounded-xl shadow-md border border-white/40">
            <img 
                src={profile.promotionalBannerUrl} 
                alt="Promo Banner" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
        </div>
      )}
    </div>
  );
};