import React from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, MapPin, Clock, TrendingUp } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F1EB]">
      {/* Header Section */}
      <section className="pt-40 pb-20 px-6 lg:px-12 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6 font-sans">Contact & Support</h4>
          <h1 className="text-6xl md:text-8xl font-serif text-legora-black mb-8 leading-none tracking-tight break-keep">
            무엇을<br/>도와드릴까요?
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl leading-relaxed font-sans break-keep">
            현직 회계사 및 세무 전문가가 여러분의 세무 신고 및 플랫폼 이용에 관한 모든 질문에 친절하게 답변해 드립니다.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-[1440px] mx-auto">
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

        {/* Detailed Info Section */}
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
      </section>
    </div>
  );
};