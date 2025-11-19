
import { HomeDesign, Banner, Article, CustomPage, PromoCard, Testimonial, SiteNotification, PopupModalContent, SiteInfo, PortfolioProject } from './types';

export const INITIAL_HOMES: HomeDesign[] = [
  {
    id: 'ddh-001',
    name: 'LONDON',
    description: 'A masterpiece of modern architecture, The Serene Villa offers a tranquil escape with its open-plan living spaces, large glass walls, and a seamless connection to the surrounding nature. Perfect for families seeking both comfort and style.',
    area: 597,
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    images: [
      'https://picsum.photos/seed/london-house/800/600',
      'https://picsum.photos/seed/villa2/800/600',
      'https://picsum.photos/seed/villa3/800/600',
    ],
    isFeatured: true,
    promotion_enabled: true,
    discount_percentage: 22,
    price_popular_original: 22250000,
    price_popular_discounted: 17280000,
    price_signature_original: 26700000,
    price_signature_discounted: 20820000,
    seo: {
      title: 'The Serene Villa - Modern Family Home | DDHOUSE',
      description: 'Discover The Serene Villa, a 250m² modern masterpiece with 4 bedrooms and 3 bathrooms. Experience tranquil living with open-plan spaces and nature integration.'
    }
  },
  {
    id: 'ddh-002',
    name: 'ANTONIO',
    description: 'Experience city living at its finest in the Urban Loft. Featuring industrial-chic design elements, a double-height ceiling in the living area, and a private rooftop terrace, this home is designed for the modern urbanite.',
    area: 505,
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    images: [
      'https://picsum.photos/seed/antonio-house/800/600',
      'https://picsum.photos/seed/loft2/800/600',
      'https://picsum.photos/seed/loft3/800/600',
    ],
    isFeatured: true,
    promotion_enabled: true,
    discount_percentage: 18,
    price_popular_original: 14940000,
    price_popular_discounted: 12310000,
    price_signature_original: 17920000,
    price_signature_discounted: 14720000,
    seo: {
      title: 'Urban Loft - Industrial-Chic City Living | DDHOUSE',
      description: 'Explore the Urban Loft, a 180m² home with 2 bedrooms and a private rooftop terrace. Designed for the modern urbanite seeking style and function.'
    }
  },
  {
    id: 'ddh-003',
    name: 'RICHMOND',
    description: 'Wake up to the sound of waves in this stunning Coastal Retreat. With panoramic ocean views, light and airy interiors, and expansive decks for outdoor entertaining, it’s the ultimate beachside sanctuary.',
    area: 460,
    bedrooms: 6,
    bathrooms: 7,
    parking: 2,
    images: [
      'https://picsum.photos/seed/richmond-house/800/600',
      'https://picsum.photos/seed/coast2/800/600',
    ],
    isFeatured: true,
    promotion_enabled: true,
    discount_percentage: 22,
    price_popular_original: 16560000,
    price_popular_discounted: 12860000,
    price_signature_original: 19890000,
    price_signature_discounted: 15400000,
    seo: {
      title: 'Coastal Retreat - Beachside Sanctuary | DDHOUSE',
      description: 'The Coastal Retreat offers panoramic ocean views in a 220m² layout with 3 bedrooms. Your ultimate beachside sanctuary awaits.'
    }
  },
   {
    id: 'ddh-004',
    name: 'ADLER',
    description: 'Nestled in the mountains, this cozy chalet combines rustic charm with modern amenities. Features include a stone fireplace, exposed wood beams, and large windows that frame breathtaking mountain vistas.',
    area: 745,
    bedrooms: 4,
    bathrooms: 5,
    parking: 4,
    images: [
      'https://picsum.photos/seed/adler-house/800/600',
      'https://picsum.photos/seed/chalet2/800/600',
      'https://picsum.photos/seed/chalet3/800/600',
    ],
    isFeatured: false,
    promotion_enabled: true,
    discount_percentage: 29,
    price_popular_original: 25660000,
    price_popular_discounted: 18210000,
    price_signature_original: 30920000,
    price_signature_discounted: 22030000,
  },
  {
    id: 'ddh-005',
    name: 'PADDINGTON-S',
    description: 'A bold statement in minimalist design. The Cube House focuses on clean lines, geometric shapes, and a monochromatic palette to create a space that is both calming and intellectually stimulating.',
    area: 370,
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    images: [
      'https://picsum.photos/seed/paddington-house/800/600',
      'https://picsum.photos/seed/cube2/800/600',
    ],
    isFeatured: false,
    promotion_enabled: true,
    discount_percentage: 28,
    price_popular_original: 13600000,
    price_popular_discounted: 9860000,
    price_signature_original: 16360000,
    price_signature_discounted: 11880000,
  },
  {
    id: 'ddh-006',
    name: 'Suburban Classic',
    description: 'The perfect family home, the Suburban Classic offers spacious rooms, a large backyard, and a timeless design. Its functional layout and warm, inviting atmosphere make it an ideal place to create lasting memories.',
    area: 280,
    bedrooms: 5,
    bathrooms: 4,
    parking: 2,
    images: [
      'https://picsum.photos/seed/suburb1/800/600',
      'https://picsum.photos/seed/suburb2/800/600',
      'https://picsum.photos/seed/suburb3/800/600',
    ],
    isFeatured: false,
    promotion_enabled: false,
  },
];

