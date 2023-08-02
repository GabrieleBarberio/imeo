import GabrieleBarberio from "../assets/GabrieleBaberio.png"

export const ProfilePic = () => {
    return (
        <>
            {/* PROFILE PIC MED */}
                <img src={GabrieleBarberio} alt="picmed" className="w-[120px] rounded-xl" />

            {/* PROFILE PIC LARGE */}
                <img src={GabrieleBarberio} alt="piclarge" className="w-[150px] rounded-xl" />

            {/* PROFILE PIC SMALL */}
                <img src={GabrieleBarberio} alt="picsmall" className="w-[90px] rounded-xl" />
        </>
    )
}