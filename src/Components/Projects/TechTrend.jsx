import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tech1 from "../../assets/tech1.png"
import tech2 from "../../assets/tech2.png"
import tech3 from "../../assets/tech3.png"
import tech4 from "../../assets/tech4.png"
import tech5 from "../../assets/tech5.png"
import { IoLink } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { IoServerSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const TechTrend = () => {
    return (
        <>
            <button className="btn bg-[#66B888] text-white" onClick={() => document.getElementById('my_modal_6').showModal()}>Details</button>
            <dialog id="my_modal_6" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-black text-white bg-opacity-60">
                    <div className=''>
                        <div className=''>
                            <Carousel>
                                <div>
                                    <img className='' src={tech1} />
                                </div>
                                <div>
                                    <img className='' src={tech2} />
                                </div>
                                <div>
                                    <img className='' src={tech3} />
                                </div>
                                <div>
                                    <img className='' src={tech4} />
                                </div>
                                <div>
                                    <img className='' src={tech5} />
                                </div>
                            </Carousel>
                        </div>
                        <div>
                            <h2><span className='text-3xl font-semibold'>Techno Trend Store</span> <span className='text-lg'>- A Online platform to Buy Computer and Mobiles</span></h2>
                            <div>
                                <h2 className='text-xl mt-5 mb-2 font-medium'>Source Code :</h2>
                                <div className='flex items-center gap-4'>
                                    <button className='px-5 py-1 rounded-lg flex items-center gap-3 bg-[#66B888] text-white'><IoLink /><a href="https://my-tenth-assignment-5a6bc.web.app">Live</a></button>
                                    <button className='px-5 py-1 rounded-lg flex items-center gap-3 bg-[#66B888] text-white'><FiGithub /><a href="https://github.com/ashraful2430/brand-shop-client"> Client</a></button>
                                    <button className='px-5 py-1 rounded-lg flex items-center gap-3 bg-[#66B888] text-white'><IoServerSharp /><a href="https://github.com/ashraful2430/brand-shop-server">Server</a></button>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-xl font-medium mt-8 mb-3'>Features :</h3>
                                <div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-5xl md:text-3xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Users can update and delete products from their cart.</p>
                                    </div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-5xl md:text-3xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Users can store products they like for future reference.</p>
                                    </div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-5xl md:text-3xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Product information is accessible only to logged-in users.</p>
                                    </div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-5xl md:text-3xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Users can add products to their cart for purchase.

                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-medium mt-8 mb-3'>Technology :</h3>
                                    <div>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">React</button>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">Tailwind</button>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">Daisy ui</button>

                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">Firebase</button>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">MongoDB</button>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">Express Js</button>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">Node Js</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-[#66B888] text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default TechTrend;