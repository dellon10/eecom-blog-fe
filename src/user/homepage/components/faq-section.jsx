import FAQImage from '../assets/faq.png';
import { useState } from 'react';

export default function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="bg-white md:px-10 px-4 py-7 md:py-20 hidden">
      <h1 className="w-full text-center text-2xl md:text-4xl font-bold">
        FREQUENTLY ASKED QUESTION
      </h1>

      <div className="flex flex-row mt-10">
        
        <div className="w-1/2 flex justify-center items-center">
          <img src={FAQImage} alt="FAQ" className="w-96 h-auto" />
        </div>

        <div className="w-1/2">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            {/* Accordion Item 1 */}
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 1 ? 'true' : 'false'}
                onClick={() => toggleAccordion(1)}
              >
                <span>What is Flowbite?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${openAccordion === 1 ? '' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5L5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            {/* Konten Accordion 1 */}
            <div
              id="accordion-flush-body-1"
              className={`${openAccordion === 1 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{' '}
                  <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 2 ? 'true' : 'false'}
                onClick={() => toggleAccordion(2)}
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${openAccordion === 2 ? '' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5L5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            {/* Konten Accordion 2 */}
            <div
              id="accordion-flush-body-2"
              className={`${openAccordion === 2 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{' '}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{' '}
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </div>
            </div>
            
            {/* Accordion Item 3 */}
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 3 ? 'true' : 'false'}
                onClick={() => toggleAccordion(3)}
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${openAccordion === 3 ? '' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5L5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            {/* Konten Accordion 3 */}
            <div
              id="accordion-flush-body-2"
              className={`${openAccordion === 3 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{' '}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{' '}
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                aria-expanded={openAccordion === 3 ? 'true' : 'false'}
                onClick={() => toggleAccordion(3)}
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${openAccordion === 3 ? '' : 'rotate-180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5L5 1 1 5"
                  />
                </svg>
              </button>
            </h2>

            {/* Konten Accordion 3 */}
            <div
              id="accordion-flush-body-2"
              className={`${openAccordion === 3 ? '' : 'hidden'}`}
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{' '}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{' '}
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
