
import React, { useState, useEffect, useRef } from 'react';
import { HomeDesign } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { BedIcon, BathIcon, AreaIcon } from './Icon';

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (term: string) => void;
  homes: HomeDesign[];
}

const QUICK_TAGS = ["Modern", "Luxury", "Family", "Pool", "Loft", "Cozy", "Classic", "Tropical"];

const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose, onSearch, homes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHomes, setFilteredHomes] = useState<HomeDesign[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      setSearchTerm(''); // Reset search term when closed
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  useEffect(() => {
    if (searchTerm.trim() === '') {
        setFilteredHomes([]);
        return;
    }

    const lowerTerm = searchTerm.toLowerCase();
    const results = homes
      .filter(home => 
        home.name.toLowerCase().includes(lowerTerm) || 
        home.description.toLowerCase().includes(lowerTerm)
      )
      .slice(0, 6); // Limit to 6 results for preview

    setFilteredHomes(results);
  }, [searchTerm, homes]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      onClose();
    }
  };
  
  const handleSelectHome = (id: string) => {
    onClose();
    router.push(`/designs/${id}`);
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    inputRef.current?.focus();
  };

  const formatPrice = (price?: number) => {
    if (!price) return 'Contact Us';
    return `฿${price.toLocaleString()}`;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
        window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex justify-center items-start pt-4 px-4 sm:pt-20 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-popup-title"
    >
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-fade-in-down border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Input Section */}
        <div className="p-5 border-b border-gray-100 bg-white z-10">
            <div className="flex justify-between items-center mb-5">
                <h2 id="search-popup-title" className="text-xl font-bold text-gray-800">ค้นหาแบบบ้าน</h2>
                <button
                    onClick={onClose}
                    className="bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:rotate-90"
                    aria-label="Close search"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <form onSubmit={handleSearchSubmit} className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="พิมพ์ชื่อแบบบ้าน, สไตล์ หรือฟังก์ชั่นที่ต้องการ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-800 placeholder-gray-400 transition-all shadow-sm focus:shadow-md focus:bg-white"
                    autoComplete="off"
                />
            </form>

            {/* Quick Tags */}
            {!searchTerm && (
                <div className="mt-6 animate-fade-in">
                    <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">คำค้นหาแนะนำ</p>
                    <div className="flex flex-wrap gap-2">
                        {QUICK_TAGS.map(tag => (
                            <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className="px-4 py-2 bg-gray-50 hover:bg-primary hover:text-white text-gray-600 text-sm rounded-full transition-all duration-200 border border-gray-100 hover:border-primary shadow-sm hover:shadow-md"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
        
        {/* Results Section */}
        <div className="overflow-y-auto bg-gray-50 p-3 sm:p-5 custom-scrollbar flex-1">
            {searchTerm ? (
                filteredHomes.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                    {filteredHomes.map(home => (
                        <div 
                            key={home.id}
                            onClick={() => handleSelectHome(home.id)}
                            className="bg-white rounded-xl p-4 flex flex-col sm:flex-row gap-4 cursor-pointer hover:shadow-lg border border-gray-100 hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="relative w-full sm:w-32 h-40 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                <img src={home.images[0]} alt={home.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-0 left-0 flex flex-col gap-1 p-1">
                                    {home.promotion_enabled && (
                                        <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm w-max">
                                            PROMO
                                        </div>
                                    )}
                                    {home.isFeatured && (
                                        <div className="bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm w-max">
                                            FEATURED
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-lg font-bold text-gray-800 truncate group-hover:text-primary transition-colors">{home.name}</h4>
                                    </div>
                                    <p className="text-sm text-gray-500 line-clamp-1 mb-2">{home.description}</p>
                                    
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                        <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded text-xs"><BedIcon className="w-4 h-4 text-secondary" /> {home.bedrooms} นอน</span>
                                        <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded text-xs"><BathIcon className="w-4 h-4 text-secondary" /> {home.bathrooms} น้ำ</span>
                                        <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded text-xs"><AreaIcon className="w-4 h-4 text-secondary" /> {home.area} ม²</span>
                                    </div>
                                </div>
                                
                                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-bold text-primary text-lg">
                                            {home.price_popular_discounted 
                                                ? formatPrice(home.price_popular_discounted) 
                                                : (home.price_popular_original ? formatPrice(home.price_popular_original) : 'Contact Us')}
                                        </span>
                                        {home.price_popular_discounted && home.price_popular_original && home.price_popular_original > home.price_popular_discounted && (
                                            <span className="text-xs text-gray-400 line-through">{formatPrice(home.price_popular_original)}</span>
                                        )}
                                    </div>
                                    <span className="text-xs font-medium text-secondary group-hover:underline flex items-center gap-1">
                                        ดูรายละเอียด 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 opacity-80">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">ไม่พบแบบบ้านที่คุณค้นหา</h3>
                    <p className="text-gray-500 max-w-xs mx-auto mt-1">ลองใช้คำค้นหาอื่น เช่น "โมเดิร์น", "2 ชั้น" หรือระบุจำนวนห้องนอน</p>
                    <button 
                        onClick={() => setSearchTerm('')}
                        className="mt-4 text-primary font-medium hover:underline"
                    >
                        ล้างคำค้นหา
                    </button>
                </div>
                )
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-gray-500">เริ่มค้นหาแบบบ้านในฝันของคุณ...</p>
                </div>
            )}
        </div>
        
        {/* Footer Actions */}
        {searchTerm && filteredHomes.length > 0 && (
            <div className="p-4 bg-white border-t border-gray-100 flex justify-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
                <button 
                    onClick={() => {
                        onSearch(searchTerm);
                        onClose();
                    }}
                    className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-secondary transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                    <span>ดูผลการค้นหาทั้งหมด ({filteredHomes.length})</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default SearchPopup;
