import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function AboutUs() {

    return (
        <div className="min-h-screen bg-gray-950 py-16 px-8 flex flex-col items-center">
            <div className="max-w-7xl w-full">
                <h1 className="text-6xl font-extrabold text-center mb-12 text-white">
                    About Us
                </h1>
                <div className="bg-gray-900 shadow-lg rounded-lg p-12">
                    <p className="text-xl text-white leading-relaxed mb-8 text-center">
                        Welcome to our premium Hotel Booking app! We are dedicated to helping you find
                        the perfect accommodations, whether you are traveling for business, leisure,
                        or just a quick getaway.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-lg text-white">
                                We aim to simplify your hotel booking experience, offering a seamless and
                                secure platform that brings you the best accommodations from around the world.
                                Our commitment to user satisfaction and quality service ensures that you always
                                get the best deal and the most comfortable stay.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
                            <p className="text-lg text-white">
                                Our platform provides access to a wide variety of hotels and resorts,
                                tailored to your personal preferences. Whether you&apos;re looking for luxury,
                                budget-friendly options, or something in between, we&apos;ve got you covered.
                                With advanced filters, reviews, and transparent pricing, booking your stay
                                has never been easier.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-4">Visit My Another Web</h2>
                            <p className="text-lg text-white">
                                My another web name is ImageAlx. ImageAlx is Fully Free an AI-powered business image generator that helps you create stunning and realistic images for free. Ideal for creative professionals, marketers, and content creators in Bangladesh and beyond.
                                Visit It <a target='_blank' href={'https://imagealx.vercel.app/'} className=' text-sky-600 font-semibold underline flex items-center gap-1'>ImageAlx <ExternalLinkIcon /> </a>
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/" className="text-2xl font-semibold text-blue-600 hover:underline">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};



