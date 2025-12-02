import React, { useEffect, useState } from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkCard } from './components/LinkCard';
import { USER_PROFILE, LINKS } from './constants';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simple entry animation trigger
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br from-${USER_PROFILE.themeColor}-50 via-purple-50 to-pink-50 flex justify-center py-10 px-4 sm:px-6 relative overflow-hidden`}>
      
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-[-10%] w-96 h-96 bg-${USER_PROFILE.themeColor}-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content Container */}
      <main className={`
        w-full max-w-md z-10 
        transition-all duration-700 transform
        ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>
        
        {/* Profile Section */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 shadow-sm mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <ProfileHeader profile={USER_PROFILE} />
          
          {/* Links List */}
          <div className="flex flex-col gap-1">
            {LINKS.map((link, index) => (
              <div 
                key={link.id} 
                className="animate-fade-in-up" 
                style={{ animationDelay: `${0.2 + (index * 0.1)}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <LinkCard 
                  link={link} 
                  themeColor={USER_PROFILE.themeColor} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-400 text-sm animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards', opacity: 0 }}>
          <p className="mt-6 text-xs font-light opacity-60">
            Dibuat dengan Tautanku
          </p>
        </footer>

      </main>

      {/* Add custom keyframe for blob animation in style tag since we can't edit tailwind config directly here */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default App;