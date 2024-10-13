import Link from 'next/link';

export default function AboutUs() {

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-8 flex flex-col items-center">
            <div className="max-w-7xl w-full">
                <h1 className="text-6xl font-extrabold text-center mb-12 text-gray-900">
                    About Us
                </h1>
                <div className="bg-white shadow-lg rounded-lg p-12">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                        Welcome to our premium Hotel Booking app! We are dedicated to helping you find
                        the perfect accommodations, whether you are traveling for business, leisure,
                        or just a quick getaway.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
                            <p className="text-lg text-gray-600">
                                We aim to simplify your hotel booking experience, offering a seamless and
                                secure platform that brings you the best accommodations from around the world.
                                Our commitment to user satisfaction and quality service ensures that you always
                                get the best deal and the most comfortable stay.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
                            <p className="text-lg text-gray-600">
                                Our platform provides access to a wide variety of hotels and resorts,
                                tailored to your personal preferences. Whether you&apos;re looking for luxury,
                                budget-friendly options, or something in between, we&apos;ve got you covered.
                                With advanced filters, reviews, and transparent pricing, booking your stay
                                has never been easier.
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



