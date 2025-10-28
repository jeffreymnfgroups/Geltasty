'use client'
import { useEffect, useState } from 'react'
import type { avatar, brand, innovation, onlinePresence, creativeMind, WebResultTag, startupPlan, faq, achievements } from '@/app/types/menu'

interface PageData {
  avatarList?: avatar[]
  brandList?: brand[]
  innovationList?: innovation[]
  onlinePresenceList?: onlinePresence[]
  creativeMindList?: creativeMind[]
  WebResultTagList?: WebResultTag[]
  startupPlanList?: startupPlan[]
  faqList?: faq[]
  achievementsList?: achievements[]
}

// Static data - no API call needed
const PAGE_DATA: PageData = {
  avatarList: [
    {
      image: '/images/home/avatar_1.jpg',
      title: 'Priya Sharma - NEET AIR 47',
    },
    {
      image: '/images/home/avatar_2.jpg',
      title: 'Arjun Patel - UPSC AIR 12',
    },
    {
      image: '/images/home/avatar_3.jpg',
      title: 'Sneha Reddy - NEET AIR 89',
    },
    {
      image: '/images/home/avatar_4.jpg',
      title: 'Rahul Kumar - UPSC AIR 156',
    },
  ],
  brandList: [
    {
      image: '/images/home/brand/NTA_logo.png',
      darkImg: '/images/home/brand/NTA_logo.png',
      title: 'NTA',
    },
    {
      image: '/images/home/brand/upsc.png',
      darkImg: '/images/home/brand/upsc.png',
      title: 'UPSC',
    },
    {
      image: '/images/home/brand/JEE.png',
      darkImg: '/images/home/brand/JEE.png',
      title: 'JEE',
    },
  ],
  innovationList: [
    {
      image: '/images/home/innovation/brand.svg',
      title: 'Learning\nAnalytics',
      bg_color: 'bg-purple/20',
      txt_color: 'text-purple',
    },
    {
      image: '/images/home/innovation/digitalmarketing.svg',
      title: 'Cognitive\nScience',
      bg_color: 'bg-blue/20',
      txt_color: 'text-blue',
    },
    {
      image: '/images/home/innovation/uiux.svg',
      title: 'Expert\nMentorship',
      bg_color: 'bg-orange/20',
      txt_color: 'text-orange',
    },
    {
      image: '/images/home/innovation/analitics.svg',
      title: 'Data-Driven\nInsights',
      bg_color: 'bg-green/20',
      txt_color: 'text-green',
    },
    {
      image: '/images/home/innovation/webdevp.svg',
      title: 'Smart\nPlanning',
      bg_color: 'bg-pink/20',
      txt_color: 'text-pink',
    },
  ],
  onlinePresenceList: [
    {
      image: '/images/home/onlinePresence/online_img_1.jpg',
      title: 'NEET Success Story',
      tag: ['Learning Analytics', 'Cognitive Science'],
      link: 'https://gestalty.com/success-stories',
    },
    {
      image: '/images/home/onlinePresence/online_img_2.jpg',
      title: 'UPSC Achievement',
      tag: ['Expert Mentorship', 'Data-Driven Learning'],
      link: 'https://gestalty.com/success-stories',
    },
    {
      image: '/images/home/onlinePresence/online_img_3.jpg',
      title: 'JEE Preparation',
      tag: ['Smart Planning', 'Retention System'],
      link: 'https://gestalty.com/success-stories',
    },
    {
      image: '/images/home/onlinePresence/online_img_4.jpg',
      title: 'Platform Demo',
      tag: ['Real-time Analytics', 'Mentor Network'],
      link: 'https://gestalty.com/demo',
    },
  ],
  creativeMindList: [
    {
      image: '/images/home/creative/creative_img_1.png',
      name: 'Dr. Priya Sharma',
      position: 'NEET Mentor - AIR 47',
      twitterLink: 'https://x.com/',
      linkedinLink: 'https://in.linkedin.com/',
    },
    {
      image: '/images/home/creative/creative_img_2.png',
      name: 'Arjun Patel',
      position: 'UPSC Mentor - AIR 12',
      twitterLink: 'https://x.com/',
      linkedinLink: 'https://in.linkedin.com/',
    },
    {
      image: '/images/home/creative/creative_img_3.png',
      name: 'Dr. Sneha Reddy',
      position: 'JEE Mentor - AIR 89',
      twitterLink: 'https://x.com/',
      linkedinLink: 'https://in.linkedin.com/',
    },
    {
      image: '/images/home/creative/creative_img_4.png',
      name: 'Rahul Kumar',
      position: 'UPSC Mentor - AIR 156',
      twitterLink: 'https://x.com/',
      linkedinLink: 'https://in.linkedin.com/',
    },
  ],
  WebResultTagList: [
    {
      image: '/images/home/result/creativity.svg',
      name: 'Analytics',
      bg_color: 'bg-purple/20',
      txt_color: 'text-purple',
    },
    {
      image: '/images/home/result/innovation.svg',
      name: 'Mentorship',
      bg_color: 'bg-blue/20',
      txt_color: 'text-blue',
    },
    {
      image: '/images/home/result/strategy.svg',
      name: 'Science',
      bg_color: 'bg-orange/20',
      txt_color: 'text-orange',
    },
  ],
  startupPlanList: [
    {
      plan_bg_color: 'bg-pale-yellow',
      text_color: 'text-dark_black',
      descp_color: 'dark_black/60',
      border_color: 'border-dark_black/10',
      plan_name: 'Starter',
      plan_descp: 'Perfect for focused exam preparation with essential features',
      plan_price: '₹2,999',
      icon_img: '/images/home/startupPlan/white_tick.svg',
      plan_feature: [
        'Learning Analytics Dashboard',
        'Basic Mentor Support',
        'SMART Goal Framework',
        'Progress Tracking',
        '2x Mentor Calls Per Month',
        'Mobile App Access',
      ],
    },
    {
      plan_bg_color: 'bg-purple_blue',
      text_color: 'text-white',
      descp_color: 'white/60',
      border_color: 'border-white/10',
      plan_name: 'Pro',
      plan_descp: 'Complete preparation ecosystem with expert mentorship and advanced analytics',
      plan_price: '₹4,999',
      icon_img: '/images/home/startupPlan/black_tick.svg',
      plan_feature: [
        'Advanced Learning Analytics',
        '1:1 Expert Mentor Sessions',
        'Cognitive Science Tools',
        'Retention & Revision System',
        '4x Mentor Calls Per Month',
        'Parent Dashboard Access',
      ],
    },
  ],
  faqList: [
    {
      faq_que: 'What makes Gestalty different from other exam preparation platforms?',
      faq_ans:
        'Gestalty combines cognitive science, data analytics, and expert mentorship to provide personalized, evidence-based preparation. We track your learning through four distinct stages (Reading, Learning, Revision, Practice) and provide real-time insights to optimize your study strategy.',
    },
    {
      faq_que: 'How does the mentor matching work?',
      faq_ans:
        'Our AI-powered system matches you with verified successful aspirants based on your exam type, learning style, and goals. All mentors are trained in our methodology and provide 1:1 guidance using your performance data.',
    },
    {
      faq_que: 'What exams does Gestalty support?',
      faq_ans:
        'We currently support NEET, UPSC, and JEE preparation with specialized content, mentors, and analytics for each exam. Our platform adapts to the specific requirements and patterns of each competitive exam.',
    },
    {
      faq_que: 'How does the learning analytics work?',
      faq_ans:
        'Our system tracks your progress through four cognitive stages, measures learning quality (not just time spent), and provides insights on retention, application ability, and areas needing improvement. All metrics are based on proven cognitive science research.',
    },
    {
      faq_que: 'Can parents track their child\'s progress?',
      faq_ans:
        'Yes, we provide a dedicated parent dashboard that shows overall progress, consistency metrics, and mentor feedback while respecting student privacy. Students control what information is shared.',
    },
    {
      faq_que: 'Is there a mobile app available?',
      faq_ans:
        'Yes, our mobile app provides seamless access to all features including learning analytics, mentor communication, goal tracking, and study reminders. Available on both iOS and Android platforms.',
    },
  ],
  achievementsList: [
    {
      icon: '/images/home/achievement/framer_award.svg',
      dark_icon: '/images/home/achievement/dark_framer_award.svg',
      sub_title: 'EdTech Innovation Award',
      title:
        'Recognized for revolutionizing exam preparation through cognitive science and data analytics.',
      year: '2024',
      url: 'https://gestalty.com/awards',
    },
    {
      icon: '/images/home/achievement/dribble_award.svg',
      dark_icon: '/images/home/achievement/dribble_award.svg',
      sub_title: 'Best Learning Platform',
      title: 'Awarded for exceptional student outcomes and mentor satisfaction',
      year: '2023',
      url: 'https://gestalty.com/awards',
    },
    {
      icon: '/images/home/achievement/awward_award.svg',
      dark_icon: '/images/home/achievement/dark_awward_award.svg',
      sub_title: 'Cognitive Science Excellence',
      title:
        'Honored for integrating research-backed learning methodologies into practical preparation tools.',
      year: '2022',
      url: 'https://gestalty.com/awards',
    },
  ],
}

let cachedData: PageData | null = null

export function usePageData() {
  const [data, setData] = useState<PageData | null>(cachedData || PAGE_DATA)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Data is loaded immediately from constants
    if (!cachedData) {
      cachedData = PAGE_DATA
    }
    setData(cachedData)
    setLoading(false)
  }, [])

  return { data, loading }
}
