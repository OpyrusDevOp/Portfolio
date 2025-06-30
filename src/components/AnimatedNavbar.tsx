import React, { useRef, useEffect } from 'react';
import type { AnimatedNavbarProps } from '../types/props';
import { NavLink, type NavLinkRenderProps } from 'react-router-dom';

const AnimatedNavbar: React.FC<AnimatedNavbarProps> = ({
  className = '',
}) => {
  const rectRef = useRef<SVGRectElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = rectRef.current;
    const container = containerRef.current;

    if (!rect || !container) return;

    const navElements = container.querySelectorAll('a');

    // Default state
    const setDefaultState = () => {
      Object.assign(rect.style, {
        strokeDashoffset: '5',
        strokeDasharray: '0 0 10 40 10 40',
        transition: '0.5s',
        stroke: 'rgb(96 165 250)',
      });
    };

    setDefaultState();

    // Container hover - show full border
    const handleContainerHover = () => {
      Object.assign(rect.style, {
        transition: '999999s',
        strokeDashoffset: '1',
        strokeDasharray: '0'
      });
    };

    // Element hover - highlight specific section
    const handleElementHover = (element: Element) => {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      // Calculate relative position and size as percentages
      const elementStart = ((elementRect.left - containerRect.left) / containerRect.width) * 100;
      const elementWidth = (elementRect.width / containerRect.width) * 100;

      // Create dasharray: [transparent_start, highlight_length, transparent_end]
      const dashArray = `0 ${elementStart} ${elementWidth} ${100 - elementStart - elementWidth}`;

      Object.assign(rect.style, {
        strokeDashoffset: '0',
        strokeDasharray: dashArray,
        stroke: 'rgb(168 85 247)',
        transition: '0.5s'
      });
    };

    // Event listeners
    container.addEventListener('mouseenter', handleContainerHover);
    container.addEventListener('mouseleave', setDefaultState);

    navElements.forEach((element) => {
      element.addEventListener('mouseenter', () => handleElementHover(element));
      element.addEventListener('mouseleave', setDefaultState);
    });

    return () => {
      container.removeEventListener('mouseenter', handleContainerHover);
      container.removeEventListener('mouseleave', setDefaultState);
      navElements.forEach((element) => {
        element.removeEventListener('mouseenter', () => handleElementHover(element));
        element.removeEventListener('mouseleave', setDefaultState);
      });
    };
  }, []);

  const navLinkClasses = ({ isActive }: NavLinkRenderProps) => {
    const textState = isActive
      ? 'text-blue-400'
      : 'text-white hover:bg-blue-500/20 hover:text-blue-400';

    return `px-4 py-2 cursor-pointer transition-all duration-100 rounded font-medium ${textState}`;
  };

  return (
    <div className={`relative w-96 h-16 ${className}`}>
      <div
        ref={containerRef}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg flex flex-row justify-around items-center px-2 hover:bg-slate-800/70 transition-colors duration-500"
      >
        <NavLink to="/" className={navLinkClasses}>
          Moi
        </NavLink>
        <NavLink to="/projects" className={navLinkClasses}>
          Projets
        </NavLink>
        <NavLink to="/cv" className={navLinkClasses}>
          Mon CV
        </NavLink>

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
