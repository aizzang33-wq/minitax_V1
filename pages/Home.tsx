import React from 'react';
import { 
  ArrowRight, Play, TrendingUp, Shield, Search, FileText, Database, Globe, CheckCircle2, 
  LayoutDashboard, RefreshCw, Smartphone, Check, Info, Mail, MessageCircle, Phone, MapPin, Clock 
} from 'lucide-react';
import { Plan } from '../types';

// Pricing Data
const plans: Plan[] = [
  {
    id: 'free',
    name: 'Basic',
    price: '0',
    period: '월',
    description: '프로그램 기능을 체험하고 기본적인 관리를 시작하는 분들을 위한 플랜',
    features: [
      '매출/매입 내역 조회',
      '기본 간편 장부 작성',
      '예상 세액 조회',
      '커뮤니티 지원'
    ],
    buttonText: '무료로 시작하기'
  },
  {
    id: 'standard',
    name: 'Self-Biz',
    price: '30,000',
    period: '월',
    description: '소상공인 및 1인 법인을 위한 완벽한 자가 기장 솔루션',
    features: [
      'Basic 기능 전체 포함',
      '실시간 재무제표 자동 생성',
      '부가세/종합소득세 신고 파일',
      '법인세 신고 지원 (자가)',
      '1:1 채팅 상담'
    ],
    recommended: true,
    buttonText: '지금 시작하기'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '50,000+',
    period: '월',
    description: '전문 회계사의 정기적인 검토가 포함된 안심 서비스',
    features: [
      'Self-Biz 기능 전체 포함',
      '분기별 회계사 장부 검토',
      '세무 리스크 진단 리포트',
      '무제한 우선 상담',
      '정부 지원금 알림 서비스'
    ],
    buttonText: '전문가 상담하기'
  }
];

// Guide Steps Data
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

// Service Data (6 Cards)
const services = [
  {
    title: "미니택스",
    desc: "사업자가 직접 장부작성하고 부가가치세 및 종합소득세 신고가 가능한 세무 프로그램입니다. 세무대리인이 만들어 어려운 입력과 신고를 도와드립니다.",
    tag: "정규 서식 제공",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop", // Dashboard
  },
  {
    title: "회원정보",
    desc: "국세청 사업자정보를 기반하여 세목분류상황 및 세금 신고시 참고사항을 실시간으로 확인하실 수 있습니다.",
    tag: "국세청 실시간 연동",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop", // Digital ID/Info
  },
  {
    title: "부가가치세신고",
    desc: "홈택스 연동으로 실시간 매입매출 자료조회가 가능하며, 자동수집과 간편입력으로 직접 부가가치세 신고가 가능합니다.",
    tag: "자동 수집 및 신고",
    img: "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?q=80&w=1000&auto=format&fit=crop", // Calculation/Finance (Updated)
  },
  {
    title: "스피드절세컨설팅",
    desc: "창업중소기업 세액감면, 중소기업 특별세액감면 등 다양한 세액공제·감면을 사전에 확인하여 합법적으로 절세하세요.",
    tag: "세액공제 사전 진단",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop", // Meeting/Consulting
  },
  {
    title: "장부작성",
    desc: "직접 장부를 만들어 내 사업의 흐름을 정확하게 파악할 수 있습니다. 매월 손익을 확인하고 종합소득세 신고까지 가능합니다.",
    tag: "복식부기 자동화",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop", // Writing/Workspace
  },
  {
    title: "종합소득세신고",
    desc: "내가 만든 장부를 기준으로 종합소득세 신고가 가능합니다. 부양가족 등 간단 정보만 입력하면 신고부터 납부까지 완료됩니다.",
    tag: "간편 신고 및 납부",
    img: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=2000&auto=format&fit=crop", // Happy/Success
  },
];

