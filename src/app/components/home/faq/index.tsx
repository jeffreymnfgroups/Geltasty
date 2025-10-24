'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { usePageData } from '@/hooks/use-page-data'

function Faq() {
  const { data } = usePageData()
  const faqList = data?.faqList

  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='max-w-md text-center mx-auto'>
              <h2 className='brockmann-font'>
                Got questions? We've got{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  answers
                </span>
              </h2>
            </div>
            <div className='flex flex-col'>
              <Accordion
                type='single'
                collapsible
                className='flex flex-col gap-4'>
                {faqList?.map((item:any, index:any) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className='p-6 border border-dark_black/10 dark:border-white/50 group'>
                    <AccordionTrigger className='group-hover:cursor-pointer'>
                      <h4 className='text-dark_black dark:text-white/80'>
                        {item.faq_que}
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='text-base font-normal text-dark_black/60 dark:text-white/60'>
                        {item.faq_ans}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
