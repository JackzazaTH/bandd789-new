'use client';
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { HomeDesign } from '@/lib/types';
import { AreaIcon, BathIcon, BedIcon, ParkingIcon } from '@/components/Icon';

const PromotionHomeCard: React.FC<{ home: HomeDesign; onSelect: (id: string) => void; }> = ({ home, onSelect }) => {
    const formatPrice = (price?: number | string) => {
        if (price === null || price === undefined || price === '') return 'N/A';
        const num = Number(price);
        if (isNaN(num)) return 'N/A';
        return `฿${num.toLocaleString()}`;
    };
    
    const calculateDiscount = (original?: number, discounted?: number) => {
        if (!original || !discounted || original <= discounted) return 0;
        return Math.round(((original - discounted) / original) * 100);
    }
    
    const popularDiscount = calculateDiscount(home.price_popular_original, home.price_popular_discounted);
    const signatureDiscount = calculateDiscount(home.price_signature_original, home.price_signature_discounted);

    return (
        <div 
            onClick={() => onSelect(home.id)}
            className="w-[320px] flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer snap-start transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 group"
        >
            <div className="h-48 overflow-hidden relative">
                 <img 
                    src={home.images[0]} 
                    alt={home.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                 {home.discount_percentage && (
                    <div className="absolute top-0 right-0 bg-gradient-to-bl from-yellow-400 to-orange-500 text-white text-lg font-bold px-4 py-2 rounded-bl-2xl shadow-sm z-10">
                        -{home.discount_percentage}%
                    </div>
                )}
            </div>

            <div className="p-5 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">{home.name}</h3>
                
                <div className="flex justify-between items-center text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1"><AreaIcon className="w-4 h-4" /> {home.area} ม²</div>
                    <div className="flex items-center gap-1"><BedIcon className="w-4 h-4" /> {home.bedrooms} นอน</div>
                    <div className="flex items-center gap-1"><BathIcon className="w-4 h-4" /> {home.bathrooms} น้ำ</div>
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg p-2 flex justify-between items-center border border-gray-100">
                        <span className="text-xs font-semibold text-gray-600 uppercase">Popular</span>
                        <div className="text-right">
                           {popularDiscount > 0 && <span className="text-xs line-through text-gray-400 mr-1">{formatPrice(home.price_popular_original)}</span>}
                           <span className="font-bold text-gray-800">{formatPrice(home.price_popular_discounted)}</span>
                        </div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-2 flex justify-between items-center border border-red-100">
                        <span className="text-xs font-semibold text-primary uppercase">Signature</span>
                        <div className="text-right">
                            {signatureDiscount > 0 && <span className="text-xs line-through text-red-300 mr-1">{formatPrice(home.price_signature_original)}</span>}
                            <span className="font-bold text-primary">{formatPrice(home.price_signature_discounted)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PromotionsSection: React.FC<{ homes: HomeDesign[] }> = ({ homes }) => {
    const router = useRouter();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const promotionHomes = homes.filter(h => h.promotion_enabled);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -340 : 340;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (promotionHomes.length === 0) {
        return null;
    }

    return (
        <section className="bg-gradient-to-b from-primary to-red-900 py-16 md:py-20 relative overflow-hidden">
             {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end text-white mb-10 px-4 gap-4">
                    <div>
                         <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-wider mb-2 border border-white/10">HOT DEALS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-shadow-lg">
                            โปรโมชั่นประจำเดือน
                        </h2>
                    </div>
                    <button 
                        onClick={() => router.push('/designs')} 
                        className="font-medium hover:text-yellow-300 transition-colors flex items-center gap-1 group"
                    >
                        ดูทั้งหมด <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
                
                <div className="relative group/slider">
                     <button onClick={() => scroll('left')} className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-20 bg-white text-gray-800 p-3 rounded-full shadow-xl hidden md:flex opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                     <button onClick={() => scroll('right')} className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 bg-white text-gray-800 p-3 rounded-full shadow-xl hidden md:flex opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div 
                        ref={scrollContainerRef} 
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pb-10 pt-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
                    >
                        {promotionHomes.map(home => (
                            <PromotionHomeCard 
                                key={home.id} 
                                home={home} 
                                onSelect={(id) => router.push(`/designs/${id}`)} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionsSection;