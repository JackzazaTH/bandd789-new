
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

const QUICK_TAGS = ["Modern", "Luxury", "Family", "Pool", "Loft", "Cozy"];

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
    if (!price) return '';
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
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex justify-center items-start pt-4 px-4 sm:pt-24 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-popup-title"
    >
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-fade-in-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / Input Section */}
        <div className="p-4 border-b border-gray-100 bg-white z-10">
            <div className="flex justify-between items-center mb-4">
                <h2 id="search-popup-title" className="text-lg font-bold text-gray-800">ค้นหาแบบบ้าน</h2>
                <button
                    onClick={onClose}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                    aria-label="Close search"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <form onSubmit={handleSearchSubmit} className="relative">
            <input
                ref={inputRef}
                type="text"
                placeholder="ค้นหาชื่อแบบบ้าน, สไตล์, หรือรายละเอียด..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 text-base bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-800 placeholder-gray-400 transition-all"
                autoComplete="off"
            />
            <button
                type="submit"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                aria-label="Search"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </button>
            </form>

            {/* Quick Tags */}
            {!searchTerm && (
                <div className="mt-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">คำค้นหายอดนิยม</p>
                    <div className="flex flex-wrap gap-2">
                        {QUICK_TAGS.map(tag => (
                            <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded-lg transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
        
        {/* Results Section */}
        <div className="overflow-y-auto bg-gray-50 p-2 sm:p-4 custom-scrollbar">
            {searchTerm ? (
                filteredHomes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredHomes.map(home => (
                        <div 
                            key={home.id}
                            onClick={() => handleSelectHome(home.id)}
                            className="bg-white rounded-xl p-3 flex items-center gap-4 cursor-pointer hover:shadow-md hover:border-primary/30 border border-transparent transition-all duration-200 group"
                        >
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                <img src={home.images[0]} alt={home.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                {home.promotion_enabled && (
                                    <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-br-md">
                                        PROMO
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-gray-800 truncate group-hover:text-primary transition-colors">{home.name}</h4>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1 mb-2">
                                    <span className="flex items-center gap-1"><BedIcon className="w-3 h-3" /> {home.bedrooms}</span>
                                    <span className="flex items-center gap-1"><BathIcon className="w-3 h-3" /> {home.bathrooms}</span>
                                    <span className="flex items-center gap-1"><AreaIcon className="w-3 h-3" /> {home.area} ม²</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-primary text-sm">
                                        {home.price_popular_discounted 
                                            ? formatPrice(home.price_popular_discounted) 
                                            : (home.price_popular_original ? formatPrice(home.price_popular_original) : 'Contact Us')}
                                    </span>
                                    {home.price_popular_discounted && home.price_popular_original && (
                                        <span className="text-xs text-gray-400 line-through">{formatPrice(home.price_popular_original)}</span>
                                    )}
                                </div>
                            </div>
                            <div className="text-gray-300 group-hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
                ) : (
                <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-gray-800 font-medium">ไม่พบข้อมูลที่ค้นหา</p>
                    <p className="text-gray-500 text-sm mt-1">ลองเปลี่ยนคำค้นหา หรือใช้คำหลักอื่นๆ</p>
                </div>
                )
            ) : (
                <div className="h-40 flex items-center justify-center text-gray-400 text-sm italic">
                    พิมพ์เพื่อเริ่มค้นหาแบบบ้านที่คุณต้องการ...
                </div>
            )}
        </div>
        
        {/* Footer Actions */}
        {searchTerm && filteredHomes.length > 0 && (
            <div className="p-3 bg-white border-t border-gray-100 text-center">
                <button 
                    onClick={() => {
                        onSearch(searchTerm);
                        onClose();
                    }}
                    className="text-sm text-primary font-semibold hover:underline"
                >
                    ดูผลการค้นหาทั้งหมด ({filteredHomes.length})
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default SearchPopup;
