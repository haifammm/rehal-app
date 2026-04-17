```react
import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  Settings, 
  Search, 
  Home, 
  User, 
  Users, 
  Settings2, 
  GraduationCap, 
  HeartPulse, 
  Car, 
  Megaphone, 
  MessageSquare, 
  Activity, 
  ChevronLeft,
  ChevronRight,
  Battery,
  Signal
} from 'lucide-react';

// --- قاموس الترجمة ---
const translations = {
  ar: {
    language: 'اللغة',
    alerts: 'التنبيهات',
    arabic: 'اللغة العربية',
    english: 'English language',
    otherLang: 'اخرى',
    welcome: 'حياك الله',
    in: 'في',
    rehal: 'رِحـال',
    start: 'ابـدا',
    whoAreYou: 'من أنت؟',
    enter: 'ادخل',
    search: 'البحث عن خدمة',
    home: 'الرئيسية',
    myServices: 'خدماتي',
    myFamily: 'عائلتي',
    otherServices: 'خدمات اخرى',
    digitalDocs: 'وثائقي الرقمية',
    viewAll: 'عرض الكل',
    categories: 'التصنيفات',
    education: 'التعليم',
    health: 'الصحة',
    vehicles: 'المركبات',
    campaignTracking: 'تتبع الحملة',
    instantAds: 'الإعلانات الفورية',
    chat: 'محادثة',
    familyTracking: 'تتبع الأسرة',
    dependents: 'التابعين'
  },
  en: {
    language: 'Language',
    alerts: 'Alerts',
    arabic: 'اللغة العربية',
    english: 'English language',
    otherLang: 'Other',
    welcome: 'Welcome',
    in: 'To',
    rehal: 'REHAL',
    start: 'Start',
    whoAreYou: 'Who are you?',
    enter: 'Enter',
    search: 'Search for a service',
    home: 'Home',
    myServices: 'Services',
    myFamily: 'Family',
    otherServices: 'Other',
    digitalDocs: 'Digital Documents',
    viewAll: 'View All',
    categories: 'Categories',
    education: 'Education',
    health: 'Health',
    vehicles: 'Vehicles',
    campaignTracking: 'Campaign Tracking',
    instantAds: 'Instant Ads',
    chat: 'Chat',
    familyTracking: 'Family Tracking',
    dependents: 'Dependents'
  }
};

const App = () => {
  // حالات التطبيق (States)
  const [currentScreen, setCurrentScreen] = useState('splash'); // splash, welcome, usertype, dashboard
  const [currentTab, setCurrentTab] = useState('home'); // home, services, family
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState('citizen');
  const [lang, setLang] = useState('ar'); // حالة اللغة الحالية

  const t = translations[lang]; // متغير يحمل نصوص اللغة المحددة

  // قائمة أنواع المستخدمين
  const userTypes = [
    { id: 'provider', ar: 'جهة خدمية', en: 'Service Provider' },
    { id: 'citizen', ar: 'مواطن', en: 'Citizen' },
    { id: 'resident', ar: 'مقيم', en: 'Resident' },
    { id: 'visitor', ar: 'زائر', en: 'Visitor' },
  ];

  // الانتقال التلقائي من شاشة البداية (Splash) إلى شاشة الترحيب
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('welcome');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // تغيير اللغة
  const handleLangChange = (newLang) => {
    setLang(newLang);
    setShowLangMenu(false);
  };

  // --- المكونات المشتركة --- //

  // شريط الحالة العلوي (Status Bar)
  const StatusBar = () => (
    <div className="flex justify-between items-center px-6 pt-3 pb-2 text-white text-xs z-50 relative" dir="ltr">
      <div className="flex items-center gap-1">
        <Battery className="w-5 h-5" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl top-0"></div>
      <div className="flex items-center gap-1 font-semibold">
        <span>1:20</span>
        <Signal className="w-4 h-4 ml-1" />
        <span>5G</span>
      </div>
    </div>
  );

  // الشعار الرئيسي
  const Logo = ({ small = false }) => (
    <div className={`flex flex-col items-center ${small ? 'scale-75 origin-top' : ''}`}>
      <div className="relative">
        <h1 className="text-white text-5xl font-bold mb-1 tracking-wide">{lang === 'ar' ? 'رِحـال' : 'REHAL'}</h1>
        {/* الخط الأخضر المائل تحت كلمة رحال */}
        <div className={`absolute -bottom-1 ${lang === 'ar' ? 'right-2' : 'left-2'} w-12 h-1 bg-[#4A6455] transform -rotate-6`}></div>
      </div>
      <div className="flex items-center gap-2 mt-2 text-[#4A6455] font-bold tracking-widest">
        <span className="text-white text-sm">*</span>
        <span className="text-sm">REHAL</span>
        <span className="text-white text-sm">*</span>
      </div>
    </div>
  );

  // الخلفية المظلمة للمبنى
  const BackgroundBuilding = () => (
    <div className="absolute bottom-0 w-full h-[50%] overflow-hidden opacity-40 pointer-events-none z-0">
      <div className="w-full h-full bg-gradient-to-t from-black to-transparent absolute z-10"></div>
      <div className="w-full h-full flex justify-center items-end pb-0">
        <div className="w-48 h-96 bg-[#1a1a1a] border-t-2 border-l-2 border-r-2 border-gray-800 flex flex-col transform perspective-[1000px] rotateX-[20deg]">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-1 border-b border-gray-800 w-full"></div>
          ))}
        </div>
      </div>
    </div>
  );

  // شريط التنقل السفلي
  const BottomNavigation = () => (
    <div className="absolute bottom-0 w-full bg-[#1e1e1e] rounded-t-3xl border-t border-gray-800 px-6 py-4 flex justify-between items-center z-50">
      
      <div className="flex flex-col items-center gap-1 cursor-pointer w-1/4" onClick={() => setCurrentTab('home')}>
        <Home className={`w-6 h-6 ${currentTab === 'home' ? 'text-[#7D9D8A]' : 'text-gray-400'}`} />
        <span className={`text-[10px] ${currentTab === 'home' ? 'text-[#7D9D8A]' : 'text-gray-400'}`}>{t.home}</span>
      </div>

      <div className="flex flex-col items-center gap-1 cursor-pointer w-1/4" onClick={() => setCurrentTab('services')}>
        <User className={`w-6 h-6 ${currentTab === 'services' ? 'text-[#7D9D8A]' : 'text-gray-400'}`} />
        <span className={`text-[10px] ${currentTab === 'services' ? 'text-[#7D9D8A]' : 'text-gray-400'}`}>{t.myServices}</span>
      </div>

      <div className="flex flex-col items-center gap-1 cursor-pointer w-1/4" onClick={() => setCurrentTab('family')}>
        <Users className={`w-6 h-6 ${currentTab === 'family' ? 'text-[#7D9D8A]' : 'text-gray-400'}`} />
        <span className={`text-[10px] ${currentTab === 'family' ? 'text-[#7D9D8A]' : 'text-gray-400'}`}>{t.myFamily}</span>
      </div>

      <div className="flex flex-col items-center gap-1 cursor-pointer w-1/4" onClick={() => setCurrentTab('other')}>
        <Settings2 className="w-6 h-6 text-gray-400" />
        <span className="text-[10px] text-gray-400">{t.otherServices}</span>
      </div>

    </div>
  );

  // غلاف أساسي لضبط الخط والاتجاه
  const AppWrapper = ({ children }) => (
    <div 
      className="min-h-screen bg-[#0D1110] flex items-center justify-center p-4" 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} // تعيين الاتجاه بناءً على اللغة
      style={{ fontFamily: "'Harir', sans-serif" }} 
    >
      <div className="w-[375px] h-[812px] bg-[#111111] rounded-[3rem] shadow-2xl relative overflow-hidden border-[6px] border-gray-900 flex flex-col">
        {children}
      </div>
    </div>
  );

  // --- الشاشات --- //

  // 1. شاشة البداية (Splash)
  if (currentScreen === 'splash') {
    return (
      <AppWrapper>
        <div className="flex flex-col justify-center items-center h-full">
          <StatusBar />
          <div className="relative z-10 -mt-20 flex-1 flex flex-col justify-center">
            <Logo />
          </div>
          <BackgroundBuilding />
        </div>
      </AppWrapper>
    );
  }

  // 2. شاشة الترحيب (Welcome)
  if (currentScreen === 'welcome') {
    return (
      <AppWrapper>
        <StatusBar />
        
        {/* Header Icons */}
        <div className={`flex justify-start px-6 pt-6 gap-6 relative z-20`}>
          <div className="flex flex-col items-center gap-1 cursor-pointer relative" onClick={() => setShowLangMenu(!showLangMenu)}>
            <Settings className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-400 text-[10px]">{t.language}</span>
            
            {/* قائمة اللغة المنبثقة */}
            {showLangMenu && (
              <div className={`absolute top-14 ${lang === 'ar' ? 'right-0' : 'left-0'} bg-[#161616] border border-gray-800 rounded-2xl p-3 w-48 shadow-2xl z-50`}>
                <div className="flex flex-col gap-2">
                  <button onClick={() => handleLangChange('ar')} className="flex justify-between items-center bg-[#262626] rounded-xl px-4 py-2 text-white text-sm hover:bg-[#333]">
                    <span>{t.arabic}</span>
                    <span className="text-xs">*</span>
                  </button>
                  <button onClick={() => handleLangChange('en')} className="flex justify-between items-center bg-[#262626] rounded-xl px-4 py-2 text-white text-sm hover:bg-[#333]">
                    <span>{t.english}</span>
                    <span className="text-xs">*</span>
                  </button>
                  <button className="flex justify-between items-center bg-[#262626] rounded-xl px-4 py-2 text-white text-sm hover:bg-[#333]">
                    <span>{t.otherLang}</span>
                    <span className="text-xs">*</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bell className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-400 text-[10px]">{t.alerts}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center pt-24 relative z-10 px-8">
          <h2 className="text-white text-5xl font-bold mb-4">{t.welcome}</h2>
          <div className="flex items-center gap-4">
            {lang === 'ar' && <h2 className="text-white text-4xl font-bold">{t.in}</h2>}
            <div className="relative">
              <h1 className="text-white text-5xl font-bold mb-1 tracking-wide">{t.rehal}</h1>
              <div className={`absolute -bottom-1 ${lang === 'ar' ? 'right-2' : 'left-2'} w-10 h-1 bg-[#4A6455] transform -rotate-6`}></div>
              <div className="flex items-center justify-center gap-2 mt-2 text-[#4A6455] font-bold tracking-widest w-full">
                <span className="text-white text-xs">*</span>
                <span className="text-xs">REHAL</span>
                <span className="text-white text-xs">*</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setCurrentScreen('usertype')}
            className="mt-20 w-full bg-[#5C7162] text-white py-3 rounded-full text-xl font-bold hover:bg-[#4A5D50] transition-colors"
          >
            {t.start}
          </button>
        </div>

        <BackgroundBuilding />
      </AppWrapper>
    );
  }

  // 3. شاشة نوع المستخدم (User Type)
  if (currentScreen === 'usertype') {
    return (
      <AppWrapper>
        <StatusBar />
        
        <div className="flex justify-start px-6 pt-6 gap-6 relative z-20">
          <div className="flex flex-col items-center gap-1 cursor-pointer relative" onClick={() => setShowLangMenu(!showLangMenu)}>
            <Settings className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-400 text-[10px]">{t.language}</span>
             {showLangMenu && (
              <div className={`absolute top-14 ${lang === 'ar' ? 'right-0' : 'left-0'} bg-[#161616] border border-gray-800 rounded-2xl p-3 w-48 shadow-2xl z-50`}>
                <div className="flex flex-col gap-2">
                  <button onClick={() => handleLangChange('ar')} className="flex justify-between items-center bg-[#262626] rounded-xl px-4 py-2 text-white text-sm hover:bg-[#333]">
                    <span>{t.arabic}</span><span className="text-xs">*</span>
                  </button>
                  <button onClick={() => handleLangChange('en')} className="flex justify-between items-center bg-[#262626] rounded-xl px-4 py-2 text-white text-sm hover:bg-[#333]">
                    <span>{t.english}</span><span className="text-xs">*</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bell className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-400 text-[10px]">{t.alerts}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center pt-10 relative z-10 px-8">
          <div className="scale-75 mb-4">
            <h2 className="text-white text-4xl font-bold mb-2 text-center">{t.welcome}</h2>
            <div className="flex items-center justify-center gap-3">
              {lang === 'ar' && <h2 className="text-white text-3xl font-bold">{t.in}</h2>}
              <div className="relative">
                <h1 className="text-white text-4xl font-bold mb-1 tracking-wide">{t.rehal}</h1>
                <div className={`absolute -bottom-1 ${lang === 'ar' ? 'right-1' : 'left-1'} w-8 h-1 bg-[#4A6455] transform -rotate-6`}></div>
                <div className="flex items-center justify-center gap-1 mt-1 text-[#4A6455] font-bold tracking-widest w-full">
                  <span className="text-white text-[10px]">*</span>
                  <span className="text-[10px]">REHAL</span>
                  <span className="text-white text-[10px]">*</span>
                </div>
              </div>
            </div>
          </div>

          {/* صندوق اختيار نوع المستخدم */}
          <div className="bg-[#161616] w-full rounded-3xl p-6 shadow-2xl mt-4 border border-gray-900">
            <div className={`flex ${lang === 'ar' ? 'justify-end' : 'justify-start'} items-center gap-2 mb-6`}>
              <span className="text-white text-xl font-bold">{t.whoAreYou}</span>
              <span className="text-white text-xl">*</span>
            </div>

            <div className="flex flex-col gap-3">
              {userTypes.map((type) => (
                <button 
                  key={type.id}
                  onClick={() => setSelectedUserType(type.id)}
                  className="relative w-full bg-[#262626] rounded-xl px-4 py-3 text-white text-lg flex justify-between items-center group hover:bg-[#333]"
                >
                  <span className="flex-1 text-center font-medium">{type[lang]}</span>
                  <span className={`text-sm absolute ${lang === 'ar' ? 'left-4' : 'right-4'}`}>*</span>
                  
                  {/* مؤشر السهم للحالة النشطة مع تعديل الاتجاه للإنجليزية */}
                  {selectedUserType === type.id && (
                    <div className={`absolute ${lang === 'ar' ? '-right-4' : '-left-4'} top-1/2 -translate-y-1/2 text-white`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transform ${lang === 'ar' ? 'rotate-180' : ''}`}/>
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setCurrentScreen('dashboard')}
            className="mt-8 w-full bg-[#5C7162] text-white py-3 rounded-full text-xl font-bold hover:bg-[#4A5D50] transition-colors"
          >
            {t.enter}
          </button>
        </div>

        <BackgroundBuilding />
      </AppWrapper>
    );
  }

  // 4. الشاشات الرئيسية (Dashboard - Home, Services, Family)
  return (
    <AppWrapper>
      <StatusBar />
      
      {/* Header لجميع شاشات لوحة التحكم */}
      <div className="flex justify-between items-start px-6 pt-4 pb-2 z-20">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setShowLangMenu(!showLangMenu)}>
            <Settings className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-400 text-[10px]">{t.language}</span>
            {showLangMenu && (
              <div className={`absolute top-14 ${lang === 'ar' ? 'right-6' : 'left-6'} bg-[#161616] border border-gray-800 rounded-2xl p-3 w-48 shadow-2xl z-50`}>
                <div className="flex flex-col gap-2">
                  <button onClick={() => handleLangChange('ar')} className="flex justify-between items-center bg-[#262626] rounded-xl px-4 py-2 text-white text-sm hover:bg-[#333]">
                    <span>{t.arabic}</span><span className="text-xs">*</span>
                  </button>
                  <button onClick={() => handleLangChange('en')} className="flex justify-between items-center bg-[#262626] rounded-xl px-4 py-2 text-white text-sm hover:bg-[#333]">
                    <span>{t.english}</span><span className="text-xs">*</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bell className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
            <span className="text-gray-400 text-[10px]">{t.alerts}</span>
          </div>
        </div>
        <Logo small />
      </div>

      {/* منطقة المحتوى المتغيرة بناءً على الـ Tab */}
      <div className="flex-1 overflow-y-auto pb-24 px-6 pt-2 scrollbar-hide z-10">
        
        {/* شريط البحث المشترك */}
        <div className="relative mb-8 mt-2">
          <input 
            type="text" 
            placeholder={t.search} 
            className={`w-full bg-[#222222] text-white rounded-full py-3 ${lang === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} outline-none placeholder-gray-400 text-sm`}
            readOnly
          />
          <div className={`absolute ${lang === 'ar' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-400`}>
            <span>*</span>
            <Search className="w-5 h-5" />
          </div>
        </div>

        {/* محتوى: الرئيسية (Home) */}
        {currentTab === 'home' && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            {/* قسم وثائقي الرقمية */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-1">
                  <h3 className="text-white font-bold text-lg">{t.digitalDocs}</h3>
                  <span className="text-white">*</span>
                </div>
                <span className="text-gray-400 text-xs flex items-center gap-1 cursor-pointer">
                  {t.viewAll}
                  {lang === 'ar' ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                </span>
              </div>
              
              {/* بطاقة الهوية الوهمية */}
              <div className="bg-white rounded-xl p-3 flex shadow-lg relative h-40 overflow-hidden">
                <div className="w-full flex justify-between">
                  <div className={`w-1/3 bg-gray-200 rounded-lg ${lang === 'en' && 'order-2'}`}></div>
                  <div className={`w-2/3 ${lang === 'ar' ? 'pl-4' : 'pr-4'} flex flex-col justify-between py-2 ${lang === 'en' && 'order-1'}`}>
                    <div className="flex justify-between items-center border-b-2 border-green-700 pb-1 mb-2">
                       <div className="h-2 w-16 bg-gray-300 rounded"></div>
                       <div className="flex flex-col items-center">
                         <div className="h-1.5 w-10 bg-green-700 rounded mb-1"></div>
                         <div className="h-1.5 w-14 bg-green-700 rounded"></div>
                       </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {[...Array(5)].map((_, i) => (
                         <div key={i} className={`flex ${lang === 'ar' ? 'justify-end' : 'justify-start'} gap-2 items-center`}>
                           <div className="h-1.5 w-24 bg-gray-300 rounded"></div>
                           <div className="h-1.5 w-8 bg-gray-400 rounded"></div>
                         </div>
                      ))}
                    </div>
                    <div className={`mt-2 flex ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                      <div className="h-3 w-20 bg-gray-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* قسم التصنيفات */}
            <div>
              <div className={`flex ${lang === 'ar' ? 'justify-end' : 'justify-start'} items-center mb-4`}>
                <h3 className="text-white font-bold text-lg">{t.categories}</h3>
                <span className={`text-white ${lang === 'ar' ? 'ml-1' : 'mr-1'}`}>*</span>
              </div>
              
              <div className="flex justify-between gap-3">
                <div className="flex-1 bg-[#222222] rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#2a2a2a]">
                  <GraduationCap className="w-8 h-8 text-white" strokeWidth={1.5} />
                  <span className="text-white text-sm">{t.education}</span>
                </div>
                <div className="flex-1 bg-[#222222] rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#2a2a2a]">
                  <HeartPulse className="w-8 h-8 text-white" strokeWidth={1.5} />
                  <span className="text-white text-sm">{t.health}</span>
                </div>
                <div className="flex-1 bg-[#222222] rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#2a2a2a]">
                  <Car className="w-8 h-8 text-white" strokeWidth={1.5} />
                  <span className="text-white text-sm">{t.vehicles}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* محتوى: خدماتي (Services) */}
        {currentTab === 'services' && (
          <div className="animate-fadeIn">
            <div className={`flex ${lang === 'ar' ? 'justify-end' : 'justify-start'} items-center mb-6`}>
              <h3 className="text-white font-bold text-xl">{t.myServices}</h3>
              <span className={`text-white ${lang === 'ar' ? 'ml-1' : 'mr-1'}`}>*</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#222222] rounded-3xl aspect-[4/3] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#2a2a2a]">
                <Activity className="w-10 h-10 text-white" strokeWidth={1.5} />
                <span className="text-white font-medium">{t.campaignTracking}</span>
              </div>
              
              <div className="bg-[#222222] rounded-3xl aspect-[4/3] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#2a2a2a]">
                <Megaphone className="w-10 h-10 text-white" strokeWidth={1.5} />
                <span className="text-white font-medium text-center leading-tight">{t.instantAds}</span>
              </div>

              <div className="bg-[#222222] rounded-3xl aspect-[4/3] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#2a2a2a]">
                <MessageSquare className="w-10 h-10 text-[#7D9D8A]" strokeWidth={1.5} fill="#4A6455" fillOpacity={0.2} />
                <span className="text-white font-medium">{t.chat}</span>
              </div>

              <div className="bg-[#222222] rounded-3xl aspect-[4/3] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#2a2a2a]">
                <Users className="w-10 h-10 text-white" strokeWidth={1.5} />
                <span className="text-white font-medium">{t.familyTracking}</span>
              </div>
            </div>
          </div>
        )}

        {/* محتوى: عائلتي (Family) */}
        {currentTab === 'family' && (
          <div className="animate-fadeIn">
            <div className={`flex ${lang === 'ar' ? 'justify-end' : 'justify-start'} items-center mb-6`}>
              <h3 className="text-white font-bold text-xl">{t.myFamily}</h3>
              <span className={`text-white ${lang === 'ar' ? 'ml-1' : 'mr-1'}`}>*</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className={`${lang === 'ar' ? 'col-start-2' : 'col-start-1'} bg-[#222222] rounded-3xl aspect-[4/3] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#2a2a2a]`}>
                <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
                <span className="text-white font-medium text-lg">{t.dependents}</span>
              </div>
            </div>
          </div>
        )}

      </div>

      <BottomNavigation />
    </AppWrapper>
  );
};

export default App;


```
