export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about-us' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Events', to: '/events' },
  { label: 'Blog', to: '/blog' },
  { label: 'Awards and Certificates', to: '/awards-and-certificates' },
  { label: 'Contact', to: '/contact' },
];

export const CONTACT = {
  phone: '(+91) 98730 66683',
  email: 'manuj@greyboxtechnologies.com',
  address: 'I-48A, Kirti Nagar, New Delhi - 110015',
};

export const CLIENTS = [
  { name: 'Microsoft', logo: 'https://greyboxtechnologies.com/wp-content/uploads/2015/06/microsoft.jpg' },
  { name: 'Google', logo: 'https://greyboxtechnologies.com/wp-content/uploads/2015/06/google.jpg' },
  { name: 'SAP', logo: 'https://greyboxtechnologies.com/wp-content/uploads/2015/06/sap.jpg' },
  { name: 'Philips', logo: 'https://greyboxtechnologies.com/wp-content/uploads/2015/06/phillips.jpg' },
  { name: 'EY', logo: 'https://greyboxtechnologies.com/wp-content/uploads/2015/06/EY.jpg' },
  { name: 'Motorola', logo: 'https://greyboxtechnologies.com/wp-content/uploads/2015/06/motorola.jpg' },
  { name: 'Times Internet', logo: 'https://greyboxtechnologies.com/wp-content/uploads/2015/06/times.jpg' },
  { name: 'Bajaj FinServ', logo: 'https://greyboxtechnologies.com/wp-content/uploads/2015/06/bajaj.jpg' },
  { name: 'Hexaware Technologies', logo: 'https://greyboxtechnologies.com/wp-content/uploads/2015/06/hexa.jpg' },
];

export const AWARDS = [
  {
    name: 'Google Partner',
    logo: 'https://greyboxtechnologies.com/wp-content/uploads/2019/04/google_partner-logo.jpg',
    description: 'GreyBox Technologies is a certified Google Partner, recognised for managing high-performing AdWords campaigns to Google’s standards.',
  },
  {
    name: 'AdWords Certified',
    logo: 'https://greyboxtechnologies.com/wp-content/uploads/2019/04/adowrds-logo1.jpg',
    description: 'Google AdWords certification across Advertising Fundamentals, Advanced Search and Advanced Display.',
  },
  {
    name: 'Google Analytics',
    logo: 'https://greyboxtechnologies.com/wp-content/uploads/2019/04/analytics-logo.jpg',
    description: 'Certified expertise in Google Analytics — measurement infrastructure, channel attribution and conversion analysis.',
  },
];

export const SERVICES = [
  {
    title: 'Traffic Monetization',
    what: 'Turning the visitors you already have into new, high-margin revenue streams.',
    why: 'Most sites sit on unmonetised traffic. We find the products and models your audience will pay for.',
    outcome: 'New profit streams — in one engagement, ~Rs. 1 Crore of eBook sales in 18 months at 90%+ margins.',
  },
  {
    title: 'Email Marketing',
    what: 'Strategy, measurement and campaign systems for email that sells.',
    why: 'Email without measurement is guesswork. We build the strategy and the tracking that proves what works.',
    outcome: 'A measured ROI of Rs. 13.45 on every rupee spent on the campaign.',
  },
  {
    title: 'Product Creation',
    what: 'Inventing and launching products your existing audience already wants.',
    why: 'The fastest revenue is a new product sold to traffic you already own.',
    outcome: 'A product “created out of thin air” that turned profitable in 3 months and added Rs. 30+ Lacs of fresh revenue.',
  },
  {
    title: 'Strategic SEO',
    what: 'Information architecture, content strategy and technical foundations for organic growth.',
    why: 'Search engines reward structure. We fix the architecture first, then grow traffic on solid ground.',
    outcome: 'A 701% uplift in organic traffic for a not-for-profit Olympiad site.',
  },
  {
    title: 'CRO: Conversion Optimization',
    what: 'Research-driven improvements to funnels, checkout flows and user experience.',
    why: 'Small friction points leak large revenue. We find them, fix them and measure the win.',
    outcome: 'An overall win of 147% in funnel conversion rate on an e-commerce checkout.',
  },
  {
    title: 'AdWords | PPC | SEM',
    what: 'Certified paid-search strategy, structure and optimisation.',
    why: 'Paid traffic should pay for itself. As a Google Partner, we run accounts to Google’s highest standards.',
    outcome: 'Clients report 35%+ growth in visit-to-lead conversions and 30%+ reduction in cost per lead.',
  },
];

