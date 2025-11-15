import React, { useState } from 'react';
import { CustomPage, Lead } from '../lib/types';
import Spinner from './Spinner';

interface CustomPageViewProps {
  page: CustomPage;
  // FIX: Update onAddLead signature to match what the form actually provides.
  // The parent component is responsible for setting the default status.
  onAddLead?: (lead: Omit<Lead, 'id' | 'timestamp' | 'status' | 'notes'>) => void;
}

const AppointmentForm: React.FC<{ onAddLead: (lead: Omit<Lead, 'id' | 'timestamp' | 'status' | 'notes'>) => void }> = ({ onAddLead }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        landSize: '',
        province: '',
        district: '',
        budget: '',
        constructionDate: '',
      });
      const [agreed, setAgreed] = useState(false);
      const [submitted, setSubmitted] = useState(false);
      const [isSubmitting, setIsSubmitting] = useState(false);

      const checkRateLimit = () => {
        const lastSubmission = sessionStorage.getItem('appointment_form_submission');
        if (lastSubmission) {
            const timeSince = Date.now() - parseInt(lastSubmission, 10);
            if (timeSince < 60000) { // 60 seconds
                return true;
            }
        }
        return false;
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (checkRateLimit()) {
            alert('คุณเพิ่งส่งข้อมูลไปเมื่อเร็วๆ นี้ กรุณารอ 60 วินาทีก่อนส่งอีกครั้ง');
            return;
        }
        if (!agreed) {
          alert('กรุณายอมรับเงื่อนไขและนโยบายความเป็นส่วนตัว');
          return;
        }
        
        for (const key in formData) {
          if (formData[key as keyof typeof formData] === '') {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
          }
        }

        setIsSubmitting(true);
        
        setTimeout(() => { // Simulate network delay
            if (onAddLead) {
                onAddLead({
                    ...formData,
                    landSize: Number(formData.landSize),
                    budget: Number(formData.budget),
                });
            }
            sessionStorage.setItem('appointment_form_submission', Date.now().toString());
            setSubmitted(true);
            setIsSubmitting(false);
        }, 1000);
      };

      const inputClasses = "p-3 bg-gray-100 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-accent focus:border-accent outline-none placeholder-gray-500 transition-colors";
    
      if (submitted) {
        return (
            <div className="bg-white p-12 rounded-2xl shadow-lg text-center animate-fade-in border-t-4 border-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl font-bold text-primary mb-4">ส่งข้อมูลเรียบร้อย!</h2>
                <p className="text-gray-700 text-lg">ขอบคุณที่สนใจบริการของเรา เจ้าหน้าที่ DDHOUSE จะติดต่อกลับไปโดยเร็วที่สุด</p>
            </div>
        );
      }
      
      return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" name="firstName" placeholder="ชื่อ*" value={formData.firstName} onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} required className={inputClasses} />
                <input type="text" name="lastName" placeholder="นามสกุล*" value={formData.lastName} onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))} required className={inputClasses} />
                <input type="tel" name="phone" placeholder="เบอร์โทร*" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} required className={inputClasses} pattern="[0-9]{10}" title="กรุณากรอกเบอร์โทรศัพท์ 10 หลัก"/>
                <input type="email" name="email" placeholder="อีเมล*" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required className={inputClasses} />
                <input type="number" name="landSize" placeholder="ขนาดที่ดิน (ตร.วา)*" value={formData.landSize} onChange={(e) => setFormData(prev => ({ ...prev, landSize: e.target.value }))} required className={inputClasses} />
                <input type="text" name="province" placeholder="จังหวัด*" value={formData.province} onChange={(e) => setFormData(prev => ({ ...prev, province: e.target.value }))} required className={inputClasses} />
                <input type="text" name="district" placeholder="อำเภอ, เขต*" value={formData.district} onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value }))} required className={inputClasses} />
                <input type="number" name="budget" placeholder="งบประมาณ (บาท)*" value={formData.budget} onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))} required className={inputClasses} />
                <div className="md:col-span-2">
                    <label htmlFor="constructionDate" className="block text-sm font-medium text-gray-700 mb-1">วันที่คาดว่าจะสร้างบ้าน*</label>
                    <input type="date" id="constructionDate" name="constructionDate" value={formData.constructionDate} onChange={(e) => setFormData(prev => ({ ...prev, constructionDate: e.target.value }))} required className={`${inputClasses}`} />
                </div>
            </div>
            <div className="mb-6">
            <label className="flex items-center">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="h-5 w-5 text-primary focus:ring-accent border-gray-300 rounded" />
                <span className="ml-2 text-gray-700">ยอมรับ<a href="#" className="text-primary hover:underline">เงื่อนไขและนโยบายความเป็นส่วนตัว</a>*</span>
            </label>
            </div>
            <div className="text-left">
            <button 
                type="submit" 
                className="w-full md:w-auto bg-primary text-white font-bold py-3 px-12 rounded-lg hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={isSubmitting}
            >
                 {isSubmitting ? (
                    <>
                        <Spinner />
                        <span className="ml-2">กำลังส่ง...</span>
                    </>
                ) : (
                    'ส่งข้อมูลนัดหมาย'
                )}
            </button>
            </div>
        </form>
      );
}

const CustomPageView: React.FC<CustomPageViewProps> = ({ page, onAddLead }) => {
  return (
    <div className="bg-white p-4 sm:p-8 rounded-xl shadow-lg animate-fade-in max-w-4xl mx-auto">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">{page.title}</h1>
        
        <div 
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: page.content.replace(/\n/g, '<br />') }}
        />
        
        {page.slug === 'appointment' && onAddLead && (
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg shadow-inner p-6 md:p-8">
                     <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">กรอกข้อมูลเพื่อนัดหมาย</h2>
                     <AppointmentForm onAddLead={onAddLead} />
                </div>
            </div>
        )}

      </article>
    </div>
  );
};

export default CustomPageView;