export const INITIAL_BANNERS: Banner[] = [
  {
    id: 'banner-new-001',
    imageUrl: 'https://i.ibb.co/n8Rzc0gF/banner-1.png',
  },
  {
    id: 'banner-001',
    imageUrl: 'https://i.ibb.co/n8Rzc0gF/banner-1.png',
  },
  {
    id: 'banner-002',
    imageUrl: 'https://i.ibb.co/n8Rzc0gF/banner-1.png',
  },
  {
    id: 'banner-003',
    imageUrl: 'https://picsum.photos/seed/banner3/1200/500',
  },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-001',
    slug: '5-tips-for-choosing-the-perfect-home-design',
    title: '5 เคล็ดลับในการเลือกแบบบ้านที่ใช่สำหรับคุณ',
    content: `การเลือกแบบบ้านเป็นหนึ่งในการตัดสินใจที่สำคัญที่สุดในชีวิต นี่คือ 5 เคล็ดลับที่จะช่วยให้คุณตัดสินใจได้ง่ายขึ้น:

1. **กำหนดงบประมาณของคุณ:** ทราบว่าคุณสามารถจ่ายได้เท่าไหร่ ซึ่งจะช่วยจำกัดตัวเลือกของคุณให้แคบลง
2. **พิจารณาไลฟ์สไตล์ของคุณ:** คุณต้องการพื้นที่เปิดโล่งสำหรับความบันเทิง หรือต้องการห้องแยกสำหรับทำงาน?
3. **คิดถึงอนาคต:** ครอบครัวของคุณจะขยายใหญ่ขึ้นหรือไม่? คุณต้องการพื้นที่สำหรับงานอดิเรกใหม่ๆ หรือไม่?
4. **ทำเลที่ตั้ง:** ตรวจสอบให้แน่ใจว่าแบบบ้านที่คุณเลือกเหมาะสมกับที่ดินและสภาพแวดล้อม
5. **ปรึกษาผู้เชี่ยวชาญ:** สถาปนิกและผู้สร้างบ้านสามารถให้คำแนะนำที่มีค่าและช่วยให้คุณหลีกเลี่ยงข้อผิดพลาดที่มีค่าใช้จ่ายสูงได้`,
    excerpt: 'การเลือกแบบบ้านเป็นการตัดสินใจครั้งใหญ่ ค้นพบ 5 เคล็ดลับสำคัญที่จะช่วยให้คุณเลือกแบบบ้านในฝันที่เหมาะสมกับไลฟ์สไตล์และงบประมาณของคุณ',
    imageUrl: 'https://picsum.photos/seed/article1/800/600',
    author: 'DDHOUSE Staff',
    publishedDate: '2023-10-26',
    tags: ['เคล็ดลับ', 'การเลือกบ้าน', 'ออกแบบบ้าน'],
    seo: {
      title: '5 เคล็ดลับเลือกแบบบ้านที่ใช่สำหรับคุณ | DDHOUSE',
      description: 'คู่มือฉบับสมบูรณ์! อ่าน 5 เคล็ดลับสำคัญในการเลือกแบบบ้านที่ใช่ ทั้งด้านงบประมาณ ไลฟ์สไตล์ และการวางแผนเพื่ออนาคต'
    }
  },
  {
    id: 'art-002',
    slug: 'the-rise-of-sustainable-home-design',
    title: 'เทรนด์การออกแบบบ้านอย่างยั่งยืนที่กำลังมาแรง',
    content: `การออกแบบบ้านอย่างยั่งยืน หรือ "บ้านสีเขียว" กำลังได้รับความนิยมมากขึ้นเรื่อยๆ ไม่เพียงแต่จะดีต่อสิ่งแวดล้อม แต่ยังช่วยประหยัดค่าใช้จ่ายด้านพลังงานในระยะยาวอีกด้วย เทรนด์หลักๆ ประกอบด้วย:

- **การใช้พลังงานแสงอาทิตย์:** การติดตั้งแผงโซลาร์เซลล์เพื่อผลิตไฟฟ้าใช้เอง
- **การออกแบบที่รับลมและแสงธรรมชาติ:** ลดการใช้เครื่องปรับอากาศและไฟฟ้าส่องสว่าง
- **การเลือกใช้วัสดุที่เป็นมิตรต่อสิ่งแวดล้อม:** เช่น ไม้รีไซเคิล, ฉนวนกันความร้อนจากวัสดุธรรมชาติ
- **ระบบจัดการน้ำ:** การติดตั้งถังเก็บน้ำฝนเพื่อนำกลับมาใช้รดน้ำต้นไม้หรือทำความสะอาด`,
    excerpt: 'บ้านสีเขียวไม่ได้เป็นเพียงกระแส แต่เป็นการลงทุนเพื่ออนาคต เรียนรู้เกี่ยวกับเทรนด์การออกแบบบ้านอย่างยั่งยืนที่กำลังมาแรงและประโยชน์ที่ได้รับ',
    imageUrl: 'https://picsum.photos/seed/article2/800/600',
    author: 'DDHOUSE Staff',
    publishedDate: '2023-10-15',
    tags: ['บ้านยั่งยืน', 'บ้านสีเขียว', 'เทรนด์', 'ประหยัดพลังงาน'],
    seo: {
      title: 'เทรนด์การออกแบบบ้านอย่างยั่งยืนมาแรง | DDHOUSE',
      description: 'ค้นพบเทรนด์การออกแบบบ้านเพื่อความยั่งยืน ตั้งแต่การใช้พลังงานแสงอาทิตย์ไปจนถึงการเลือกใช้วัสดุที่เป็นมิตรต่อสิ่งแวดล้อม'
    }
  }
];