export const CASE_STUDIES = [
  {
    slug: 'traffic-monetization-strategy',
    title: 'Traffic Monetization Strategy',
    tagline: 'A brand-new stream of highly profitable business — ~Rs. 1 Crore of eBook sales in 18 months.',
    metrics: [
      { value: 1, prefix: 'Rs. ', suffix: ' Crore', label: 'eBook sales in 18 months', decimals: 0 },
      { value: 90, suffix: '%+', label: 'profit margin on eBooks', decimals: 0 },
      { value: 40, suffix: '%+', label: 'of entire online revenue', decimals: 0 },
    ],
    problem: 'The client’s online revenue depended on physical products. It took over 6 months to overcome the mindset and upload the first eBook — digital products were an untapped, highly profitable stream.',
    strategy: 'Introduce instant-download eBooks as a new line of business monetising the traffic and audience the site already had.',
    implementation: 'The first product sold 12 copies in 3 days. The client immediately saw the potential and uploaded 85 products in the next 30 days.',
    result: 'In 18 months the instant-download eBook section became over 40% of the entire online revenue. The eBooks became the most profitable products, with profits over 90%, and around Rs. 1 Crore worth of eBooks were sold.',
  },
  {
    slug: 'email-marketing-strategy',
    title: 'Email Marketing Strategy',
    tagline: 'An ROI of Rs. 13.45 on every rupee spent on the campaign.',
    metrics: [
      { value: 13.45, prefix: 'Rs. ', suffix: '', label: 'return on every rupee spent', decimals: 2 },
    ],
    problem: 'Emails were being sent in an un-organised manner with no monitoring and measurement system in place. There was no strategy to select products for specific campaigns, and no way to measure open rate, click rate or resulting sales. Campaigns were repeated or stopped at the discretion of the operator.',
    strategy: 'Build the entire email marketing strategy from the ground up, with measurement designed in from day one.',
    implementation: 'We implemented the measurement strategy, deployed measurement technologies and integrated the measurement systems with the emailing platform and the e-commerce site.',
    result: 'The strategy resulted in an ROI of Rs. 13.45 on every rupee spent on the campaign.',
  },
  {
    slug: 'product-creation-strategy-for-ecommerce-site',
    title: 'Product Creation Strategy for eCommerce',
    tagline: 'A product “invented out of thin air” — profitable in 3 months, Rs. 30+ Lacs of fresh revenue.',
    metrics: [
      { value: 30, prefix: 'Rs. ', suffix: '+ Lacs', label: 'of fresh revenue', decimals: 0 },
      { value: 3, suffix: ' months', label: 'to profitability after launch', decimals: 0 },
    ],
    problem: 'Visitors were buying print and eBook editions from the e-commerce site. The site had a decent amount of traffic and was converting well — the objective was to introduce new products and make more money from the existing traffic.',
    strategy: 'With innovative ideas and product strategy, we “invented” the product “out of thin air” and started selling it to the existing audience.',
    implementation: 'The new product was launched to the site’s existing traffic, out-performing every other product on the store.',
    result: 'The product became profitable within 3 months of its launch and brought over Rs. 30 Lacs of fresh revenue — a stream that didn’t even exist a few months earlier.',
  },
  {
    slug: 'strategic-seo',
    title: 'Strategic SEO',
    tagline: 'A 701% uplift in organic traffic.',
    metrics: [
      { value: 701, suffix: '%', label: 'uplift in organic traffic', decimals: 0 },
    ],
    problem: 'A not-for-profit NGO that conducts Olympiads had a site built in HTML and Flash. The site had no measurement system, no proper information architecture (IA) or navigation architecture (NA). A comprehensive audit revealed tons of problems — broken links and isolated content islands invisible to search engines.',
    strategy: 'Propose a content management system, design a new information and navigation architecture, and rebuild the content and engagement strategy on top of it.',
    implementation: 'We migrated the site to a CMS, implemented the new IA/NA and executed the content and engagement strategy.',
    result: 'The new implementation resulted in 700%+ more organic traffic — a measured uplift of 701%.',
  },
  {
    slug: 'cro-conversion-rate-optimization-strategy',
    title: 'CRO: Conversion Rate Optimization Strategy',
    tagline: 'An overall win of 147% in the funnel conversion rate.',
    metrics: [
      { value: 147, suffix: '%', label: 'funnel conversion-rate win', decimals: 0 },
    ],
    problem: 'An e-commerce site was converting well and producing consistent revenue — but research showed conversions could be improved by working on the user experience in the checkout process.',
    strategy: 'Focus conversion-rate optimisation on the checkout funnel, where friction was costing real sales.',
    implementation: 'We designed and implemented a proposed new and improved checkout process.',
    result: 'On implementing the new checkout process, the site gained an overall win of 147% in the funnel conversion rate.',
  },
];

