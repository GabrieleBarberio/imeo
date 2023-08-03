import logoimeo from "../../assets/logoimeo.png"

function Footer () {
    return (
        <>
        <div className="bg-[#F5ECFF33] px-[12vw]">
            <div className="flex justify-between">
                <div>
                    <img className="m-0 max-w-[16vw] h-auto" src={logoimeo} alt="Footer logo" />
                </div>
                <div className="py-16 px-24">
                    <ul>
                        <li><h2 className="text-3xl font-bold text-[#D9D9D9] mb-[1vw]">Imeo</h2></li>
                        <li className="mt-4"><a className="text-[#A3F4FFB2] text-3xl font-bold mb-[3vw]">Work with Us</a></li>
                        <li className="mt-4"><a className="text-[#A3F4FFB2] text-3xl font-bold mb-[3vw]">Strategy</a></li>
                        <li className="mt-4"><a className="text-[#A3F4FFB2] text-3xl font-bold">Releases</a></li>
                    </ul>
                </div>
                <div className="py-16 px-24">
                    <ul>
                        <li><h2 className="text-3xl font-bold text-[#D9D9D9] mb-[1vw]">Customer</h2></li>
                        <li className="mt-4"><a className="text-[#A3F4FFB2] text-3xl font-bold mb-[3vw]">Works</a></li>
                        <li className="mt-4"><a className="text-[#A3F4FFB2] text-3xl font-bold mb-[3vw]">Strategy</a></li>
                        <li className="mt-4"><a className="text-[#A3F4FFB2] text-3xl font-bold">Releases</a></li>
                    </ul>
                </div>
                <div className="mr-[3vw] py-16 px-24">
                    <ul>
                        <li><h2 className="text-3xl font-bold text-[#D9D9D9] mb-[1vw]">Customer</h2></li>
                        <li className="mt-4"><a className="text-[#A3F4FFB2] text-3xl font-bold mb-[3vw]">Contact us</a></li>
                        <li className="mt-4"><a className="text-[#A3F4FFB2] text-3xl font-bold mb-[3vw]">Promotion</a></li>
                        <li className="mt-4"><a className="text-[#A3F4FFB2] text-3xl font-bold">Planning Details</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex justify-center bg-[#2B2B2B9C]">
            <span className="mr-auto ml-[20vw] p-[3vw] text-[#FFFFFF] text-2xl">© 2023 IMEO, Inc. , Terms & Condition Here. P.iva 14323141341</span>
        </div>
        </>
    )
}

export default Footer;