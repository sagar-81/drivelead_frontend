import { useState } from 'react';

const Faq = () => {
    // Data for FAQs
    const faqs = [
        {
            question: "Do you have a free trial ?",
            answer: "At the moment, we are in closed-beta and do not offer a free trial. This is intentional to ensure we can build & test with our early adopters and fine tune the product to our highest internal standards. As we scale the product to larger audiences, we plan to introduce a free trial.",
        },
        {
            question: "Do you offer refunds ?",
            answer: "Yes! We offer a full refund if you're not satisfied with the product and have not exceeded 7 days of use.",
        },
        {
            question: "What are lead credits per month ?",
            answer: "This is the maximum number of leads that lightscope will scan for on a monthly basis for your account. For example, if you're on the 'Basic' plan, lightscope will scan & upload up to 250 leads into your account. After which lightscope will stop scanning, and will resume only after the month ends.",
        },
        {
            question: "What happens if I max out my leads ?",
            answer: "If you are consistently maxing out leads per month, we invite you to upgrade to one of our higher tiers.",
        },
        {
            question: "When will I start seeing leads appear ?",
            answer: "As soon as you add your product/service details, lightscope will start scanning to get the most recent customers who have asked for your service. Typically you sill start seeing leads flow in within the first week after a 'calibration' period where you can provide feedback for the first set of leads gathered, so that lightscope can be fine-tuned for your project.",
        },
        {
            question: "What is the 30% discount ?",
            answer: "We're offering our first 50 customers a 30% lifetime discount off our launch price as a thank you for the early support! You will be grandfathered into these prices forever. ",
        },
    ];


    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className='min-h-screen'>
        <div className="max-w-2xl mx-auto p-10 bg-white dark:bg-black rounded-lg lg:mt-10 lg:mb-10 shadow-lg " id="faq">
            <h2 className="text-3xl  text-center mb-6">FAQ</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 focus:outline-none"
                        >
                            <span className="text-lg  text-black">{faq.question}</span>
                            <span>
                                {openIndex === index ? (
                                    <i className="fas fa-chevron-up"></i>
                                ) : (
                                    <i className="fas fa-chevron-down"></i>
                                )}
                            </span>
                        </button>
                        <div
                            className={`transition-all duration-300 ${openIndex === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                                }`}
                        >
                            <p className="p-4 text-gray-700 ">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Faq;
