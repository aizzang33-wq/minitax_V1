import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: '홈', id: 'hero' },
  { label: '기능', id: 'features' },
  { label: '이용가이드', id: 'guide' },
  { label: '요금제', id: 'pricing' },
  { label: '고객지원', id: 'support' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExternalLink = () => {
    window.open('https://minitax.co.kr/dashboard/minitax_hp/sign_in?recommender=pyt1234', '_blank');
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F3F1EB]/90 backdrop-blur-md py-3 border-b border-gray-200' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer select-none" onClick={() => scrollToSection('hero')}>
            <div className="flex items-center tracking-tight">
              <span className="text-3xl font-sans font-black text-legora-black">m</span>
              <span className="text-3xl font-sans font-black text-legora-black relative">
                i
                <span className="absolute top-[0.18em] left-1/2 -translate-x-1/2 w-[0.18em] h-[0.18em] bg-minitax-green rounded-full z-10"></span>
              </span>
              <span className="text-3xl font-sans font-black text-legora-black">n</span>
              <span className="text-3xl font-sans font-black text-legora-black relative">
                i
                <span className="absolute top-[0.18em] left-1/2 -translate-x-1/2 w-[0.18em] h-[0.18em] bg-minitax-green rounded-full z-10"></span>
              </span>
              <span className="text-3xl font-sans font-black text-legora-black">tax</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium tracking-wide text-legora-black hover:text-minitax-blue transition-colors focus:outline-none"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={handleExternalLink} className="text-sm font-medium text-legora-black hover:text-minitax-blue transition-colors">
              로그인
            </button>
            <button onClick={handleExternalLink} className="bg-legora-black text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-gray-800 transition-all">
              무료 체험하기
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-legora-black focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F3F1EB] border-b border-gray-200 h-screen">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-2xl font-serif text-legora-black hover:text-minitax-blue text-left w-full focus:outline-none"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-6 border-t border-gray-300 mt-8 flex flex-col gap-4">
              <button onClick={handleExternalLink} className="text-center w-full py-4 text-legora-black border border-legora-black rounded-sm text-lg">
                로그인
              </button>
              <button onClick={handleExternalLink} className="text-center w-full py-4 bg-legora-black text-white rounded-sm text-lg">
                무료 체험하기
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};