export const INITIAL_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-001',
    slug: 'modern-family-home-bangkok',
    title: 'บ้านโมเดิร์นของคุณสมชาย',
    category: 'บ้านสองชั้น',
    coverImage: 'https://picsum.photos/seed/proj1-cover/800/600',
    images: [
      'https://picsum.photos/seed/proj1-img1/1200/800',
      'https://picsum.photos/seed/proj1-img2/1200/800',
      'https://picsum.photos/seed/proj1-img3/1200/800',
    ],
    description: 'บ้านสไตล์โมเดิร์น 2 ชั้นสำหรับครอบครัวขนาดใหญ่ เน้นพื้นที่ใช้สอยกว้างขวางและการเชื่อมต่อกับธรรมชาติภายนอก',
    location: 'กรุงเทพมหานคร',
    area: 320,
  },
  {
    id: 'proj-002',
    slug: 'cozy-single-story-chiangmai',
    title: 'บ้านสวนชั้นเดียวของคุณมานี',
    category: 'บ้านชั้นเดียว',
    coverImage: 'https://picsum.photos/seed/proj2-cover/800/600',
    images: [
      'https://picsum.photos/seed/proj2-img1/1200/800',
      'https://picsum.photos/seed/proj2-img2/1200/800',
    ],
    description: 'บ้านชั้นเดียวขนาดกะทัดรัด อบอุ่น ท่ามกลางสวนสวย เหมาะสำหรับการพักผ่อนอย่างแท้จริง',
    location: 'เชียงใหม่',
    area: 180,
  },
  {
    id: 'proj-003',
    slug: 'contemporary-villa-phuket',
    title: 'วิลล่าร่วมสมัยของคุณเดวิด',
    category: 'สไตล์ร่วมสมัย',
    coverImage: 'https://picsum.photos/seed/proj3-cover/800/600',
    images: [
        'https://picsum.photos/seed/proj3-img1/1200/800',
        'https://picsum.photos/seed/proj3-img2/1200/800',
        'https://picsum.photos/seed/proj3-img3/1200/800',
    ],
    description: 'วิลล่าสุดหรูสไตล์ร่วมสมัย พร้อมสระว่ายน้ำส่วนตัว มองเห็นวิวทะเลที่สวยงาม',
    location: 'ภูเก็ต',
    area: 450,
  },
  {
    id: 'proj-004',
    slug: 'minimalist-loft-khonkaen',
    title: 'บ้านลอฟท์ของคุณปิติ',
    category: 'สไตล์โมเดิร์น',
    coverImage: 'https://picsum.photos/seed/proj4-cover/800/600',
    images: [
        'https://picsum.photos/seed/proj4-img1/1200/800',
        'https://picsum.photos/seed/proj4-img2/1200/800',
    ],
    description: 'บ้านสองชั้นสไตล์โมเดิร์นลอฟท์ โดดเด่นด้วยการตกแต่งแบบปูนเปลือยและโครงสร้างเหล็ก',
    location: 'ขอนแก่น',
    area: 260,
  },
    {
    id: 'proj-005',
    slug: 'classic-two-story-nakhonratchasima',
    title: 'บ้านอบอุ่นของคุณสมศรี',
    category: 'บ้านสองชั้น',
    coverImage: 'https://picsum.photos/seed/proj5-cover/800/600',
    images: [
      'https://picsum.photos/seed/proj5-img1/1200/800',
      'https://picsum.photos/seed/proj5-img2/1200/800',
    ],
    description: 'บ้านสองชั้นสไตล์คลาสสิคที่ให้ความรู้สึกอบอุ่นและเป็นกันเอง เหมาะสำหรับทุกครอบครัว',
    location: 'นครราชสีมา',
    area: 290,
  },
  {
    id: 'proj-006',
    slug: 'compact-modern-home-rayong',
    title: 'บ้านโมเดิร์นของคุณวิชัย',
    category: 'บ้านชั้นเดียว',
    coverImage: 'https://picsum.photos/seed/proj6-cover/800/600',
    images: [
        'https://picsum.photos/seed/proj6-img1/1200/800',
    ],
    description: 'บ้านชั้นเดียวสไตล์โมเดิร์นขนาดกะทัดรัด ออกแบบฟังก์ชันการใช้งานอย่างลงตัวทุกตารางเมตร',
    location: 'ระยอง',
    area: 150,
  }
];


