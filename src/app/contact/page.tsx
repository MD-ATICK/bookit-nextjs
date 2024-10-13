import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

const ContactPage = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 lg:px-8 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-center mb-12 text-gray-900">
          Contact Us
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-12">
          <p className=" text-lg lg:text-2xl text-gray-700 leading-relaxed mb-8 text-center">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
          </p>
          <ContactForm />
          <div className="text-center mt-12">
            <Link href="/" className="text-2xl font-semibold text-blue-600 hover:underline">
                Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
