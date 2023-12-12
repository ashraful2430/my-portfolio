import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import chatCanvas1 from "../../assets/chat-canvas1.png"
import chatCanvas2 from "../../assets/chat-canvas2.png"
import chatCanvas3 from "../../assets/chat-canvas3.png"
import chatCanvas4 from "../../assets/chat-canvas4.png"
import chatCanvas5 from "../../assets/chat-canvas5.png"
import { IoLink } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { IoServerSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";


const ChatCanvas = () => {
    return (
        <>
            <button className="btn bg-[#66B888] text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>Details</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-black text-white bg-opacity-60">
                    <div className=''>
                        <div className=''>
                            <Carousel>
                                <div>
                                    <img className='' src={chatCanvas1} />
                                </div>
                                <div>
                                    <img className='' src={chatCanvas2} />
                                </div>
                                <div>
                                    <img className='' src={chatCanvas3} />
                                </div>
                                <div>
                                    <img className='' src={chatCanvas4} />
                                </div>
                                <div>
                                    <img className='' src={chatCanvas5} />
                                </div>
                            </Carousel>
                        </div>
                        <div>
                            <h2><span className='text-3xl font-semibold'>Chat Canvas</span> <span className='text-lg'>- A Online platform to discuss on various topics</span></h2>
                            <div>
                                <h2 className='text-xl mt-5 mb-2 font-medium'>Source Code :</h2>
                                <div className='flex items-center gap-4'>
                                    <button className='px-5 py-1 rounded-lg flex items-center gap-3 bg-[#66B888] text-white'><IoLink /><a href="https://chat-canvas-725c3.web.app">Live</a></button>
                                    <button className='px-5 py-1 rounded-lg flex items-center gap-3 bg-[#66B888] text-white'><FiGithub /><a href="https://github.com/ashraful2430/chat-canvas"> Client</a></button>
                                    <button className='px-5 py-1 rounded-lg flex items-center gap-3 bg-[#66B888] text-white'><IoServerSharp /><a href="https://github.com/ashraful2430/chat-canvas-backend">Server</a></button>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-xl font-medium mt-8 mb-3'>Features :</h3>
                                <div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-6xl md:text-4xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Basic features like liking, disliking, commenting, and sharing require user authentication</p>
                                    </div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-6xl md:text-4xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>Users can make up to 5 posts without a membership. Membership allows unlimited posts.</p>
                                    </div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-3xl md:text-3xl lg:text-2xl text-[#66B888]' />
                                        <p className='text-lg'>The user can search a post based on the tag.</p>
                                    </div>
                                    <div className='flex items-center gap-5 my-4'>
                                        <MdVerified className='text-9xl md:text-6xl lg:text-4xl text-[#66B888]' />
                                        <p className='text-lg'>View a list of all users who have logged in, allowing for user management and analysis.
                                            Admins can see 10 users at a time and search for users by their username.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-medium mt-8 mb-3'>Technology :</h3>
                                    <div>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">React</button>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">Tailwind</button>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">Daisy ui</button>
                                        <button className="btn btn-outline mr-2 mt-3 border-[#66B888] text-white">Stripe</button>
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

export default ChatCanvas;