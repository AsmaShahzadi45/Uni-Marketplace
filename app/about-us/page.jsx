'use client'
import { assets } from '@/assets/assets';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaUniversity } from 'react-icons/fa';

const AboutPage = () => {
    const teamMembers = [
        {
            name: 'Amsa Shahzadi',
            role: 'Backend Developer',
            university: 'Islamia University of Bahawalpur',
            image: 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww', // Replace with actual image path
            bio: 'Specialized in database design and server-side logic implementation.',
            links: {
                github: '#',
                linkedin: '#'
            }
        },
        {
            name: 'Kianaat',
            role: 'Frontend Developer',
            university: 'Islamia University of Bahawalpur',
            image: 'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHN8ZW58MHx8MHx8fDA%3D', // Replace with actual image path
            bio: 'Focuses on user experience and interface design using modern frameworks.',
            links: {
                github: '#',
                linkedin: '#'
            }
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-1">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Hero Section */}
                    <section className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            About <span className="text-orange-600">Uni Marketplace</span>
                        </h1>
                        <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Our final year project developed at Islamia University of Bahawalpur,
                            creating a campus marketplace solution for students and faculty.
                        </p>
                    </section>

                    {/* Project Overview */}
                    <section className="mb-20">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2">
                                <Image
                                    src="https://images.unsplash.com/photo-1615525137689-198778541af6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your project image
                                    alt="Uni Marketplace project showcase"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-md w-full h-auto"
                                    priority
                                />
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Project</h2>
                                <div className="space-y-4 text-gray-600">
                                    <p>
                                        Uni Marketplace is a dedicated platform for university students and staff
                                        to buy, sell, and trade items within their academic community.
                                    </p>
                                    <p>
                                        Developed as our final year project, this solution addresses the specific
                                        needs of campus commerce with features like verified user accounts,
                                        category-specific listings, and secure transactions.
                                    </p>
                                    <p>
                                        Our goal is to create a sustainable ecosystem that helps students save money
                                        and reduce waste by facilitating the reuse of textbooks, electronics,
                                        and other campus essentials.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Meet Our Team</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={member.image}
                                                alt={`${member.name} profile`}
                                                width={120}
                                                height={120}
                                                className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32 border-4 border-orange-100"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                            <p className="text-orange-600 mb-2">{member.role}</p>
                                            <div className="flex items-center text-gray-500 mb-3">
                                                <FaUniversity className="mr-2" />
                                                <span className="text-sm">{member.university}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                                            <div className="flex space-x-3">
                                                <a href={member.links.github} className="text-gray-500 hover:text-orange-600 transition">
                                                    <FaGithub size={20} />
                                                </a>
                                                <a href={member.links.linkedin} className="text-gray-500 hover:text-orange-600 transition">
                                                    <FaLinkedin size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* University Section */}
                    <section className="bg-orange-50 rounded-lg p-8 md:p-12 text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Developed At</h2>
                        <div className="flex flex-col items-center">
                            {/* <Image
                                src="/images/iub-logo.png" // Replace with IUB logo
                                alt="Islamia University of Bahawalpur"
                                width={150}
                                height={150}
                                className="mb-4"
                            /> */}
                            <h3 className="text-xl font-medium text-gray-800 mb-2">Islamia University of Bahawalpur</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                A prestigious institution in Punjab, Pakistan fostering innovation and academic excellence.
                            </p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;