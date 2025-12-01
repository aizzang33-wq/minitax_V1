import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExternalLink = () => {
    window.open('https://minitax.co.kr/dashboard/minitax_hp/sign_in?recommender=pyt1234', '_blank');
  };

  return (
    <footer className="bg-legora-black text-white relative overflow-hidden">
      {/* Pre-footer CTA Section */}
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto border-b border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] tracking-tight">
            성공적인 비즈니스를<br/>시작할 준비가 되셨나요?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl leading-relaxed font-sans">
            미니택스가 어떻게 귀하의 소중한 시간을 돌려드리는지 지금 바로 확인해보세요.
          </p>
          <div className="flex flex-col items-start gap-4">
            <button 
              onClick={handleExternalLink}
              className="inline-flex items-center bg-white text-legora-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors rounded-sm"
            >
              무료로 시작하기
            </button>
            <p className="text-sm text-gray-500 font-sans">* 추천인 코드: <span className="text-white font-medium">pyt1234</span></p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-20 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="col-span-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6 font-sans">Product</h3>
            <ul className="space-y-4 font-sans">
              <li><button onClick={() => scrollToSection('features')} className="text-sm text-gray-300 hover:text-white transition-colors">서비스 개요</button></li>
              <li><button onClick={() => scrollToSection('features')} className="text-sm text-gray-300 hover:text-white transition-colors">부가세 신고</button></li>
              <li><button onClick={() => scrollToSection('features')} className="text-sm text-gray-300 hover:text-white transition-colors">간편 장부</button></li>
              <li><button onClick={() => scrollToSection('features')} className="text-sm text-gray-300 hover:text-white transition-colors">AI 세무비서</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6 font-sans">Solutions</h3>
            <ul className="space-y-4 font-sans">
              <li><button onClick={() => scrollToSection('guide')} className="text-sm text-gray-300 hover:text-white transition-colors">프리랜서</button></li>
              <li><button onClick={() => scrollToSection('guide')} className="text-sm text-gray-300 hover:text-white transition-colors">개인사업자</button></li>
              <li><button onClick={() => scrollToSection('guide')} className="text-sm text-gray-300 hover:text-white transition-colors">법인사업자</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-sm text-gray-300 hover:text-white transition-colors">절세 컨설팅</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6 font-sans">Customers</h3>
            <ul className="space-y-4 font-sans">
              <li><button onClick={() => scrollToSection('support')} className="text-sm text-gray-300 hover:text-white transition-colors">고객센터</button></li>
              <li><button onClick={() => scrollToSection('support')} className="text-sm text-gray-300 hover:text-white transition-colors">문의하기</button></li>
              <li><button onClick={() => scrollToSection('guide')} className="text-sm text-gray-300 hover:text-white transition-colors">이용 가이드</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6 font-sans">Company</h3>
            <ul className="space-y-4 font-sans">
              <li><button onClick={() => scrollToSection('hero')} className="text-sm text-gray-300 hover:text-white transition-colors">미니택스 소개</button></li>
              <li><a href="mailto:ace9164@naver.com" className="text-sm text-gray-300 hover:text-white transition-colors">제휴 문의</a></li>
              <li><span className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors flex items-center gap-1">Instagram <ArrowUpRight size={12}/></span></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6 font-sans">Legal</h3>
            <ul className="space-y-4 font-sans">
              <li><span className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors">이용약관</span></li>
              <li><span className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors">개인정보처리방침</span></li>
              <li><span className="text-sm text-gray-300 cursor-pointer hover:text-white transition-colors">사업자정보확인</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big Typography Bottom */}
      <div className="w-full overflow-hidden leading-none flex justify-center items-end pointer-events-none select-none border-t border-gray-800 pt-4">
        <h1 className="text-[15vw] md:text-[22vw] font-serif text-white tracking-tight leading-[0.75] translate-y-[2%] opacity-90">
          MINITAX
        </h1>
      </div>
    </footer>
  );
};