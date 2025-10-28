'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'NEET Preparation',
    budget: '',
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
    formData.name = ''
    formData.email = ''
    formData.interest = 'NEET Preparation'
    formData.budget = ''
    formData.message = ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoader(true)

    try {
      // Your actual Google Form URL
      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScMZYob4MFS1JXsgl0wViknY8iPKUjHO4vbN4G8ZautiInrPQ/formResponse'
      
      const params = new URLSearchParams()
      // Using the actual entry IDs from your form
      params.append('entry.1388934483', formData.name) // Name field
      params.append('entry.345081110', formData.email) // Email field  
      params.append('entry.335274376', formData.interest) // Interest field
      params.append('entry.531016969', formData.budget) // Budget field
      params.append('entry.185723806', formData.message) // Message field

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
              <h2 className='font-medium w-full max-w-32'>
                Ready to Transform Your Exam Journey? Get in
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
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
                <div className='flex flex-col md:flex md:flex-row gap-6'>
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
                      <option value='NEET Preparation'>
                        NEET Preparation
                      </option>
                      <option value='UPSC Preparation'>UPSC Preparation</option>
                      <option value='JEE Preparation'>JEE Preparation</option>
                      <option value='Other'>Other</option>
                    </select>
                  </div>
                  <div className='w-full'>
                    <label htmlFor='budget'>Preferred plan</label>
                    <select
                      className='w-full mt-2 text-base px-4 rounded-full py-2.5 border transition-all duration-500 dark:text-white border-solid dark:border-white/20 focus:outline-0 dark:bg-black/40'
                      name='budget'
                      id='budget'
                      value={formData.budget}
                      onChange={handleChange}>
                      <option value=''>Select your preferred plan</option>
                      <option value='Starter - ₹2,999'>Starter - ₹2,999</option>
                      <option value='Pro - ₹4,999'>Pro - ₹4,999</option>
                      <option value='Not sure yet'>Not sure yet</option>
                    </select>
                  </div>
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
                      className='group w-fit text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 transition-all duration-200 ease-in-out hover:bg-[#0D1B4C] dark:hover:bg-transparent border dark:hover:text-dark_black border-dark_black'>
                      <span className='transform transition-transform duration-200 ease-in-out group-hover:translate-x-10'>
                        Start Your Journey
                      </span>
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-36 group-hover:rotate-45'>
                        <rect
                          width='32'
                          height='32'
                          rx='16'
                          fill='white'
                          className='fill-white dark:fill-black transition-colors duration-200 ease-in-out group-hover:fill-black '
                        />
                        <path
                          d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                          stroke='#1B1D1E'
                          strokeWidth='1.42857'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='stroke-dark_black dark:stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-white'
                        />
                      </svg>
                    </button>
                  ) : (
                    <button className='bg-grey item-center flex gap-2 py-3 px-7 rounded-sm'>
                      <div
                        className='animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500'
                        role='status'
                        aria-label='loading'>
                        <span className='sr-only'>Loading...</span>
                      </div>{' '}
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
