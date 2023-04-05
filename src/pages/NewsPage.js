import { useEffect, useState } from "react";

import NewsComponent from "../components/NewsComponent"

import { Button } from "@material-tailwind/react";
import Footer from "../components/Footer";

const NewsPage = () => {
    const [type,setType] = useState('all');
    const [callouts,setCallouts] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch("https://inshorts.deta.dev/news?category="+type)
      .then(res => res.json())
      .then(
        (result) => {
         setLoading(false);
         setCallouts(result.data)
        },
        (error) => {
          setLoading(true);
        }
      )
    },[type])
    return(
        <>
             <div className="bg-white-100 flex-grow">
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-28">
                    <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:max-w-none lg:py-12">
                        <h1 className="text-4xl">Our News</h1>
                            <div className="flex w-max gap-4 mb-8 mt-4">
                                <Button onClick={() => {setType('all')}} variant="outlined" className="border-teal-500 text-teal-500 hover:bg-teal-500">All</Button>
                                    <Button onClick={() => {setType('science')}} variant="outlined" className="border-teal-500 text-teal-500 hover:bg-teal-500">Science</Button>
                                    <Button onClick={() => {setType('entertainment')}} variant="outlined" className="border-teal-500 text-teal-500 hover:bg-teal-500">Art</Button>
                                <Button onClick={() => {setType('world')}} variant="outlined" className="border-teal-500 text-teal-500 hover:bg-teal-500">General</Button>
                            </div>
                                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                    
                                    {loading ? <h1 className="text-4xl">Loading.....Please Wait</h1> : callouts?.map((data) => (
                                       <>
                                            <NewsComponent
                                                key={data.id}
                                                imgSrc={data.imageUrl}
                                                imgAlt={data.imageAlt}
                                                heading={data.author}
                                                date={data.date}
                                                description={data.content}
                                                link={data.readMoreUrl}
                                                time={data.time}
                                                readMoreUrl={data.readMoreUrl}
                                                title={data.title}
                                            />
                                       </>
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
                {
                    !loading ? <Footer/> : null
                }
        </>
    )
}

export default NewsPage;