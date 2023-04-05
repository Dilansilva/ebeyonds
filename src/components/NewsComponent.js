import { Button } from "@material-tailwind/react";

const NewsComponent = (props) => {
    return(
        <>
                        <a key={props.key} href={props.link}>
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
        </>
    )
}

export default NewsComponent;