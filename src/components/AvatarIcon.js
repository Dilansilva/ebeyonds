import {Avatar } from "@material-tailwind/react";

const AvatarIcon = () => {
    return(
        <Avatar
                    variant="circular"
                    alt="user 1"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src="https://picsum.photos/200/300"
        />
    );
}

export default AvatarIcon;