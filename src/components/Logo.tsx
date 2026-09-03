import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Decarbonization & Clean Energy Leaf/Loop Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform group-hover:rotate-12 duration-300"
          aria-hidden="true"
        >
          {/* Outer glow circle */}
          <circle cx="18" cy="18" r="16" className="fill-emerald-500/10 stroke-emerald-500/30" strokeWidth="1.5" />
          
          {/* Intertwined energy flow / net-zero leaf cycle */}
          <path
            d="M18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6Z"
            stroke="url(#emeraldGradient)"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="animate-spin-slow opacity-60"
          />
          
          {/* Central stylized modern leaf / delta node */}
          <path
            d="M18 8C18 8 25 12.5 25 19.5C25 24 21.5 27 18 27C14.5 27 11 24 11 19.5C11 12.5 18 8 18 8Z"
            fill="url(#emeraldGradient)"
            className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          />
          <path
            d="M18 12V24"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-90"
          />
          <path
            d="M18 16L22 13"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-90"
          />
          <path
            d="M18 19L14 17"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-90"
          />

          <defs>
            <linearGradient id="emeraldGradient" x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22C55E" />
              <stop offset="0.5" stopColor="#10B981" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography: nusa + decarb */}
      <div className="flex items-baseline tracking-tight">
        <span
          className={`font-sans font-black text-2xl lowercase ${
            variant === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}
        >
          nusa
        </span>
        <span className="font-sans font-black text-2xl lowercase text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">
          decarb
        </span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
      </div>
    </div>
  );
};
