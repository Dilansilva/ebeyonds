import Modal from "./Modal";

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 

const NewsComponent = (props) => {

    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);
    return(
        <>
                        <a key={props.key} href="#" onClick={() => {setOpen(true)}}>
                              <div className="group relative mb-16">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src={props.imgSrc}
                                            alt={props.imgAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h1 className="text-4xl">{props.heading}</h1>
                                        <h3 className="text-4xl text-base font-semibold text-teal-500">{props.date}</h3>
                                            <p>
                                                {props.description}
                                            </p>
                                                <Button className="text-teal-500 border-teal-500" variant="outlined">Read More</Button>
                                </div>
                           
                        </a>
                        
                        <Dialog open={open} handler={handleOpen} className="overflow-auto">
                            <DialogHeader>{props.heading}</DialogHeader>
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src={props.imgSrc}
                                            alt={props.imgAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                </div>

                            <DialogBody divider>
                                <h3 className="text-4xl text-base font-semibold text-teal-500">{props.date+" "+props.time}</h3>
                                    {props.title}<br/>
                                        <a className="text-red-500" href={props.readMoreUrl}>see more..</a>
                            </DialogBody>

                            <DialogFooter>
                                <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-1"
                                >
                                    <span>Cancel</span>
                                </Button>
                            </DialogFooter>
                        </Dialog>
        </>
    )
}

export default NewsComponent;