export const FOUNDERS = [
  {
    name: 'Manuj Bajaj',
    role: 'CEO',
    photo: 'https://greyboxtechnologies.com/wp-content/uploads/2022/01/g1-150x150.png',
    tags: ['Business Marketing Coach', 'Profit Coach', 'AdWords Certified', 'Experienced Digital Marketer', 'Speaker', 'Authored 26 books', 'Amazon Best Seller Author'],
    bio: [
      'He’s been a trusted adviser and profit growth strategist to businesses from the SMB level and has trained, advised and coached all the way up to Fortune 50 companies’ top management and stake holders.',
      'He has been exceptionally successful at what he does for others and as a result has produced several dozen success stories. He has turned around businesses that were complete disasters and loss-making into highly profitable and scalable ones.',
      'He has an incredible wealth and depth of knowledge derived from first-hand experience while working in different industries.',
    ],
    credentials: [
      '25+ years of experience in various verticals at multiple positions.',
      'Helped 4700+ businesses grow their profits anywhere between 17% to over 2000%.',
      'AdWords Masterclass Trainer at Google Gurgaon. Training Partner for Microsoft and Google India.',
      'Degree in Electrical Engineering from Delhi College of Engineering (DCE).',
      'Authored 26 books and sold 450,000+ copies in 13 countries in 2 languages. Books available on Amazon, Flipkart, SnapDeal, Fishpond (Australia), Book Depository (UK), MightyApe and more.',
      'Amazon Best Seller Author — “129 Digital Marketing Tools You Can’t Live Without”.',
      'Worked with Fortune 50 and 100 companies like Microsoft and Google, and others like Accenture, Philips, SAP, EY, Times Internet, Swarovski, Penguin Random House, Bajaj FinServ, Motorola, Dabur, Hexaware, SBI Cards, Tata Motors, Aditya Birla Group and more.',
      'Conducts the workshop “Profit Explosion Mastery – Digital Marketing for Business Owners”.',
      'Invited by IITs and IIMs as the industry expert to deliver industry insights.',
    ],
    email: 'manuj@greyboxtechnologies.com',
    phone: '(+91) 98730 66683',
    linkedin: 'http://in.linkedin.com/in/manujbajaj',
  },
  {
    name: 'Rajeev Sharma',
    role: 'CTO',
    photo: 'https://greyboxtechnologies.com/wp-content/uploads/2022/01/g2-150x150.png',
    tags: ['Web Analyst', 'Digital Marketing Consultant', 'Coder', 'Speaker'],
    bio: [
      'Information Technology fascinates Rajeev — he is a web analyst, digital marketing consultant and a coder.',
      'Working closely with various B2B and B2C businesses to achieve their online goals, he has produced successful results, including measuring the true contribution of each online marketing channel through the analytics infrastructure he deploys.',
    ],
    credentials: [
      'Almost 2 decades of total experience.',
      'Marketing specialties: Web Analytics, PPC, Conversion Optimization, Email, Content Strategy, Social, User Experience Optimization.',
      'Growth enhancement through Conversion Rate Optimization.',
      'Website performance optimization.',
      'Coding experience of more than a decade; headed and worked on several e-projects.',
      'Vast coding experience gives him the advantage of writing easier implementation guides for development teams.',
      'Strong knowledge of hardware and server operating systems.',
    ],
    email: 'rajeev@greyboxtechnologies.com',
    phone: '(+91) 9818528499',
    linkedin: 'http://in.linkedin.com/in/rajeevsharmainfo/',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Manuj has completely original and extremely strategic perspective towards AdWords. He has come up with some original insights that are literally priceless for my business. We’ve experienced over 35% growth in visit to lead conversions and over 30% reduction in cost per lead.',
    name: 'Pradeep Chopra',
    designation: 'Digital Vidya | CEO',
  },
  {
    quote: 'Highly effective and able to transmit knowledge in a relevant manner which is interesting and addresses the business needs.',
    name: 'Konia Khanna',
    designation: 'Swarovski | Head of Marketing',
  },
];

