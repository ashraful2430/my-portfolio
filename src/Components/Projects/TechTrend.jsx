

const TechTrend = () => {
    return (
        <>
            <button className="btn bg-[#66B888] text-white" onClick={() => document.getElementById('my_modal_6').showModal()}>Details</button>
            <dialog id="my_modal_6" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">tech!</h3>
                    <p className="py-4">Click the button below to close</p>
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