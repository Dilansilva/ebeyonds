import { Typography } from "@material-tailwind/react";

import AvatarIcon from "./AvatarIcon";

const Footer = () => {
    return(
        <footer className="w-full bg-white p-8">
             <hr className="border-blue-gray-50" />
      <div className="flex lg:px-20 flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="https://cdn-icons-png.flaticon.com/512/121/121537.png" alt="logo-ct" className="w-20" />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-2">
                <AvatarIcon/>
                    <AvatarIcon/>
                        <AvatarIcon/>
                            <AvatarIcon/>
                        <AvatarIcon/>
                    <AvatarIcon/>
                <AvatarIcon/>
            </ul>

            <Typography color="blue-gray" className="font-normal lg:py-20">
                &copy; 2023 Sample by Company
            </Typography>
      </div>
    </footer>
    );
}

export default Footer