import React from 'react';

const steps = [
  {
    num: "01",
    title: "회원가입 및 연동",
    subtitle: "Sign Up & Connect",
    desc: "PC 웹버전(minitax.co.kr)으로 접속하세요. 홈택스 아이디/비번 또는 인증서로 간편하게 사업자 정보를 연동합니다. 복잡한 서류 제출 없이, 단 3분이면 충분합니다.",
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "자료 수집 및 장부 작성",
    subtitle: "Data Collection & Bookkeeping",
    desc: "국세청의 매출/매입 자료를 자동으로 불러옵니다. 미니택스의 AI가 사업 관련 지출을 자동으로 분류하며, '확정' 버튼만 누르면 전문가 수준의 복식부기 장부가 완성됩니다.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "세무 신고서 자동 생성",
    subtitle: "Auto-Generation",
    desc: "작성된 장부를 바탕으로 부가가치세 및 종합소득세 신고서가 실시간으로 자동 완성됩니다. 놓치기 쉬운 세액 공제 항목까지 AI가 꼼꼼하게 체크하여 절세 혜택을 극대화합니다.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "원클릭 신고 제출",
    subtitle: "One-Click Submission",
    desc: "생성된 전자신고 파일을 홈택스에 업로드하거나, 미니택스 내에서 '신고 제출' 버튼을 눌러 원스톱으로 처리가 가능합니다. 접수증과 납부서까지 즉시 확인하세요.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
  }
];

export const Guide: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F1EB] py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="mb-32 max-w-3xl relative z-10">
          <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 font-sans">User Guide</span>
          <h1 className="text-6xl md:text-8xl font-serif text-legora-black mb-8 leading-none">How it works</h1>
          <p className="text-xl text-gray-600 font-light font-sans break-keep leading-relaxed max-w-2xl">
            복잡하고 어려운 세무 절차, 이제 미니택스와 함께 4단계로 단순화하세요.<br/>
            전문가의 노하우가 담긴 프로세스로 누구나 쉽고 정확하게 신고할 수 있습니다.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center py-24 group relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Dot on the line */}
                <div className="hidden md:block absolute left-[50%] top-1/2 w-4 h-4 bg-legora-black rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#F3F1EB] z-10"></div>

                {/* Text Content */}
                <div className={`md:w-1/2 mb-12 md:mb-0 px-6 md:px-16 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="block text-8xl font-serif text-gray-200 mb-6 font-bold opacity-50 select-none group-hover:text-minitax-blue/20 transition-colors duration-500">
                    {step.num}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-legora-black mb-2">{step.title}</h3>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-minitax-blue mb-6 font-sans">{step.subtitle}</h4>
                  <p className="text-gray-600 leading-relaxed font-light font-sans text-base md:text-lg break-keep">
                    {step.desc}
                  </p>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2 px-6 md:px-16 w-full">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl relative group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                    <div className="absolute inset-0 bg-legora-black/0 group-hover:bg-legora-black/5 transition-colors duration-500 z-10"></div>
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};