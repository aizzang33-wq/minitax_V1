import React from 'react';
import { Check, Info } from 'lucide-react';
import { Plan } from '../types';

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

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F1EB] py-32">
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
              
              <button className={`w-full py-4 px-6 rounded-sm font-medium text-sm transition-all font-sans ${
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
    </div>
  );
};