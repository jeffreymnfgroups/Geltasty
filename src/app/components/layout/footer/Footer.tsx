import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../header/Logo'

const Footer = () => {
  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='py-16 border-b border-dark_black/10 dark:border-white/10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
            {/* Column 1: Company Info */}
            <div className='flex flex-col gap-6'>
              <Logo />
              <p className='opacity-60 text-sm'>
                Science-Driven Learning for Competitive Exam Success
              </p>
              <p className='text-sm opacity-60'>
                Transforming NEET and UPSC preparation through cognitive analytics, expert mentorship, and evidence-based learning systems.
              </p>
              <div className='flex gap-4'>
                <Link href="#" className='hover:opacity-60'>
                  <Image src="/images/home/footerSocialIcon/linkedin.svg" alt="LinkedIn" height={20} width={20} />
                </Link>
                <Link href="#" className='hover:opacity-60'>
                  <Image src="/images/home/footerSocialIcon/twitter.svg" alt="Twitter" height={20} width={20} />
                </Link>
                <Link href="#" className='hover:opacity-60'>
                  <Image src="/images/home/footerSocialIcon/instagram.svg" alt="Instagram" height={20} width={20} />
                </Link>
                {/* <Link href="#" className='hover:opacity-60'>
                  <Image src="/images/home/footerSocialIcon/facebook.svg" alt="Facebook" height={20} width={20} />
                </Link>
                <Link href="#" className='hover:opacity-60'>
                  <Image src="/images/home/footerSocialIcon/youtube.svg" alt="YouTube" height={20} width={20} />
                </Link> */}
              </div>
            </div>

            {/* Column 2: Platform */}
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Platform</p>
              <ul className='flex flex-col gap-3'>
                <li><Link href="/features" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Features Overview</Link></li>
                <li><Link href="/platform" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Learning Analytics</Link></li>
                <li><Link href="/mentorship" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Mentorship Program</Link></li>
                <li><Link href="/how-it-works" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>How It Works</Link></li>
                <li><Link href="/mobile-app" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Mobile App</Link></li>
                <li><Link href="/demo" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Platform Demo</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Resources</p>
              <ul className='flex flex-col gap-3'>
                <li><Link href="/blog" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Blog</Link></li>
                <li><Link href="/success-stories" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Success Stories</Link></li>
                <li><Link href="/research" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Research & Methodology</Link></li>
                <li><Link href="/study-guides" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Study Guides</Link></li>
                <li><Link href="/faq" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>FAQs</Link></li>
                <li><Link href="/help" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Help Center</Link></li>
                <li><Link href="/webinars" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Webinar Recordings</Link></li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Company</p>
              <ul className='flex flex-col gap-3'>
                <li><Link href="/about-us" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>About Us</Link></li>
                <li><Link href="/mission" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Our Mission</Link></li>
                <li><Link href="/team" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Team</Link></li>
                <li><Link href="/careers" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Careers</Link></li>
                <li><Link href="/press" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Press Kit</Link></li>
                <li><Link href="/contact" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 5: Legal & Support */}
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Legal & Support</p>
              <ul className='flex flex-col gap-3'>
                <li><Link href="/privacy-policy" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Terms of Service</Link></li>
                <li><Link href="/refund-policy" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Refund Policy</Link></li>
                <li><Link href="/mentor-agreement" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Mentor Agreement</Link></li>
                <li><Link href="/support" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Contact Support</Link></li>
                <li><Link href="/report-issue" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>Report Issue</Link></li>
              </ul>
            </div>

            {/* Column 6: Get Started */}
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>Get Started</p>
              <div className='space-y-4'>
                <div>
                  <p className='text-sm font-medium mb-2'>For Aspirants:</p>
                  <ul className='flex flex-col gap-2'>
                    <li><Link href="/get-started" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white text-sm'>Get Started</Link></li>
                    <li><Link href="/pricing" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white text-sm'>View Pricing</Link></li>
                    <li><Link href="https://calendly.com/dimentussolutions/30min" target="_blank" rel="noopener noreferrer" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white text-sm'>Schedule Demo</Link></li>
                  </ul>
                </div>
                <div>
                  <p className='text-sm font-medium mb-2'>For Mentors:</p>
                  <ul className='flex flex-col gap-2'>
                    <li><Link href="/become-mentor" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white text-sm'>Become a Mentor</Link></li>
                    <li><Link href="/mentor-guidelines" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white text-sm'>Mentor Guidelines</Link></li>
                    <li><Link href="/apply-now" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white text-sm'>Apply Now</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-4'>
          <p className='text-dark_black/60 dark:text-white/60 text-sm'>
            © 2025 Gestalty. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <Link href="/privacy-policy" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white text-sm'>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white text-sm'>
              Terms of Service
            </Link>
            <Link href="/cookie-preferences" className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white text-sm'>
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
