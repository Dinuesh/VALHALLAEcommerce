import React from 'react';
import Button from './Button';
import { Phone, FileText, CreditCard } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: 'url("https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-700/70 to-blue-500/60"></div>

            <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10 flex flex-col items-center justify-center text-white text-center pt-24 sm:pt-28 md:pt-32 lg:pt-36">
                <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        Your 1st Choice
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 font-semibold leading-snug">
                        For Pressure Washing Services
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
                        Trusted by thousands of clients in the Greater Lynchburg area. Ask About Our Monthly Specials
                    </p>

                    <div className="flex flex-col gap-4 items-center w-full max-w-md mx-auto px-4 sm:px-0">
                        <Button icon={<Phone className="w-5 h-5" />} onClick={() => window.location.href = 'tel:4344793021'}>
                            Call Now: (434) 479-3021
                        </Button>
                        <Button icon={<FileText className="w-5 h-5" />} variant="outline" onClick={() => { }}>
                            Request a Free Estimate
                        </Button>
                        <Button icon={<CreditCard className="w-5 h-5" />} variant="secondary" onClick={() => { }}>
                            Financing Through Wisetack!
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
