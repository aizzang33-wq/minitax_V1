import React from 'react';
import { LayoutDashboard, FileSpreadsheet, RefreshCw, Smartphone, TrendingUp, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#F3F1EB] pt-40 pb-20 px-6 lg:px-12 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto text-center max-w-3xl">
          <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 font-sans">Key Features</span>
          <h1 className="text-5xl md:text-7xl font-serif text-legora-black mb-8 break-keep leading-tight">
            강력한 기능,<br/>
            심플한 디자인.
          </h1>
          <p className="text-xl text-gray-600 font-light font-sans break-keep leading-relaxed">
            미니택스만의 독창적이고 차별화된 서비스를 경험하세요.<br/>
            현직 회계사가 직접 개발하여 더 정교하고 안전합니다.
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {/* Feature 1 */}
            <div className="group">
                <div className="mb-8 overflow-hidden bg-gray-100 rounded-sm aspect-[16/10] shadow-md hover:shadow-xl transition-shadow duration-500">
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" alt="One-Stop Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="bg-[#F3F1EB] p-3 rounded-full flex-shrink-0">
                        <LayoutDashboard className="w-6 h-6 text-legora-black"/>
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif mb-4 text-legora-black">One-Stop Platform</h3>
                        <p className="text-gray-600 leading-relaxed font-light font-sans text-base break-keep">
                            자체 자동화 세무프로그램 개발 및 인프라 구축. 부가가치세, 종합소득세 신고는 물론 
                            세금계산서 수수내역, 민원증명 등 모든 세무 업무를 한 곳에서 처리할 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
                <div className="mb-8 overflow-hidden bg-gray-100 rounded-sm aspect-[16/10] shadow-md hover:shadow-xl transition-shadow duration-500">
                   <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2000&auto=format&fit=crop" alt="Realtime Automation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="bg-[#F3F1EB] p-3 rounded-full flex-shrink-0">
                        <RefreshCw className="w-6 h-6 text-legora-black"/>
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif mb-4 text-legora-black">Real-time Automation</h3>
                        <p className="text-gray-600 leading-relaxed font-light font-sans text-base break-keep">
                            내가 만든 장부로 합리적 절세가 가능한 자동화 시스템. 장부를 작성하는 즉시 재무제표가 변동되며, 
                            국세청 홈택스 자료를 실시간으로 불러와 자동 분개합니다.
                        </p>
                    </div>
                </div>
            </div>

             {/* Feature 3 */}
             <div className="group">
                <div className="mb-8 overflow-hidden bg-gray-100 rounded-sm aspect-[16/10] shadow-md hover:shadow-xl transition-shadow duration-500">
                   <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" alt="Private Chat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="bg-[#F3F1EB] p-3 rounded-full flex-shrink-0">
                        <Smartphone className="w-6 h-6 text-legora-black"/>
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif mb-4 text-legora-black">Private Chat & Cloud</h3>
                        <p className="text-gray-600 leading-relaxed font-light font-sans text-base break-keep">
                            미니택스만의 전용 채팅(카카오톡 대체, AI챗봇 발전 예정) 및 파일 보관함 기능을 탑재했습니다. 
                            종이 세금계산서나 누락된 카드 영수증이 있다면 채팅으로 도움을 요청하세요.
                        </p>
                    </div>
                </div>
            </div>

             {/* Feature 4 */}
             <div className="group">
                <div className="mb-8 overflow-hidden bg-gray-100 rounded-sm aspect-[16/10] shadow-md hover:shadow-xl transition-shadow duration-500">
                   <img src="https://images.unsplash.com/photo-1554224154-260327c00c40?q=80&w=2000&auto=format&fit=crop" alt="Cost Efficiency" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
                <div className="flex gap-6 items-start">
                    <div className="bg-[#F3F1EB] p-3 rounded-full flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-legora-black"/>
                    </div>
                    <div>
                        <h3 className="text-3xl font-serif mb-4 text-legora-black">Cost Efficiency</h3>
                        <p className="text-gray-600 leading-relaxed font-light font-sans text-base break-keep">
                            포인트 비즈를 통한 비용 절감 및 사업 확장의 동반자 역할. 
                            사용하고 알려서 얻는 포인트 시스템으로 프로그램 이용료 부담을 최소화합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};