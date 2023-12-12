import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import learnit1 from "../../assets/learnit1.png"
import learnit2 from "../../assets/learnit2.png"
import learnit3 from "../../assets/learnit3.png"
import learnit4 from "../../assets/learnit4.png"
import learnit5 from "../../assets/learnit5.png"
import { IoLink } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { IoServerSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const LearnIt = () => {
    return (
        <>
            <button className="btn bg-[#66B888] text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Details</button>
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-black text-white bg-opacity-60">
                    <div className=''>
                        <div className=''>
                            <Carousel>
                                <div>
                                    <img className='' src={learnit1} />
                                </div>
                                <div>
                                    <img className='' src={learnit2} />
                                </div>
                                <div>
                                    <img className='' src={learnit3} />
                                </div>
                                <div>
                                    <img className='' src={learnit4} />
                                </div>
                                <div>
                                    <img className='' src={learnit5} />
                                </div>
                            </Carousel>
                        </div>
                        <div>
                            <h2><span className='text-3xl font-semibold'>Learn It Writ It</span> <span className='text-lg'>- A Online platform to create and submitting website</span></h2>
                            <div>
                                <h2 className='text-xl mt-5 mb-2 font-medium'>Source Code :</h2>
                                <div className='flex items-center gap-4'>
                                    <button className='px-5 py-1 rounded-lg flex items-center gap-3 bg-[#66B888] text-white'><IoLink /><a href="https://glistening-nasturtium-e44e6f.netlify.app">Live</a></button>
                                    <button className='px-5 py-1 rounded-lg flex items-center gap-3 bg-[#66B888] text-white'><FiGithub /><a href="https://github.com/ashraful2430/assignment-website-client"> Client</a></button>
                                    <button className='px-5 py-1 rounded-lg flex items-center gap-3 bg-[#66B888] text-white'><IoServerSharp /><a href="https://github.com/ashraful2430/assignment-website-server">Server</a></button>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-xl font-medium mt-8 mb-3'>Features :</h3>
                                <div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-6xl md:text-3xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Users can create assignments, specifying details such as questions, difficulty level, etc.</p>
                                    </div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-6xl md:text-3xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Users can take assignments, submit answers, and receive marks upon completion.</p>
                                    </div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-5xl md:text-2xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Assignment creators can update or delete their own assignments.</p>
                                    </div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-7xl md:text-3xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Users can view the status of their taken assignments, including pending and completed.

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

export default LearnIt;