export const EVENTS = [
  {
    title: 'Profit Explosion Mastery — Digital Marketing for Business Owners',
    type: 'Workshop',
    description: 'GreyBox’s flagship workshop for business owners, conducted by CEO Manuj Bajaj — a hands-on program on using digital marketing to explode profits.',
  },
  {
    title: 'AdWords Masterclass — Google Gurgaon',
    type: 'Training',
    description: 'Manuj Bajaj is an AdWords Masterclass Trainer at Google Gurgaon and a Training Partner for Microsoft and Google India.',
  },
  {
    title: 'Industry Expert Sessions — IITs & IIMs',
    type: 'Guest Lecture',
    description: 'Invited by IITs and IIMs as the industry expert to deliver industry insights on digital marketing and online business growth.',
  },
];

export const INSIGHTS = [
  {
    title: 'How we produced a 701% uplift in organic traffic',
    category: 'Strategic SEO',
    excerpt: 'A not-for-profit Olympiad site was invisible to search engines — broken links, Flash content, no architecture. Here’s how a new information architecture changed everything.',
    to: '/case-studies',
  },
  {
    title: 'Rs. 13.45 back on every rupee: email marketing with measurement',
    category: 'Email Marketing',
    excerpt: 'Un-organised campaigns with no tracking became a measured, integrated email system. The difference between sending email and running an email strategy.',
    to: '/case-studies',
  },
  {
    title: 'Inventing a product “out of thin air” for an e-commerce audience',
    category: 'Product Creation',
    excerpt: 'The fastest revenue is a new product sold to traffic you already own. One product, profitable in 3 months, Rs. 30+ Lacs of fresh revenue.',
    to: '/case-studies',
  },
  {
    title: 'The 147% checkout win: CRO where it matters most',
    category: 'CRO',
    excerpt: 'A site that was already converting well still leaked revenue in its checkout. What changed when we rebuilt the funnel experience.',
    to: '/case-studies',
  },
  {
    title: 'From “red” to “black”: monetising traffic with digital products',
    category: 'Traffic Monetization',
    excerpt: 'Twelve copies in three days was all the proof needed. Eighteen months later, eBooks were over 40% of the client’s entire online revenue.',
    to: '/case-studies',
  },
];
