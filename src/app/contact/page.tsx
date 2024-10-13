import ContactForm from '@/components/ContactForm';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const ContactPage = () => {

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4 lg:px-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center mb-12 text-white">
          Contact Us
        </h1>
        <div className="bg-black shadow-lg rounded-lg p-6 lg:p-12">
          <p className=" text-lg lg:text-2xl text-white leading-relaxed mb-8 text-center">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
          </p>
          <ContactForm />
          <div className="text-center mt-12">
            <Link href="/" className="text-2xl font-semibold text-blue-600 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
        <div className='bg-black shadow-lg mt-3 rounded-lg p-4 lg:p-12'>
          <div>
            <h2 className="text-4xl font-bold text-white mb-4"> <span className=' text-red-500'>Note:</span> Visit My Another Web</h2>
            <p className="text-lg text-white">
              My another web name is ImageAlx. ImageAlx is Fully Free an AI-powered business image generator that helps you create stunning and realistic images for free. Ideal for creative professionals, marketers, and content creators in Bangladesh and beyond.
              Visit It <a target='_blank' href={'https://imagealx.vercel.app/'} className=' text-sky-600 font-semibold underline flex items-center gap-1'>ImageAlx <ExternalLinkIcon /> </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
