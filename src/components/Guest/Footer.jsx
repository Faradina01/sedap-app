import React from "react";

export default function Footer() {
    return (
        <footer className="bg-green-900 text-white py-12 mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
                    <p>Jl. Makanan Sehat No. 123</p>
                    <p>Jakarta, Indonesia</p>
                    <p>Email: support@sedap.com</p>
                    <p>Telp: +62 21 1234 5678</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
                    <ul className="flex gap-6">
                        <li>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-green-300"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-green-300"
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-green-300"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Partner</h3>
                    <img
                        src="/img/partner-logo.png"
                        alt="Partner Logo"
                        className="h-12 object-contain"
                    />
                </div>
            </div>

            <div className="text-center mt-10 text-green-300 font-light text-sm">
                © 2025 Sedap Restaurant. All rights reserved.
            </div>
        </footer>
    );
}
