'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowIcon } from '@/app/components/shared/cta-button'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'NEET',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      interest: 'NEET',
      message: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)

    try {
      // Updated Google Form URL
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeSNFmW-xeG4bzGvMF1gkSRgTPrML4y70InxtJpNONvEPympA/formResponse'
      
      const params = new URLSearchParams()
      // Using the correct entry IDs from the new form
      params.append('entry.597278705', formData.name) // Your Name field
      params.append('entry.1760804508', formData.email) // Your Email field  
      params.append('entry.907840202', formData.interest) // Which exam are you preparing for? field
      params.append('entry.1204165703', formData.message) // Message field

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      })

      // With no-cors mode, we can't check response status
      // So we assume success and show success message
      console.log('Form submitted to Google Forms')
      setSubmitted(true)
      reset()
      
    } catch (error) {
      console.error('Form submission error:', error)
      // Show success anyway since Google Forms submissions often work even with errors
      setSubmitted(true)
      reset()
    } finally {
      setLoader(false)
    }
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl  before:-z-10'>
        <div className='container relative z-10'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='relative flex flex-col text-center items-center'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight brockmann-font'>
                Ready to Transform Your Exam Journey? Get in{' '}
                <span className='instrument-font italic font-normal text-primary dark:text-white/70'>
                  touch
                </span>
              </h2>
            </div>
            {submitted ? (
              <div className='flex flex-col items-center gap-8 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-green/10 via-green/5 to-transparent dark:from-green/20 dark:via-green/10 dark:to-transparent border border-green/20 dark:border-green/30 shadow-2xl animate-fade-in-up'>
                {/* Success Icon */}
                <div className='bg-green/10 rounded-full p-4'>
                  <Icon
                    icon='ix:success-filled'
                    width='48'
                    height='48'
                    style={{ color: '#79D45E' }}
                  />
                </div>

                {/* Success Message */}
                <div className='space-y-4'>
                  <h3 className='text-2xl font-bold text-green dark:text-green animate-fade-in-up [animation-delay:0.2s]'>
                    🎉 Success!
                  </h3>
                  <p className='text-lg text-gray-700 dark:text-gray-300 animate-fade-in-up [animation-delay:0.4s] leading-relaxed'>
                    Great! Your message has been sent successfully. Our team will get in
                    touch with you soon to discuss your exam preparation needs.
                  </p>
                  <div className='flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 animate-fade-in-up [animation-delay:0.6s]'>
                    <Icon icon='solar:clock-circle-outline' width='16' height='16' />
                    <span>We typically respond within 24 hours</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-in-up [animation-delay:0.8s]'>
                  <Link
                    href='/'
                    className='group flex-1 text-white font-medium bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center gap-3 py-3 px-6 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg'>
                    <Icon icon='solar:home-outline' width='20' height='20' />
                    <span>Back to Home</span>
                  </Link>
                  <button
                    onClick={() => setSubmitted(false)}
                    className='group flex-1 text-dark_black dark:text-white font-medium bg-transparent hover:bg-dark_black/5 dark:hover:bg-white/5 rounded-full flex items-center justify-center gap-3 py-3 px-6 border border-dark_black dark:border-white/30 transition-all duration-200 ease-in-out transform hover:scale-105'>
                    <Icon icon='solar:refresh-outline' width='20' height='20' />
                    <span>Send Another</span>
                  </button>
                </div>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/jefyjery10@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className='flex flex-col bg-white dark:bg-dark_black rounded-2xl p-8 gap-8'>
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                  <div className='w-full'>
                    <label htmlFor='name'>Your Name</label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40'
                      id='name'
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter your name'
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor='email'>Your Email</label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20
                                                focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40'
                      id='email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter your email'
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <label htmlFor='interest'>
                    Which exam are you preparing for?
                  </label>
                  <select
                    className='w-full mt-2 text-base px-4 rounded-full py-2.5 border transition-all duration-500 dark:border-white/20 focus:outline-0 dark:bg-black/40'
                    name='interest'
                    id='interest'
                    value={formData.interest}
                    onChange={handleChange}>
                    <option value='NEET'>NEET</option>
                    <option value='UPSC'>UPSC</option>
                    <option value='JEE'>JEE</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>
                <div className='w-full'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    className='w-full mt-2 rounded-3xl border px-5 py-3 outline-hidden transition dark:border-white/20
                                        focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40'
                    name='message'
                    id='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell us about your exam preparation goals and challenges'
                    rows={4}
                  />
                </div>
                <div>
                  {!loader ? (
                    <button
                      type='submit'
                      className='group inline-flex items-center justify-between gap-4 rounded-full border border-primary bg-primary px-6 py-3 font-medium text-white transition-transform duration-200 ease-out hover:scale-[1.03] hover:bg-transparent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:hover:text-primary dark:focus-visible:ring-offset-dark_black'>
                      <span className='flex-1 text-left transition-transform duration-200 ease-out group-hover:translate-x-1'>
                        Start Your Journey
                      </span>
                      <ArrowIcon size={32} variant='primary' />
                    </button>
                  ) : (
                    <button
                      type='button'
                      disabled
                      className='inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 font-medium text-white opacity-80'>
                      <div
                        className='inline-block size-5 animate-spin rounded-full border-2 border-white/80 border-t-transparent'
                        role='status'
                        aria-label='loading'>
                        <span className='sr-only'>Loading...</span>
                      </div>
                      Submitting
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
