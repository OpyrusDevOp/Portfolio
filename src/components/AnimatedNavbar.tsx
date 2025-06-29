import React, { useRef, useEffect } from 'react';
import type { AnimatedNavbarProps } from '../types/props';
import { NavLink, type NavLinkRenderProps } from 'react-router-dom';


const AnimatedNavbar: React.FC<AnimatedNavbarProps> = ({
  className = '',
  onNavigate
}) => {
  const rectRef = useRef<SVGRectElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = rectRef.current;
    const container = containerRef.current;

    if (!rect || !container) return;

    const buttons = container.querySelectorAll('button');

    // Style initial
    Object.assign(rect.style, {
      strokeDashoffset: '5',
      strokeDasharray: '0 0 10 40 10 40',
      transition: '0.5s',
      stroke: 'rgb(96 165 250)', // blue-400
    });

    // Hover sur le container
    const handleContainerHover = () => {
      Object.assign(rect.style, {
        transition: '999999s',
        strokeDashoffset: '1',
        strokeDasharray: '0'
      });
    };

    const handleContainerLeave = () => {
      Object.assign(rect.style, {
        strokeDashoffset: '5',
        strokeDasharray: '0 0 10 40 10 40',
        transition: '0.5s',
        stroke: 'rgb(96 165 250)'
      });
    };

    // Hover sur les boutons
    const buttonHoverEffects = [
      { strokeDasharray: '0 2 8 73.3 8 10.7' },
      { strokeDasharray: '0 12.6 9.5 49.3 9.5 31.6' },
      { strokeDasharray: '0 24.5 8.5 27.5 8.5 55.5' },
      { strokeDasharray: '0 34.7 6.9 10.2 6.9 76' }
    ];

    const handleButtonHover = (index: number) => {
      Object.assign(rect.style, {
        strokeDashoffset: '0',
        strokeDasharray: buttonHoverEffects[index].strokeDasharray,
        stroke: 'rgb(168 85 247)', // purple-500
        transition: '0.5s'
      });
    };

    const handleButtonLeave = () => {
      Object.assign(rect.style, {
        strokeDashoffset: '0',
        strokeDasharray: '0 0 10 40 10 40',
        transition: '0.5s !important',
        stroke: 'rgb(96 165 250)' // blue-400
      });
    };

    // Event listeners
    container.addEventListener('mouseenter', handleContainerHover);
    container.addEventListener('mouseleave', handleContainerLeave);

    buttons.forEach((button, index) => {
      button.addEventListener('mouseenter', () => handleButtonHover(index));
      button.addEventListener('mouseleave', handleButtonLeave);
    });

    return () => {
      container.removeEventListener('mouseenter', handleContainerHover);
      container.removeEventListener('mouseleave', handleContainerLeave);
      buttons.forEach((button, index) => {
        button.removeEventListener('mouseenter', () => handleButtonHover(index));
        button.removeEventListener('mouseleave', handleButtonLeave);
      });
    };
  }, []);

  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClasses = ({ isActive }: NavLinkRenderProps) => {
    const textState = isActive ? 'text-blue-400' : 'text-white hover:bg-blue-500/20 hover:text-blue-400';

    return `px-4 py-2 cursor-pointer transition-all duration-100 rounded  font-medium ${textState}`
  }

  return (
    <div className={`relative w-96 h-16 ${className}`}>
      <div
        ref={containerRef}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg flex flex-row justify-around items-center px-2 hover:bg-slate-800/70 transition-colors duration-500"
      >
        <NavLink
          to="/"
          className={navLinkClasses}
        >
          Moi
        </NavLink>
        <NavLink
          to='/projects'
          className={navLinkClasses}
        >
          Projets
        </NavLink>
        <button
          className="px-4 py-2 text-white cursor-pointer transition-all duration-100 rounded hover:bg-blue-500/20 hover:text-blue-400 font-medium"
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </button>

        <svg
          className="absolute inset-0 pointer-events-none rounded-lg"
          width="384"
          height="64"
          viewBox="0 0 384 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            ref={rectRef}
            pathLength={100}
            x={2}
            y={2}
            width="380"
            height="60"
            fill="transparent"
            strokeWidth={2}
            rx={6}
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedNavbar;