export const INITIAL_CUSTOM_PAGES: CustomPage[] = [
  {
    id: 'page-privacy-policy',
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    content: `<h2 class="text-2xl font-bold mb-4">นโยบายความเป็นส่วนตัว</h2>
<p class="mb-4">เว็บไซต์ของเราเคารพสิทธิความเป็นส่วนตัวของผู้ใช้ทุกคนที่เข้าเยี่ยมชมเว็บไซต์ของเรา ดังนั้นเราจึงต้องการที่จะชี้แจงให้ท่านทราบเกี่ยวกับการใช้ข้อมูลส่วนบุคคลของท่าน</p>
<h3 class="text-xl font-bold mb-2">การเก็บรวบรวมข้อมูลส่วนบุคคล</h3>
<p class="mb-4">เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ท่านให้กับเราโดยตรง เช่น ชื่อ, ที่อยู่อีเมล, และเบอร์โทรศัพท์ เมื่อท่านทำการลงทะเบียนหรือติดต่อเราผ่านทางเว็บไซต์</p>
<h3 class="text-xl font-bold mb-2">การใช้คุกกี้</h3>
<p class="mb-4">เว็บไซต์ของเรามีการใช้คุกกี้เพื่อเก็บข้อมูลการเข้าเยี่ยมชม และเพื่อปรับปรุงประสบการณ์การใช้งานของท่านให้ดียิ่งขึ้น ท่านสามารถเลือกที่จะยอมรับหรือไม่ยอมรับการใช้งานคุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์ของท่าน</p>
<h3 class="text-xl font-bold mb-2">การเปิดเผยข้อมูล</h3>
<p>เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของท่านแก่บุคคลภายนอกโดยไม่ได้รับความยินยอมจากท่าน เว้นแต่จะเป็นไปตามที่กฎหมายกำหนด</p>`,
    seo: { title: 'Privacy Policy | DDHOUSE', description: 'Read our privacy policy to understand how we handle your data.' }
  },
  {
    id: 'page-002',
    slug: 'construction-process',
    title: 'ขั้นตอนการปลูกสร้าง',
    content: `<div class="py-6 animate-fade-in">
    <div class="text-center max-w-4xl mx-auto mb-14">
        <h2 class="text-2xl md:text-3xl font-bold text-primary mb-6">มาตรฐานการก่อสร้างที่คุณวางใจได้</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
            บ้านดีดีวิศวกรรม (DDHOUSE) ใส่ใจในทุกรายละเอียดของการสร้างบ้าน ตั้งแต่การวางแผนจนถึงการส่งมอบ 
            ด้วยทีมงานมืออาชีพและระบบการทำงานที่เป็นมาตรฐาน เพื่อให้คุณมั่นใจได้ว่าจะได้รับบ้านที่มีคุณภาพสูงสุด
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <!-- Step 1 -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-8 border-primary relative overflow-hidden group">
            <div class="absolute right-0 top-0 text-9xl font-bold text-gray-50 opacity-20 -mr-4 -mt-4 group-hover:scale-110 transition-transform duration-500">01</div>
            <div class="relative z-10">
                <div class="w-14 h-14 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 13v-3m6 3v-3m0 0V7" /></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">สำรวจและวางแผน</h3>
                <p class="text-gray-600">พูดคุยความต้องการ สำรวจพื้นที่จริง และวิเคราะห์ความเป็นไปได้ เพื่อวางแผนการก่อสร้างและออกแบบให้ตรงใจคุณที่สุด</p>
            </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-8 border-primary relative overflow-hidden group">
            <div class="absolute right-0 top-0 text-9xl font-bold text-gray-50 opacity-20 -mr-4 -mt-4 group-hover:scale-110 transition-transform duration-500">02</div>
            <div class="relative z-10">
                 <div class="w-14 h-14 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">สัญญาและใบอนุญาต</h3>
                <p class="text-gray-600">จัดทำใบเสนอราคา (BOQ) เซ็นสัญญา และดำเนินการยื่นขออนุญาตก่อสร้าง ขอมิเตอร์น้ำ-ไฟ อย่างถูกต้องครบถ้วน</p>
            </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-8 border-primary relative overflow-hidden group">
            <div class="absolute right-0 top-0 text-9xl font-bold text-gray-50 opacity-20 -mr-4 -mt-4 group-hover:scale-110 transition-transform duration-500">03</div>
            <div class="relative z-10">
                 <div class="w-14 h-14 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">งานโครงสร้างและฐานราก</h3>
                <p class="text-gray-600">ตอกเสาเข็ม หล่อฐานราก คาน และเสา ด้วยมาตรฐานวิศวกรรม เพื่อโครงสร้างที่มั่นคงแข็งแรง รองรับการอยู่อาศัยระยะยาว</p>
            </div>
        </div>

        <!-- Step 4 -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-8 border-primary relative overflow-hidden group">
            <div class="absolute right-0 top-0 text-9xl font-bold text-gray-50 opacity-20 -mr-4 -mt-4 group-hover:scale-110 transition-transform duration-500">04</div>
            <div class="relative z-10">
                 <div class="w-14 h-14 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">งานสถาปัตยกรรม</h3>
                <p class="text-gray-600">มุงหลังคา ก่ออิฐ ฉาบปูน ติดตั้งประตูหน้าต่าง ให้บ้านสวยงามและป้องกันสภาพอากาศ เป็นรูปเป็นร่างตามแบบ</p>
            </div>
        </div>

        <!-- Step 5 -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-8 border-primary relative overflow-hidden group">
            <div class="absolute right-0 top-0 text-9xl font-bold text-gray-50 opacity-20 -mr-4 -mt-4 group-hover:scale-110 transition-transform duration-500">05</div>
            <div class="relative z-10">
                 <div class="w-14 h-14 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">งานระบบและตกแต่ง</h3>
                <p class="text-gray-600">ติดตั้งระบบไฟฟ้า ประปา สุขาภิบาล ปูกระเบื้อง และทาสี ด้วยวัสดุคุณภาพและการเก็บงานที่ประณีต</p>
            </div>
        </div>

        <!-- Step 6 -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-8 border-green-500 relative overflow-hidden group md:col-span-1 bg-gradient-to-br from-white to-green-50">
            <div class="absolute right-0 top-0 text-9xl font-bold text-green-100 opacity-30 -mr-4 -mt-4 group-hover:scale-110 transition-transform duration-500">06</div>
            <div class="relative z-10">
                 <div class="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-3">ตรวจสอบและส่งมอบ</h3>
                <p class="text-gray-600">QC ตรวจสอบความเรียบร้อยทุกจุด ทำความสะอาด และส่งมอบบ้านพร้อมรับประกัน ให้คุณเข้าอยู่ได้อย่างสบายใจ</p>
            </div>
        </div>
    </div>
</div>`,
    seo: { title: 'ขั้นตอนการปลูกสร้าง | DDHOUSE', description: 'เรียนรู้ขั้นตอนการสร้างบ้านกับ DDHOUSE ตั้งแต่เริ่มต้นจนส่งมอบ' }
  },
  {
    id: 'page-003',
    slug: 'system-spec',
    title: 'ระบบก่อสร้าง & Material Spec',
    content: `<div class="py-6 animate-fade-in">
    <div class="text-center max-w-4xl mx-auto mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-primary mb-6">มาตรฐานวัสดุและระบบก่อสร้างระดับพรีเมียม</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
            ที่ DDHOUSE เราคัดสรรเฉพาะวัสดุคุณภาพสูงจากแบรนด์ชั้นนำ และใช้เทคโนโลยีการก่อสร้างที่ได้มาตรฐานสากล 
            ควบคุมโดยทีมวิศวกรมืออาชีพ เพื่อให้บ้านของคุณแข็งแรง ทนทาน และสวยงามยาวนาน
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <!-- Structural Work -->
        <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-50 text-primary rounded-xl flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <!-- Icon Structure -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">งานโครงสร้าง (Structural Work)</h3>
                    <ul class="space-y-2 text-gray-600 text-sm md:text-base">
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>เสาเข็ม:</strong> เสาเข็มเจาะหรือตอก ตามมาตรฐานวิศวกรรม</span></li>
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>ฐานราก/คาน/เสา:</strong> คอนกรีตเสริมเหล็ก (คสล.) เหล็กเส้นมาตรฐาน มอก.</span></li>
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>คอนกรีต:</strong> กำลังอัดไม่น้อยกว่า 240 KSC (Cylinder) จาก CPAC/Namheng</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Roofing Work -->
        <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-50 text-primary rounded-xl flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     <!-- Icon Roof -->
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                 <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">งานหลังคา (Roofing Work)</h3>
                    <ul class="space-y-2 text-gray-600 text-sm md:text-base">
                         <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>โครงหลังคา:</strong> โครงถักสำเร็จรูป หรือเหล็กรูปพรรณทาสีกันสนิม</span></li>
                         <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>กระเบื้อง:</strong> แผ่นเรียบ Prestige หรือ Excella จาก SCG</span></li>
                         <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>ฉนวน:</strong> แผ่นสะท้อนความร้อนใต้หลังคา SCG</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Wall Work -->
        <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-50 text-primary rounded-xl flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <!-- Icon Wall -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">งานผนัง (Wall Work)</h3>
                     <ul class="space-y-2 text-gray-600 text-sm md:text-base">
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>วัสดุ:</strong> อิฐมวลเบา Q-CON เกรด G4 กันความร้อนและเสียงดีเยี่ยม</span></li>
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>งานฉาบ:</strong> ปูนฉาบสำเร็จรูป เสริมลวดกรงไก่ป้องกันรอยร้าว</span></li>
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>งานสี:</strong> สีน้ำอะคริลิคเกรด Premium (TOA Supershield)</span></li>
                    </ul>
                </div>
            </div>
        </div>

         <!-- Floor Work -->
         <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-50 text-primary rounded-xl flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     <!-- Icon Floor -->
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">งานพื้น (Flooring Work)</h3>
                    <ul class="space-y-2 text-gray-600 text-sm md:text-base">
                         <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>พื้นชั้น 1:</strong> กระเบื้องแกรนิตโต้ 60x60 ซม. เกรด AAA</span></li>
                         <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>พื้นห้องนอน:</strong> ไม้ลามิเนตหนา 8-12 มม. หรือกระเบื้องลายไม้</span></li>
                         <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>ห้องน้ำ/ระเบียง:</strong> กระเบื้องเซรามิกกันลื่น 30x30 ซม.</span></li>
                    </ul>
                </div>
            </div>
        </div>
        
         <!-- Door/Windows -->
         <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-50 text-primary rounded-xl flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     <!-- Icon Window -->
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">ประตูและหน้าต่าง (Doors & Windows)</h3>
                    <ul class="space-y-2 text-gray-600 text-sm md:text-base">
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>บานประตู/หน้าต่าง:</strong> อลูมิเนียมอบขาว หรือดำ Powder Coat กระจกเขียวตัดแสง</span></li>
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>ประตูห้องทั่วไป:</strong> บานไม้สังเคราะห์ UPVC หรือ WPC กันปลวกและน้ำ</span></li>
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>อุปกรณ์:</strong> ลูกบิดและบานพับสแตนเลสเกรด 304</span></li>
                    </ul>
                </div>
            </div>
        </div>
        
         <!-- Systems -->
         <div class="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-50 text-primary rounded-xl flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <!-- Icon Settings/System -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3">งานระบบ (M&E Systems)</h3>
                    <ul class="space-y-2 text-gray-600 text-sm md:text-base">
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>ระบบไฟฟ้า:</strong> สายไฟ Yazaki/BCC ร้อยท่อฝังผนัง ตู้ Consumer Unit ของ Schneider/Square D</span></li>
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>ระบบประปา:</strong> ท่อ PVC ตราช้าง SCG ชั้น 13.5 สำหรับน้ำดี</span></li>
                        <li class="flex items-start"><span class="mr-2 text-primary">•</span><span><strong>สุขภัณฑ์:</strong> Cotto, American Standard หรือ Karat</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-12 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between">
        <div class="mb-6 md:mb-0">
            <h3 class="text-2xl font-bold mb-2">การรับประกันคุณภาพ (Warranty)</h3>
            <ul class="space-y-1 text-white/90">
                <li class="flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>รับประกันโครงสร้างยาวนาน 20 ปี</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>รับประกันงานสถาปัตยกรรม 1 ปี</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>รับประกันงานหลังคา 5 ปี</li>
            </ul>
        </div>
        <div class="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        </div>
    </div>
</div>`,
    seo: { title: 'ระบบก่อสร้าง & Material Spec | DDHOUSE', description: 'ดูรายละเอียดระบบก่อสร้างและสเปควัสดุมาตรฐานของเรา' }
  },
  {
    id: 'page-004',
    slug: 'appointment',
    title: 'นัดหมายปรึกษาสถาปนิก',
    content: `<p class="text-lg text-gray-700 leading-relaxed mb-8">สนใจสร้างบ้านกับ DDHOUSE? กรอกข้อมูลด้านล่างเพื่อทำการนัดหมายพูดคุยกับสถาปนิกและทีมงานผู้เชี่ยวชาญของเราได้เลย! เราพร้อมให้คำปรึกษาและประเมินราคาเบื้องต้นโดยไม่มีค่าใช้จ่าย เพื่อให้คุณได้บ้านในฝันที่ตรงกับความต้องการและงบประมาณของคุณมากที่สุด</p><div class="my-12 p-6 bg-red-50 border-l-4 border-primary rounded-r-lg"><h3 class="text-xl font-bold text-gray-800 mb-4">หรือติดต่อเราผ่านช่องทางอื่น</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><a href="tel:029383456" class="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow group"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><span class="ml-3 font-semibold text-gray-700 group-hover:text-primary transition-colors">02 938 3456</span></a><a href="mailto:contact@ddhouse.com" class="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow group"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><span class="ml-3 font-semibold text-gray-700 group-hover:text-primary transition-colors">contact@ddhouse.com</span></a><a href="https://wa.me/6629383456" target="_blank" rel="noopener noreferrer" class="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow group"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg><span class="ml-3 font-semibold text-gray-700 group-hover:text-primary transition-colors">WhatsApp</span></a><a href="https://line.me" target="_blank" rel="noopener noreferrer" class="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow group"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M11.5,2C6.257,2,2,6.257,2,11.5,2.001,13.738,2.83,15.8,4.242,17.391,4.242,17.391,4,22,4,22L8.414,19.5,9.621,19.2A10.329,10.329,0,0,0,11.5,19.5c5.243,0,9.5-4.257,9.5-9.5S16.743,2,11.5,2Zm-3.4,11.571a1.214,1.214,0,1,1,1.214-1.214A1.214,1.214,0,0,1,8.1,13.571Zm3.429,0a1.214,1.214,0,1,1,1.214-1.214A1.214,1.214,0,0,1,11.529,13.571Zm3.428,0a1.214,1.214,0,1,1,1.214-1.214A1.214,1.214,0,0,1,14.957,13.571Z"></path></svg><span class="ml-3 font-semibold text-gray-700 group-hover:text-primary transition-colors">Line Official</span></a><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="flex items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow group sm:col-span-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg><span class="ml-3 font-semibold text-gray-700 group-hover:text-primary transition-colors">Facebook Page</span></a></div></div>`,
    seo: { title: 'นัดหมายปรึกษาสถาปนิก | DDHOUSE', description: 'นัดหมายเพื่อพูดคุยและรับคำปรึกษาจากสถาปนิกผู้เชี่ยวชาญ' }
  },
  {
    id: 'page-005',
    slug: 'extra-services',
    title: 'สินค้าและบริการเสริมครบวงจร',
    content: `<div class="py-6 animate-fade-in">
    <div class="text-center max-w-4xl mx-auto mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-primary mb-6">One Stop Service ครบจบในที่เดียว</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
             นอกจากการสร้างบ้าน เรายังมีบริการเสริมที่ครอบคลุมทุกความต้องการ เพื่อให้บ้านของคุณสมบูรณ์แบบที่สุด 
             โดยทีมงานมืออาชีพที่คุณวางใจได้
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Interior Design -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-primary">
            <div class="flex justify-center mb-6">
                <div class="w-16 h-16 bg-red-50 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>
                </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">ออกแบบและตกแต่งภายใน</h3>
            <p class="text-gray-600 text-center">เนรมิตพื้นที่ใช้สอยให้สวยงามลงตัว ด้วยทีมมัณฑนากรมากประสบการณ์ ตอบโจทย์ทุกไลฟ์สไตล์</p>
        </div>

        <!-- Swimming Pool -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-primary">
             <div class="flex justify-center mb-6">
                <div class="w-16 h-16 bg-red-50 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">รับสร้างสระว่ายน้ำ</h3>
            <p class="text-gray-600 text-center">บริการออกแบบและก่อสร้างสระว่ายน้ำ ระบบเกลือ/คลอรีน สปา และจากุซซี่ มาตรฐานสากล</p>
        </div>

        <!-- Landscape -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-primary">
             <div class="flex justify-center mb-6">
                <div class="w-16 h-16 bg-red-50 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
                </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">ออกแบบและจัดสวน</h3>
            <p class="text-gray-600 text-center">เปลี่ยนพื้นที่รอบบ้านให้เป็นสวนสวย ร่มรื่น เพิ่มพื้นที่สีเขียวเพื่อการพักผ่อนที่แท้จริง</p>
        </div>

        <!-- Smart Home -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-primary">
             <div class="flex justify-center mb-6">
                <div class="w-16 h-16 bg-red-50 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">ระบบ Smart Home</h3>
            <p class="text-gray-600 text-center">ยกระดับความสะดวกสบายและความปลอดภัย ด้วยระบบบ้านอัจฉริยะ ควบคุมได้ผ่านมือถือ</p>
        </div>

        <!-- Gate/Fence -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-primary">
             <div class="flex justify-center mb-6">
                <div class="w-16 h-16 bg-red-50 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>
                </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">รั้วและประตูรั้ว</h3>
            <p class="text-gray-600 text-center">ออกแบบและติดตั้งรั้ว ประตูรั้วรีโมท อลูมิเนียมลายไม้ หรือเหล็กดัด สวยงาม ทนทาน</p>
        </div>

        <!-- Meters -->
        <div class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-primary">
             <div class="flex justify-center mb-6">
                <div class="w-16 h-16 bg-red-50 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">ขอมิเตอร์น้ำ-ไฟ</h3>
            <p class="text-gray-600 text-center">บริการยื่นเรื่องขอติดตั้งมิเตอร์ประปาและไฟฟ้า (ถาวร) ให้พร้อมใช้งานก่อนเข้าอยู่</p>
        </div>
    </div>
    
    <div class="mt-16 text-center bg-white p-10 rounded-2xl shadow-lg border-b-4 border-secondary relative overflow-hidden">
         <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
        <h2 class="text-3xl font-bold text-primary mb-4">สนใจบริการเสริม หรือต้องการคำปรึกษา?</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto mb-0">
            เราพร้อมดูแลทุกขั้นตอนเพื่อให้บ้านของคุณสมบูรณ์แบบ ติดต่อทีมงานของเราเพื่อรับข้อเสนอพิเศษ
        </p>
    </div>
</div>`,
    seo: { title: 'สินค้าและบริการเสริม | DDHOUSE', description: 'เลือกชมสินค้าและบริการเสริมเพื่อบ้านของคุณ เช่น ตกแต่งภายใน สระว่ายน้ำ จัดสวน และอื่นๆ' }
  },
  {
    id: 'page-portfolio',
    slug: 'portfolio',
    title: 'ผลงานของเรา',
    content: '<p>ชมผลงานการสร้างสรรค์บ้านคุณภาพ ที่เราภาคภูมิใจส่งมอบให้กับลูกค้าทุกท่าน</p>',
    imageUrl: 'https://picsum.photos/seed/portfolio-hero/1600/800',
    seo: { title: 'ผลงานของเรา | DDHOUSE', description: 'ชมผลงานการสร้างสรรค์บ้านคุณภาพจาก DDHOUSE' }
  }
];