export const Home: React.FC = () => {
  const handleStart = () => {
    window.open('https://minitax.co.kr/dashboard/minitax_hp/sign_in?recommender=pyt1234', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F1EB]">
      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section id="hero" className="pt-40 pb-20 lg:pt-56 lg:pb-32 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="mb-20 lg:mb-28">
          <h1 className="flex flex-col font-serif text-legora-black tracking-tight leading-[1.15]">
            <span className="text-6xl md:text-8xl lg:text-[7.5rem] self-start animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              세무 관리,
            </span>
            <span className="text-6xl md:text-8xl lg:text-[7.5rem] self-end text-right mt-2 md:mt-4 lg:pr-12 text-gray-800 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              한계를 넘어서다.
            </span>
          </h1>
        </div>
        
        {/* Hero Image */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-gray-100 rounded-sm overflow-hidden mb-16 group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern Office" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/0"></div>
          
          {/* Floating UI Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:bottom-12 md:left-auto md:right-12 bg-white p-6 md:p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-sm w-full animate-fade-in-up border border-gray-100 z-10">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-sans font-bold text-gray-900">Quick Actions</h3>
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="space-y-3">
               <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group/item">
                  <div className="flex items-center gap-3">
                     <div className="bg-blue-100 p-2 rounded-md text-blue-600">
                        <FileText size={16} />
                     </div>
                     <span className="text-sm font-medium text-gray-700">부가세 신고</span>
                  </div>
                  <ArrowRight size={14} className="text-gray-400 group-hover/item:text-gray-900 group-hover/item:translate-x-1 transition-all"/>
               </div>
               <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group/item">
                  <div className="flex items-center gap-3">
                     <div className="bg-purple-100 p-2 rounded-md text-purple-600">
                        <Database size={16} />
                     </div>
                     <span className="text-sm font-medium text-gray-700">장부 작성</span>
                  </div>
                  <ArrowRight size={14} className="text-gray-400 group-hover/item:text-gray-900 group-hover/item:translate-x-1 transition-all"/>
               </div>
               <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group/item">
                  <div className="flex items-center gap-3">
                     <div className="bg-orange-100 p-2 rounded-md text-orange-600">
                        <Globe size={16} />
                     </div>
                     <span className="text-sm font-medium text-gray-700">민원 증명</span>
                  </div>
                  <ArrowRight size={14} className="text-gray-400 group-hover/item:text-gray-900 group-hover/item:translate-x-1 transition-all"/>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-gray-300 pt-12">
          <div className="lg:col-span-8">
            <p className="text-2xl md:text-3xl font-normal leading-relaxed text-legora-black max-w-4xl word-keep-all font-sans">
              복잡한 세무 행정에서 벗어나 오직 사업의 본질에 집중하세요.<br className="hidden md:block" />
              전문 회계사가 직접 개발한 미니택스가 당신의 비즈니스 여정에 든든한 파트너가 되어드립니다.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-2">
            <button onClick={handleStart} className="bg-legora-black text-white px-8 py-4 text-base font-medium hover:bg-gray-800 transition-colors rounded-sm inline-flex items-center gap-2 shadow-lg group">
              무료 체험 시작하기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-500 font-sans">* 추천인 코드: <span className="text-legora-black font-semibold">pyt1234</span></p>
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <div className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12 opacity-80">
           <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-gray-300">MINITAX</span>
           <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-gray-400">National Tax Service</span>
           <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-gray-400">KICPA Accredited</span>
           <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-gray-400">Kakao Pay</span>
           <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-gray-400">Naver Certificate</span>
        </div>
      </div>

      {/* =========================================================================
          FEATURES SECTION (6 Cards Grid)
      ========================================================================== */}
      <section id="features" className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="mb-24 text-center">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6 font-sans">Smarter tools, Better outcomes</h4>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-legora-black break-keep">
            자료 수집부터 신고서 검토까지.<br/>
            모든 과정을 간소화하여 가치를 창출합니다.
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              {/* Image Area */}
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm z-10">
                   <span className="text-[10px] font-bold uppercase tracking-wider text-legora-black font-sans">{service.tag}</span>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif font-bold mb-4 text-legora-black">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 break-keep font-sans">
                  {service.desc}
                </p>
                <button 
                  onClick={handleStart}
                  className="w-full py-3 bg-gray-50 text-legora-black font-medium text-sm rounded-lg hover:bg-legora-black hover:text-white transition-colors flex items-center justify-center gap-2 group-btn font-sans"
                >
                  시작하기
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          GUIDE SECTION
      ========================================================================== */}
      <section id="guide" className="bg-white py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
          <div className="mb-32 max-w-3xl relative z-10">
            <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 font-sans">User Guide</span>
            <h1 className="text-6xl md:text-8xl font-serif text-legora-black mb-8 leading-none">How it works</h1>
            <p className="text-xl text-gray-600 font-light font-sans break-keep leading-relaxed max-w-2xl">
              복잡하고 어려운 세무 절차, 이제 미니택스와 함께 4단계로 단순화하세요.<br/>
              전문가의 노하우가 담긴 프로세스로 누구나 쉽고 정확하게 신고할 수 있습니다.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center py-24 group relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block absolute left-[50%] top-1/2 w-4 h-4 bg-legora-black rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white z-10"></div>
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
                  <div className="md:w-1/2 px-6 md:px-16 w-full">
                    {/* Fixed Image Visibility */}
                    <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl relative group-hover:-translate-y-2 transition-transform duration-700 ease-out bg-gray-100">
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
      </section>

      {/* =========================================================================
          PRICING SECTION
      ========================================================================== */}
      <section id="pricing" className="bg-[#F3F1EB] py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 font-sans">Pricing</h2>
            <h1 className="text-5xl md:text-6xl font-serif text-legora-black mb-8 leading-tight break-keep">
              성장의 모든 단계에 맞는<br />
              투명한 요금제
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed font-sans break-keep">
              미니택스 포인트 제도를 업계 최초로 운영합니다. 프로그램 이용 시 포인트로 결제대금을 차감하여 부담을 덜어드립니다. 
              <span className="block mt-2 text-sm text-gray-500">* 1포인트 = 1원 적용</span>
              <span className="block mt-1 text-sm font-medium text-minitax-blue">* 추천인 코드: pyt1234 입력 시 혜택 제공</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`flex flex-col p-8 md:p-10 rounded-sm transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-legora-black text-white shadow-2xl scale-105 z-10' 
                    : 'bg-white text-legora-black border border-gray-200 hover:border-gray-400'
                }`}
              >
                {plan.recommended && (
                  <div className="mb-6 flex items-center gap-2">
                    <span className="bg-minitax-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">Most Popular</span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-medium mb-4">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-sans font-bold">₩{plan.price}</span>
                    <span className={`ml-2 text-sm font-sans ${plan.recommended ? 'text-gray-400' : 'text-gray-500'}`}>/{plan.period}</span>
                  </div>
                  <p className={`text-sm mb-8 leading-relaxed font-sans ${plan.recommended ? 'text-gray-300' : 'text-gray-600'}`}>{plan.description}</p>
                  <hr className={`border-t mb-8 ${plan.recommended ? 'border-gray-700' : 'border-gray-100'}`} />
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.recommended ? 'text-minitax-blue' : 'text-green-600'}`} />
                        <span className={`text-sm font-sans ${plan.recommended ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={handleStart}
                  className={`w-full py-4 px-6 rounded-sm font-medium text-sm transition-all font-sans ${
                  plan.recommended 
                    ? 'bg-white text-legora-black hover:bg-gray-100' 
                    : 'bg-legora-black text-white hover:bg-gray-800'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 md:p-12 bg-white rounded-sm border border-gray-200">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="bg-[#F3F1EB] p-4 rounded-full">
                      <Info className="w-8 h-8 text-legora-black" />
                  </div>
                  <div>
                      <h3 className="text-xl font-serif font-bold text-legora-black mb-2">미니택스 패밀리 멤버십</h3>
                      <p className="text-gray-600 leading-relaxed font-sans text-sm md:text-base">
                          우월한 세무서비스의 편리함을 위하여 미니택스를 이용함과 더불어 미니택스 패밀리에 참여하여 함께 성공하도록 하세요. 
                          패밀리 회원은 수익 공유 및 포인트 리워드 프로그램에 자동 등록됩니다.
                      </p>
                  </div>
                  <button className="md:ml-auto whitespace-nowrap px-8 py-3 border border-legora-black text-legora-black hover:bg-legora-black hover:text-white transition-colors rounded-sm text-sm font-medium font-sans">
                      패밀리 신청하기
                  </button>
              </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ANYWHERE SECTION (Asymmetrical Grid)
      ========================================================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="mb-24 max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] text-legora-black mb-8 tracking-tighter break-keep">
                    미니택스는 사업자가 있는<br/>
                    <span className="italic font-serif text-gray-400">어디든 함께합니다.</span>
                </h2>
                <p className="text-xl text-gray-600 font-sans font-light">
                    사무실 책상 앞이든, 이동 중인 카페든 상관없습니다.<br/>
                    모든 기기에서 끊김 없는 완벽한 세무 경험을 제공합니다.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Fixed Image Visibility in Anywhere Section */}
                <div className="md:col-span-8 relative group overflow-hidden rounded-sm aspect-[16/10] bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop" 
                        alt="Office Work" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <p className="text-sm font-bold uppercase tracking-widest mb-2 font-sans">Core Service</p>
                        <h3 className="text-3xl font-serif">간편 장부 & 복식 부기</h3>
                    </div>
                </div>
                <div className="md:col-span-4 relative group overflow-hidden rounded-sm aspect-[4/5] bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop" 
                        alt="Mobile Meeting" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-2xl font-serif mb-1">종합소득세</h3>
                        <p className="text-xs text-gray-100 font-sans">언제 어디서나 간편하게</p>
                    </div>
                </div>
                <div className="md:col-span-4 relative group overflow-hidden rounded-sm aspect-[4/5] bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?q=80&w=1000&auto=format&fit=crop" 
                        alt="Calculation" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-2xl font-serif mb-1">부가가치세</h3>
                        <p className="text-xs text-gray-100 font-sans">자동 계산으로 정확하게</p>
                    </div>
                </div>
                <div className="md:col-span-8 relative group overflow-hidden rounded-sm aspect-[16/10] bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
                        alt="Corporate Building" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <p className="text-sm font-bold uppercase tracking-widest mb-2 font-sans">Enterprise</p>
                        <h3 className="text-3xl font-serif">법인세 신고</h3>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* =========================================================================
          VISION SECTION
      ========================================================================== */}
      <section className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
                <h2 className="text-5xl font-serif text-legora-black">Our Vision</h2>
            </div>
            <div className="lg:col-span-4">
                <p className="text-sm font-medium leading-relaxed mb-8 word-keep-all font-sans text-gray-800">
                    회계사는 전문적 판단과 전략을 제시하고, AI는 속도와 확장성, 정확성을 제공합니다. 이 둘의 결합은 세무 업무의 새로운 가능성을 열어줍니다.
                </p>
                <p className="text-sm font-medium leading-relaxed word-keep-all font-sans text-gray-800">
                    우리는 비전은 모든 사업자가 세금 걱정 없이 성장에만 집중할 수 있는 환경을 만드는 것입니다. 반복적인 행정 업무는 제거하고, 혜택은 극대화합니다.
                </p>
            </div>
            <div className="lg:col-span-4">
                <p className="text-sm font-medium leading-relaxed mb-8 word-keep-all font-sans text-gray-800">
                    우리는 단순한 프로그램을 넘어섭니다. 업계 전문가들과 함께 세무 서비스의 새로운 표준을 만들어가고 있습니다. 기술이 전문성을 보완하는 미래, 그 중심에 미니택스가 있습니다.
                </p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
             <div className="lg:col-span-3">
                 <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
                 </div>
                 <div className="mt-4">
                    <p className="font-bold text-xs font-sans">유새별 (Saebyeol Yu)</p>
                    <p className="text-[10px] text-gray-500 uppercase font-sans">Co-founder & CPA</p>
                 </div>
             </div>
             <div className="lg:col-span-9">
                 <div className="aspect-video relative overflow-hidden rounded-sm bg-gray-200">
                    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop" alt="Office Interior" className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-1000"/>
                 </div>
             </div>
        </div>
      </section>

      {/* =========================================================================
          COMPLIANCE SECTION
      ========================================================================== */}
      <section className="bg-legora-black text-white py-32 px-6 lg:px-12">
         <div className="max-w-[1440px] mx-auto text-center mb-24">
             <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4 font-sans">Certified & Compliant</div>
             <h2 className="text-3xl md:text-5xl font-serif leading-tight break-keep">
                 미니택스는 가장 엄격한 국제 보안 표준을<br/>
                 준수하여 고객의 데이터를 안전하게 보호합니다.
             </h2>
         </div>
         
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-800">
             <div className="p-8 border-r border-gray-800 border-b lg:border-b-0">
                 <h3 className="font-bold mb-2 font-sans">데이터 암호화</h3>
                 <p className="text-xs text-gray-400 leading-relaxed mb-12 font-sans">
                     모든 금융 및 개인 정보는 전송 및 저장 시 최고 수준의 알고리즘으로 암호화되어 관리됩니다.
                 </p>
                 <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center opacity-50">
                     <Shield size={20}/>
                 </div>
             </div>
             <div className="p-8 border-r border-gray-800 border-b lg:border-b-0">
                 <h3 className="font-bold mb-2 font-sans">클라우드 보안</h3>
                 <p className="text-xs text-gray-400 leading-relaxed mb-12 font-sans">
                     24시간 모니터링되는 보안 클라우드 환경에서 데이터를 운영하며 외부 침입을 완벽히 차단합니다.
                 </p>
                 <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center opacity-50">
                     <Shield size={20}/>
                 </div>
             </div>
             <div className="p-8 border-r border-gray-800 border-b lg:border-b-0">
                 <h3 className="font-bold mb-2 font-sans">개인정보 보호</h3>
                 <p className="text-xs text-gray-400 leading-relaxed mb-12 font-sans">
                     관련 법령 및 GDPR 수준의 엄격한 개인정보 처리 방침을 준수하여 고객의 권리를 보장합니다.
                 </p>
                 <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center opacity-50">
                     <Shield size={20}/>
                 </div>
             </div>
             <div className="p-8">
                 <h3 className="font-bold mb-2 font-sans">국세청 인증</h3>
                 <p className="text-xs text-gray-400 leading-relaxed mb-12 font-sans">
                     국세청 홈택스 연동 및 전자신고 사업자로 정식 인증받은 신뢰할 수 있는 플랫폼입니다.
                 </p>
                 <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center opacity-50">
                     <Shield size={20}/>
                 </div>
             </div>
         </div>
      </section>

      {/* =========================================================================
          QUOTE SECTION
      ========================================================================== */}
      <section className="bg-[#E5E3DD] py-32 px-6 lg:px-12">
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-5">
                 <div className="text-6xl font-serif text-legora-black mb-6">”</div>
                 <h2 className="text-2xl md:text-4xl font-serif text-legora-black leading-loose mb-8 word-keep-all">
                     이제 세금 신고 때문에 밤을 새우지 않습니다. 미니택스 덕분에 비즈니스 본질에만 집중할 수 있게 되었습니다.
                 </h2>
                 <div>
                     <p className="font-bold text-sm font-sans">김민수 대표</p>
                     <p className="text-xs text-gray-600 uppercase font-sans">스타트업 '퓨처랩' 창업자</p>
                 </div>
             </div>
             <div className="lg:col-span-7 h-full">
                 <div className="aspect-video bg-gray-300 relative overflow-hidden rounded-sm group cursor-pointer">
                     <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop" alt="Testimonial Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-20 h-20 bg-white/30 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-colors shadow-lg">
                             <Play className="w-8 h-8 text-white fill-current ml-1"/>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* =========================================================================
          SUPPORT SECTION
      ========================================================================== */}
      <section id="support" className="py-32 px-6 lg:px-12 max-w-[1440px] mx-auto bg-[#F3F1EB]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-24">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6 font-sans">Contact & Support</h4>
              <h1 className="text-6xl md:text-8xl font-serif text-legora-black mb-8 leading-none tracking-tight break-keep">
                무엇을<br/>도와드릴까요?
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl leading-relaxed font-sans break-keep">
                현직 회계사 및 세무 전문가가 여러분의 세무 신고 및 플랫폼 이용에 관한 모든 질문에 친절하게 답변해 드립니다.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
             {/* Benefit Card */}
             <div className="group bg-white p-10 rounded-sm border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-8 w-12 h-12 bg-[#F3F1EB] rounded-full flex items-center justify-center group-hover:bg-legora-black group-hover:text-white transition-colors">
                   <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif mb-4">회원가입시 혜택</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-sans break-keep">
                  회원가입시 추천인 코드를 입력해서 패밀리 멤버쉽 혜택을 받으세요. 패밀리 멤버시 본인으로 추천되면 비지니스가 이뤄집니다.
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-400 font-sans">추천인 코드</span>
                   <span className="text-legora-black font-medium text-sm flex items-center gap-2 font-sans">
                      pyt1234
                   </span>
                </div>
             </div>
             
             {/* Email Card */}
             <div className="group bg-white p-10 rounded-sm border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-8 w-12 h-12 bg-[#F3F1EB] rounded-full flex items-center justify-center group-hover:bg-legora-black group-hover:text-white transition-colors">
                   <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif mb-4">이메일 문의</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-sans break-keep">
                  복잡한 세무 이슈나 자료 검토가 필요하신가요? 상세 내용과 함께 이메일을 보내주시면 24시간 내에 답변드립니다.
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-400 font-sans">24시간 접수 가능</span>
                   <a href="mailto:ace9164@naver.com" className="text-legora-black font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-sans">
                      ace9164@naver.com <ArrowRight size={14}/>
                   </a>
                </div>
             </div>

             {/* Phone Card */}
             <div className="group bg-white p-10 rounded-sm border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-8 w-12 h-12 bg-[#F3F1EB] rounded-full flex items-center justify-center group-hover:bg-legora-black group-hover:text-white transition-colors">
                   <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif mb-4">전화 상담</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-sans break-keep">
                  긴급한 기술적 문제나 결제 관련 문의가 있으신가요? 고객센터로 직접 연락주시면 신속하게 처리해 드립니다.
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-400 font-sans">긴급 문의</span>
                   <span className="text-legora-black font-medium text-sm font-sans">
                      02-6272-3608
                   </span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 border-t border-gray-300 pt-24">
              <div>
                  <h2 className="text-4xl font-serif mb-8">오시는 길</h2>
                  <div className="flex items-start gap-4 mb-8">
                      <MapPin className="w-6 h-6 text-legora-black mt-1 flex-shrink-0" />
                      <div>
                          <p className="text-lg font-medium mb-2 font-sans">함께하는 세무회계 본사</p>
                          <p className="text-gray-600 font-light leading-relaxed font-sans">
                              서울특별시 서초구 사임당로 174<br/>
                              강남미래타워 9층 (06627)<br/>
                              Republic of Korea
                          </p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-legora-black mt-1 flex-shrink-0" />
                      <div>
                          <p className="text-lg font-medium mb-2 font-sans">운영 시간</p>
                          <p className="text-gray-600 font-light leading-relaxed font-sans">
                              월요일 - 금요일: 09:00 - 18:00<br/>
                              점심 시간: 12:00 - 13:00<br/>
                              <span className="text-sm text-gray-400 mt-2 block">* 주말 및 공휴일 휴무</span>
                          </p>
                      </div>
                  </div>
              </div>

              <div>
                  <h2 className="text-4xl font-serif mb-8">자주 묻는 질문</h2>
                  <div className="space-y-6">
                      {[
                          { q: "회계 지식이 없어도 사용 가능한가요?", a: "네, 가능합니다. 미니택스는 비전문가를 위해 설계되었습니다. 영수증과 기본 정보만 입력하면 복식부기 장부와 신고서가 자동으로 완성됩니다." },
                          { q: "무료 플랜과 유료 플랜의 차이는 무엇인가요?", a: "무료 플랜은 기본적인 장부 조회 및 체험이 가능합니다. 유료 플랜(Self-Biz)은 홈택스 신고용 전자 파일 생성, 재무제표 자동 작성 기능이 포함됩니다." },
                          { q: "회원 가입은 어떻게 하나요?", a: "마지막 추천인 코드 pyt1234 를 작성" }
                      ].map((faq, idx) => (
                          <div key={idx} className="border-b border-gray-200 pb-6">
                              <h4 className="text-lg font-sans font-medium text-legora-black mb-2 break-keep">{faq.q}</h4>
                              <p className="text-gray-600 font-light leading-relaxed text-sm font-sans break-keep">{faq.a}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};