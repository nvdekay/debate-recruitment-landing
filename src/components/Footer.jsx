import React from "react";

const Footer = () => {

    return (
        <footer className="mt-12 text-white drop-shadow-[2px_2px_rgb(16,51,62)] md:text-base text-sm">
            <div className="w-[100%] md:p-6 py-5 montserrat-font bg-gray-900 bg-opacity-35">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center">
                    <a
                        href=""
                        target="_blank"
                        rel="noreferrer"
                        title="Fanpage"
                    >
                        <img src="logo_2.webp" alt="logo" className="w-48" />
                    </a>

                    <div className="flex flex-col gap-4">
                        <div className="flex lg:flex-row flex-col items-center gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-9"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <a
                                href="https://goo.gl/maps/AYC7XBBsCnfwXKQj9"
                                target="_blank"
                                rel="noreferrer"
                                className="text-nowrap lg:text-left text-center"
                            >
                                Đại học FPT, Khu Công nghệ cao Hòa Lạc, <br />
                                KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam
                            </a>
                        </div>
                        <div className="flex lg:flex-row flex-col items-center gap-3 lg:ms-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-8"
                            >
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>

                            <a href="mailto:jsclub.fpt@gmail.com">debate.fpt@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex lg:flex-row flex-col items-center gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <div className="lg:text-left text-center">
                                <p>Trưởng BTC:</p>
                                <strong>Nguyễn Văn Hiệp</strong>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col items-center gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-8"
                            >
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <a href="mailto:huynq@jsclub.dev">nguyenvanhiep17082004@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>  
        </footer>
    );
};

export default Footer;