export const INITIAL_PROMO_CARDS: PromoCard[] = [
  {
    id: 'promo-001',
    title: 'นวัตกรรมที่มีเฉพาะ DDHOUSE',
    subtitle: '',
    imageUrl: 'https://picsum.photos/seed/promo1/800/400',
    linkType: 'page',
    linkValue: 'system-spec',
    size: '2x1',
    order: 1,
  },
  {
    id: 'promo-002',
    title: 'ผลงานสร้างบ้าน',
    subtitle: '',
    imageUrl: 'https://picsum.photos/seed/promo2/400/400',
    linkType: 'view',
    linkValue: 'portfolio',
    size: '1x1',
    order: 2,
  },
  {
    id: 'promo-003',
    title: 'แบบบ้านพร้อม',
    subtitle: 'Interior',
    imageUrl: 'https://picsum.photos/seed/promo3/1200/400',
    linkType: 'view',
    linkValue: 'designs',
    size: '3x1',
    order: 3,
  },
  {
    id: 'promo-004',
    title: 'ขั้นตอนการก่อสร้าง',
    subtitle: '',
    imageUrl: 'https://picsum.photos/seed/promo4/400/400',
    linkType: 'page',
    linkValue: 'construction-process',
    size: '1x1',
    order: 4,
  },
  {
    id: 'promo-005',
    title: 'ดาวน์โหลด',
    subtitle: 'E-Catalog',
    imageUrl: 'https://picsum.photos/seed/promo5/400/400',
    linkType: 'url',
    linkValue: '#', // Placeholder link
    size: '1x1',
    order: 5,
  },
  {
    id: 'promo-006',
    title: 'สินค้าและบริการเสริม',
    subtitle: '',
    imageUrl: 'https://picsum.photos/seed/promo6/400/400',
    linkType: 'page',
    linkValue: 'extra-services',
    size: '1x1',
    order: 6,
  },
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-001',
    title: 'ทำไม? คุณหมอ ถึงสร้างบ้านกับ แลนดี้ โฮม มากที่สุด',
    imageUrl: 'https://picsum.photos/seed/test1/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
    order: 1,
    isFeatured: true,
  },
  {
    id: 'test-002',
    title: 'สร้างบ้านอยากบอกต่อ คิดจะสร้างบ้านต้องดู EP.1',
    imageUrl: 'https://picsum.photos/seed/test2/400/225',
    videoUrl: 'https://www.youtube.com/embed/o-YBDTqX_ZU', // Placeholder video
    order: 2,
    isFeatured: false,
  },
  {
    id: 'test-003',
    title: 'ตอบโจทย์ทุกความต้องการ ใส่ใจทุกรายละเอียด ต้องแลนดี้ โฮม',
    imageUrl: 'https://picsum.photos/seed/test3/400/225',
    videoUrl: 'https://www.youtube.com/embed/3tmd-ClpJxA', // Placeholder video
    order: 3,
    isFeatured: false,
  },
  {
    id: 'test-004',
    title: 'รีวิวบ้าน Bristol',
    imageUrl: 'https://picsum.photos/seed/test4/400/225',
    videoUrl: 'https://www.youtube.com/embed/C0DPdy98e4c', // Placeholder video
    order: 4,
    isFeatured: false,
  },
];

