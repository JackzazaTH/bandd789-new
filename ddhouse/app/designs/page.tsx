'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import DesignGalleryView from '@/components/DesignGalleryView';

export default function DesignsPage() {
    const { homes } = useAppContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    const querySearchTerm = searchParams.get('q') || '';

    const [searchTerm, setSearchTerm] = useState<string>(querySearchTerm);
    const [bedroomsFilter, setBedroomsFilter] = useState<string>('any');
    const [bathroomsFilter, setBathroomsFilter] = useState<string>('any');
    const [areaRange, setAreaRange] = useState({ min: '', max: '' });
    
    useEffect(() => {
        setSearchTerm(querySearchTerm);
    }, [querySearchTerm]);

    const handleSelectHome = (id: string) => {
        router.push(`/designs/${id}`);
    };

    const handleContactClick = () => {
        router.push('/appointment');
    };

    const handleResetFilters = () => {
        setSearchTerm('');
        setBedroomsFilter('any');
        setBathroomsFilter('any');
        setAreaRange({ min: '', max: '' });
        router.push('/designs');
    };

    const filteredHomes = useMemo(() => {
        return homes.filter(home => {
            const minArea = areaRange.min === '' ? 0 : Number(areaRange.min);
            const maxArea = areaRange.max === '' ? Infinity : Number(areaRange.max);

            const matchesSearch = home.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBedrooms = bedroomsFilter === 'any' || home.bedrooms >= Number(bedroomsFilter);
            const matchesBathrooms = bathroomsFilter === 'any' || home.bathrooms >= Number(bathroomsFilter);
            const matchesArea = home.area >= minArea && home.area <= maxArea;

            return matchesSearch && matchesBedrooms && matchesBathrooms && matchesArea;
        });
    }, [homes, searchTerm, bedroomsFilter, bathroomsFilter, areaRange]);

    return (
        <DesignGalleryView
            homes={filteredHomes}
            onSelectHome={handleSelectHome}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            bedroomsFilter={bedroomsFilter}
            onBedroomsChange={setBedroomsFilter}
            bathroomsFilter={bathroomsFilter}
            onBathroomsChange={setBathroomsFilter}
            areaRange={areaRange}
            onAreaChange={setAreaRange}
            onResetFilters={handleResetFilters}
            allHomes={homes}
            // FIX: Pass the required onContactClick prop to DesignGalleryView.
            onContactClick={handleContactClick}
        />
    );
}