export const INITIAL_NOTIFICATIONS: SiteNotification[] = [
  {
    id: 'notif-001',
    message: '🎉 ขอต้อนรับสู่เว็บไซต์โฉมใหม่ของเรา พบกันโปรโมชั่นใหม่เร็วๆนี้ - Coming Soon',
    isActive: true,
  }
];

export const INITIAL_POPUP_MODAL: PopupModalContent = {
  id: 'popup-001',
  isEnabled: true,
  imageUrl: 'https://picsum.photos/seed/popup/600/400',
  title: 'โปรโมชันพิเศษ!',
  description: 'ลงทะเบียนวันนี้ รับส่วนลดพิเศษสำหรับแบบบ้านทุกหลัง พร้อมรับคำปรึกษาจากสถาปนิกฟรี!',
  ctaText: 'ดูโปรโมชัน',
  linkType: 'view',
  linkValue: 'designs'
};

export const INITIAL_SITE_INFO: SiteInfo = {
  siteName: 'DDHOUSE',
  siteTagline: '',
  logoUrl: 'https://i.ibb.co/wFCmP663/logo.jpg',
  phone: '097 978 7459',
  officeHours: 'ทำการทุกวัน 09:00 - 18:00 น.',
  socials: {
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
    line: 'https://line.me',
    whatsapp: 'https://wa.me/'
  },
  promoFormImageUrl: 'https://i.ibb.co/wFCmP663/logo.jpg',
  buttonLabels: {
    viewAllHomes: 'ดูแบบบ้านทั้งหมด',
    viewAllArticles: 'ดูบทความทั้งหมด',
    viewAllTestimonials: 'ดูทั้งหมด',
  },
  globalSeo: {
    titleTemplate: '%s | DDHOUSE',
    defaultDescription: 'Discover modern home designs and build your dream house with DDHOUSE. Quality construction and beautiful architecture.',
    defaultKeywords: 'home design, build house, modern homes, construction, architecture',
  },
};
