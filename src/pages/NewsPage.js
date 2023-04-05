import { useEffect, useState } from "react";

import NewsComponent from "../components/NewsComponent"

import { Button } from "@material-tailwind/react";

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
         console.log(result)
         setLoading(false);
         setCallouts(result.data)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    },[type])
    //  const callouts = [
    //     {
    //         "author": "Ashley Paul",
    //         "content": "Telangana MP Bandi Sanjay Kumar, who is currently in police custody over his alleged involvement in the SSC paper leak case, has been named as the prime accused in the case. A question paper of Class 10 board exam had surfaced on social media for the second day on Tuesday. The leaked paper was also shared with Kumar, police said.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "e18ced70d0044edfb597248d952d206f",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680705411439_480.jpg?",
    //         "readMoreUrl": "https://www.siasat.com/bandi-sanjay-prime-accused-in-telangana-ssc-paper-leak-case-police-2562084/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:21 pm",
    //         "title": "T'gana MP Bandi prime accused in SSC paper leak case: Police",
    //         "url": "https://www.inshorts.com/en/news/tgana-mp-bandi-prime-accused-in-ssc-paper-leak-case-police-1680706272446"
    //     },
    //     {
    //         "author": "Daisy Mowke",
    //         "content": "Actor Nayanthara and her husband, filmmaker Vignesh Shivan visited the Kumbakonam temple on Wednesday. A video shows the couple getting surrounded by fans requesting selfies and the crowd can be seen trying to enter the inner sanctum of the temple with phones. Both Nayanthara and Vignesh can be heard asking the fans to let them pray in peace.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "a01104e8690f44d7827f61519e57d474",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680707773531_563.jpg?",
    //         "readMoreUrl": null,
    //         "time": "08:54 pm",
    //         "title": "Nayanthara and Vignesh Shivan request fans to let them pray after being mobbed in temple",
    //         "url": "https://www.inshorts.com/en/news/nayanthara-and-vignesh-shivan-request-fans-to-let-them-pray-after-being-mobbed-in-temple-1680708254069"
    //     },
    //     {
    //         "author": "Swati Dubey",
    //         "content": "Actress Raveena Tandon received the Padma Shri award from President Droupadi Murmu on Wednesday, a video of which was tweeted by ANI. The 50-year-old actress has been conferred with the award for her contribution to the field of arts. \"I'm so honoured...It's because of [people's] love that I have sustained...in the industry for so many years,\" Raveena had earlier said.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "f36e0354276f437d8969714e052525be",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680702041018_750.jpg?",
    //         "readMoreUrl": "https://twitter.com/ANI/status/1643603398921527297?s=20&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "07:54 pm",
    //         "title": "Raveena Tandon receives Padma Shri from President Murmu; video out",
    //         "url": "https://www.inshorts.com/en/news/raveena-tandon-receives-padma-shri-from-president-murmu-video-out-1680704665532"
    //     },
    //     {
    //         "author": "Anmol Sharma",
    //         "content": "Rajasthan Royals (RR) captain Sanju Samson won the toss and elected to bowl first against Punjab Kings (PBKS) at the Barsapara Cricket Stadium in Guwahati. It is the first time that Guwahati is hosting an IPL match. Both the teams are fielding the same playing XIs that featured in their previous respective matches.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "a3a0b36cd7374605be2b18733e57df1f",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680702023397_581.jpg?",
    //         "readMoreUrl": "https://www.crictracker.com/live-scores/rr-vs-pbks-match-8-t20-indian-premier-league-05-apr-2023/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "07:21 pm",
    //         "title": "RR, PBKS announce their playing XIs as Guwahati hosts its first-ever IPL match",
    //         "url": "https://www.inshorts.com/en/news/rr-pbks-announce-their-playing-xis-as-guwahati-hosts-its-firstever-ipl-match-1680702706649"
    //     },
    //     {
    //         "author": "Anmol Sharma",
    //         "content": "Cricketer Prithvi Shaw and his friend Ashish Surendra Yadav were booked after actress Sapna Gill filed a criminal complaint against them at Andheri magistrate court. She sought registration of an FIR under sections 354, 509, and 324 of IPC. She alleged that Shaw assaulted her with a bat in February. Earlier, Sapna was taken into custody for allegedly attacking Shaw.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "3276f54c5b934f4486d8bc7743e1265f",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680707553968_832.jpg?",
    //         "readMoreUrl": "https://www.timesnownews.com/sports/cricketer-prithvi-shaw-booked-after-influencer-sapna-gill-files-criminal-complaint-article-99270795/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:53 pm",
    //         "title": "Prithvi Shaw booked after actress Sapna Gill files criminal complaint",
    //         "url": "https://www.inshorts.com/en/news/prithvi-shaw-booked-after-actress-sapna-gill-files-criminal-complaint-1680708218963"
    //     },
    //     {
    //         "author": "Shreyasi Banerjee",
    //         "content": "Bihar Deputy CM Tejashwi Yadav on Wednesday said that the recent violent clashes in the state during Ram Navami celebrations are a \"planned conspiracy\" to fuel riots. \"The government will take strict action...We are seeing that Bihar is being targeted continuously,\" Tejashwi added. \"The CM has expressed his views that those who are involved won't be spared,\" he further said.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "9ef0362059f1451a814aa5c76334260f",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680704017324_860.jpg?",
    //         "readMoreUrl": "https://www.hindustantimes.com/india-news/totally-planned-conspiracy-tejashwi-yadav-on-violence-in-bihar-101680691324888-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:03 pm",
    //         "title": "Planned conspiracy: Tejashwi Yadav on Ram Navami violence in Bihar",
    //         "url": "https://www.inshorts.com/en/news/planned-conspiracy-tejashwi-yadav-on-ram-navami-violence-in-bihar-1680705194409"
    //     },
    //     {
    //         "author": "Nakul Ahuja",
    //         "content": "AIMIM chief Asaduddin Owaisi on Wednesday reacted to the removal of portions from NCERT textbooks talking about a ban on RSS. He said that Godse was a close \"friend\" of Savarkar. \"RSS was banned and Savarkar was implicated in Gandhi's murder. The day isn't far when books will justify Godse and say, 'We should hear both sides',\" he added. ",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "e6bf72d8725840aaaf930b266ce578dd",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680703621158_321.jpg?",
    //         "readMoreUrl": "https://www.hindustantimes.com/india-news/owaisi-on-deleted-godse-rss-portions-from-ncert-books-the-day-isn-t-far-when-101680688204265-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:14 pm",
    //         "title": "Day isn't far when books will justify Godse: Owaisi on NCERT row",
    //         "url": "https://www.inshorts.com/en/news/day-isnt-far-when-books-will-justify-godse-owaisi-on-ncert-row-1680705857972"
    //     },
    //     {
    //         "author": "Daisy Mowke",
    //         "content": "Union Minister and BJP leader Narayan Rane alleged on Wednesday that Shiv Sena (UBT) president Uddhav Thackeray had given a \"supari\" contract to kill him when the latter was the Maharashtra Chief Minister. \"I used to receive calls from unknown persons. They would threaten to kill me...They disclosed how Thackeray wanted to eliminate me,\" he said.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "d349137294f44d8481b2f5550ea96119",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680705400657_983.jpg?",
    //         "readMoreUrl": null,
    //         "time": "08:17 pm",
    //         "title": "Uddhav Thackeray hired 'supari' killers to murder me, alleges Union Minister Narayan Rane",
    //         "url": "https://www.inshorts.com/en/news/uddhav-thackeray-hired-supari-killers-to-murder-me-alleges-union-minister-narayan-rane-1680706035503"
    //     },
    //     {
    //         "author": "Aishwarya Awasthi",
    //         "content": "Forbes has said that Elon Musk lost his world's richest person title after his \"pricey purchase of Twitter\". \"Musk has mostly tweeted himself out of the top spot on the ranks, with Tesla stock down nearly 50% since he announced his $44 billion takeover of Twitter,\" Forbes said. Musk is worth $39 billion less than a year ago, it added.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "3067ccc02f92467eb3707a765c5a5023",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680700689225_523.jpg?",
    //         "readMoreUrl": "https://www.independent.co.uk/tech/elon-musk-worlds-richest-billionaire-forbes-list-b2314404.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:05 pm",
    //         "title": "Musk lost richest person title after pricey Twitter buy: Forbes",
    //         "url": "https://www.inshorts.com/en/news/musk-lost-richest-person-title-after-pricey-twitter-buy-forbes-1680705318149"
    //     },
    //     {
    //         "author": "Ashley Paul",
    //         "content": "A physically-challenged owner of a stationery shop in Rajasthan's Bhilwara said he's received a show-cause notice from Income Tax Department for a transaction of ₹12.23 crore. He said a chartered accountant told him that his PAN was misused to float two diamond shell companies. He claimed he has taken a loan for the shop and is unable to pay installments.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "a0f8995f49704b4bb02c2f2ba6a97930",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680706437402_170.jpg?",
    //         "readMoreUrl": "https://www.latestly.com/india/news/rajasthan-stationary-shop-owner-gets-income-tax-notice-for-rs-12-crore-transaction-in-bhilwara-says-his-financial-data-misused-5036445.html/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:45 pm",
    //         "title": "Rajasthan stationery shop owner gets ₹12-cr I-T notice; says 'data misused'",
    //         "url": "https://www.inshorts.com/en/news/rajasthan-stationery-shop-owner-gets-₹12cr-it-notice-says-data-misused-1680707734606"
    //     },
    //     {
    //         "author": "Shreyasi Banerjee",
    //         "content": "Two local militants affiliated with proscribed terror outfit Lashkar-e-Taiba (LeT) have escaped from a police station in Jammu and Kashmir's Baramulla district. \"Case registered under relevant sections and efforts are on to the catch the accused,\" police said in a statement. Police added that the duo escaped from custody in the wee hours.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "fb8858a618fa4bcc8a7b593eba9ac592",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680705479579_374.jpg?",
    //         "readMoreUrl": "https://www.timesnownews.com/india/jk-two-let-militants-escape-from-baramulla-police-station-alert-sounded-article-99269275/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:36 pm",
    //         "title": "2 LeT militants escape from police station in J&K, alert sounded",
    //         "url": "https://www.inshorts.com/en/news/2-let-militants-escape-from-police-station-in-jk-alert-sounded-1680707167005"
    //     },
    //     {
    //         "author": "Anmol Sharma",
    //         "content": "The International Committee of the Red Cross (ICRC) said it'd cut around 1,500 jobs and roll back operations in some locations amid expected decline in budgets for humanitarian aid. ICRC said its governing board last week approved $475.30 million in cost reductions over 2023 and early 2024. \"We'll also be scaling back and closing some of our programmes,\" ICRC said.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "59016096c3334254a4ae1c1b3ebaec81",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680704568851_758.jpg?",
    //         "readMoreUrl": "https://www.cnbctv18.com/business/companies/international-committee-of-red-cross-icrc-cut-jobs-over-humanitarian-budget-geneva-switzerland-16339631.htm/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:49 pm",
    //         "title": "International Red Cross to lay off 1,500 employees",
    //         "url": "https://www.inshorts.com/en/news/international-red-cross-to-lay-off-1500-employees-1680707961770"
    //     },
    //     {
    //         "author": "Anmol Sharma",
    //         "content": "The Maharashtra government is set to buy the iconic Air India building at Nariman Point for ₹1,600 crore, as per reports. The state government will turn the building into an extension of Mantralaya, reports added. The Reserve Bank of India (RBI) was also in the fray to buy the building, reports further stated.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "cf97577fce99432198ccdfcf82e01499",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680706207652_276.jpg?",
    //         "readMoreUrl": "https://www.timesnownews.com/business-economy/mumbai-iconic-air-india-building-on-sale-for-rs-1600-cr-know-who-is-the-buyer-article-99272175/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:53 pm",
    //         "title": "Iconic Air India building in Mumbai to be bought for ₹1,600 cr by Maha govt: Reports",
    //         "url": "https://www.inshorts.com/en/news/iconic-air-india-building-in-mumbai-to-be-bought-for-₹1600-cr-by-maha-govt-reports-1680708202695"
    //     },
    //     {
    //         "author": "Aishwarya Awasthi",
    //         "content": "Meta has released an AI model, Segment Anything Model (SAM), that can identify individual objects within images and videos. It has also released a dataset of image annotations that it said was the largest ever of its kind. The AI model is capable of identifying objects that it has not encountered in its training.\n",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "e7c1290d8b30465ab86a65080310eefe",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680704414878_869.jpg?",
    //         "readMoreUrl": "https://www.reuters.com/technology/meta-releases-ai-model-that-can-identify-items-within-images-2023-04-05/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:26 pm",
    //         "title": "Meta releases AI model that can identify objects in images, videos",
    //         "url": "https://www.inshorts.com/en/news/meta-releases-ai-model-that-can-identify-objects-in-images-videos-1680706563229"
    //     },
    //     {
    //         "author": "Srishty Choudhury",
    //         "content": "Apple on Wednesday said that more of its supply chain is committing to using renewable energy in producing the company's iPhones, Macs and other products. It added that 250 of its suppliers, representing about 85% of Apple's direct manufacturing spending, have pledged to use renewable energy for Apple production, an increase from 213 suppliers the year before. \n",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "2850933a6f884c559a4fc5a4e88f9e9f",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680703417172_946.jpg?",
    //         "readMoreUrl": "https://www.reuters.com/business/sustainable-business/apple-says-more-suppliers-committing-renewable-energy-2023-04-05/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:02 pm",
    //         "title": "More suppliers committing to renewable energy: Apple",
    //         "url": "https://www.inshorts.com/en/news/more-suppliers-committing-to-renewable-energy-apple-1680705171939"
    //     },
    //     {
    //         "author": "Apoorva Shankar",
    //         "content": "BJP leader Anurag Thakur criticised opposition parties after the Supreme Court refused to entertain a plea alleging \"arbitrary use\" of CBI and ED against Opposition leaders. \"Congress is leading the corrupts. Investigative agencies have rights to take action against [the] corrupt,\" Thakur said. \"Instead of cooperating...Congress makes excuses to try and keep cases pending in courts,\" he added.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "3d7bed0adc8d4c91ace607a38c35798c",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680703363243_76.jpg?",
    //         "readMoreUrl": "https://www.hindustantimes.com/india-news/cong-leads-the-corrupt-thakur-on-sc-rejecting-plea-against-cbi-ed-misuse-101680691684415-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "09:05 pm",
    //         "title": "Congress leads corrupt: BJP as SC rejects 'misuse' of CBI, ED plea",
    //         "url": "https://www.inshorts.com/en/news/congress-leads-corrupt-bjp-as-sc-rejects-misuse-of-cbi-ed-plea-1680708932497"
    //     },
    //     {
    //         "author": "Srishty Choudhury",
    //         "content": "Author and philanthropist Sudha Murty was awarded the third highest civilian award Padma Bhushan on Wednesday. Super 30 Founder Anand Kumar was also awarded the Padma Shri. Videos of them receiving the awards from President Droupadi Murmu were shared by ANI on Twitter. A total of 53 awardees were honoured—three Padma Vibhushan, five Padma Bhushan and 45 Padma Shri.\n",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "fb56231598c94f1089aea6d621fb9b32",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680704588547_72.jpg?",
    //         "readMoreUrl": "https://www.moneycontrol.com/news/india/padma-awards-conferred-to-mulayam-singh-yadav-mahalanabis-sudha-murty-keeravaani-10368481.html/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:25 pm",
    //         "title": "Sudha Murty, Super 30 Founder receive Padma awards, videos out",
    //         "url": "https://www.inshorts.com/en/news/sudha-murty-super-30-founder-receive-padma-awards-videos-out-1680706541803"
    //     },
    //     {
    //         "author": "Apoorva Shankar",
    //         "content": "A stray dog attack was reported from Punjab's Jalandhar, where at least five dogs jumped over two people on a two-wheeler late at night. The incident which was caught on CCTV, shows the dogs trying to attack the pillion rider. However, the dogs ran away after one of the rider picked up a stone to hit them.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "7a4d0f4140bb466fa97e6ac38b33d913",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680704805657_967.jpg?",
    //         "readMoreUrl": "https://www.latestly.com/socially/india/news/dog-attack-video-cctv-camera-captures-two-mens-narrow-escape-after-being-attacked-by-pack-of-aggressive-street-dogs-in-jalandhar-5036103.html/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "09:06 pm",
    //         "title": "2 men on bike attacked by stray dogs in Jalandhar, video out",
    //         "url": "https://www.inshorts.com/en/news/2-men-on-bike-attacked-by-stray-dogs-in-jalandhar-video-out-1680709010873"
    //     },
    //     {
    //         "author": "Nakul Ahuja",
    //         "content": "Maharashtra BJP chief Chandrashekhar Bawankule, while reacting to the NCERT syllabus row, said some people had deliberately written \"negative content\" in history textbooks and there was a need to drop it. NCERT, as part of \"syllabus rationalisation\" exercise last year, removed certain portions regarding 2002 Gujarat riots, Mughal courts, Emergency of 1970s and Cold War, among other topics. ",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "d8fafcdef7ce4e6cb90075a73fd44512",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680706958453_27.jpg?",
    //         "readMoreUrl": null,
    //         "time": "09:09 pm",
    //         "title": "Negative content needs to be removed: Maha BJP chief on NCERT row",
    //         "url": "https://www.inshorts.com/en/news/negative-content-needs-to-be-removed-maha-bjp-chief-on-ncert-row-1680709164298"
    //     },
    //     {
    //         "author": "Saurabh Sinha",
    //         "content": "The United Nations on Tuesday said that the Taliban have banned its female Afghan staff from working. Following this, the UN asked about 3,300 of its staff to not come to work for the next 48 hours. The ban on female staff at foreign and domestic NGOs was imposed months ago but it didn't apply to the UN earlier.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "282ef5db2bea42b0960525b5ade07122",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680699881645_843.jpg?",
    //         "readMoreUrl": "https://amp.dw.com/en/taliban-ban-uns-afghan-women-staff-from-working/a-65231332?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "07:19 pm",
    //         "title": "Afghan female staff of UN banned from working by Taliban",
    //         "url": "https://www.inshorts.com/en/news/afghan-female-staff-of-un-banned-from-working-by-taliban-1680702566435"
    //     },
    //     {
    //         "author": "Saurabh Sinha",
    //         "content": "Former US President Donald Trump was welcomed by his supporters as he reached Palm Beach in Florida after his court appearance in New York in the hush money payment case. A video showed a number of his supporters on a roadside cheering for him as his convoy passed by. Trump also addressed his supporters at his Mar-a-Lago estate.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "8f952b23191d48d39cef006b938c3c6a",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680704040204_131.jpg?",
    //         "readMoreUrl": "https://www.youtube.com/watch?utm_campaign=fullarticle&v=J6c0yXBl9eo&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:11 pm",
    //         "title": "Supporters welcome Trump in Florida after court hearing; video out",
    //         "url": "https://www.inshorts.com/en/news/supporters-welcome-trump-in-florida-after-court-hearing-video-out-1680705677817"
    //     },
    //     {
    //         "author": "Saurabh Sinha",
    //         "content": "Multiple people were killed and injured after a tornado struck Missouri in the United States on Wednesday. The exact number of casualties was not immediately known. \"The damage is pretty widespread. It's just heartbreaking to see it,\" Sergeant Clark Parrott of the Missouri State Highway Patrol said. A search and rescue operation involving multiple agencies is underway, he added.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "9711cae4211743598771aca69c54ad27",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680707585814_987.jpg?",
    //         "readMoreUrl": "https://apnews.com/article/midwest-south-storms-tornadoes-2783b74e077740b3c253ce30632ff04d?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "09:07 pm",
    //         "title": "Multiple people killed, injured as tornado strikes US",
    //         "url": "https://www.inshorts.com/en/news/multiple-people-killed-injured-as-tornado-strikes-us-1680709066002"
    //     },
    //     {
    //         "author": "Saurabh Sinha",
    //         "content": "Finland's outgoing Prime Minister Sanna Marin on Wednesday said she is stepping down as leader of the Social Democratic Party and will work as a regular parliamentarian. \"I will start my work as a member of Parliament next week and I hope I can also lead a calmer life,\" said Marin. She added she would not run for President.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "0b68f6825e3c4bf9a616c70ff0ca7cf1",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680706728185_753.jpg?",
    //         "readMoreUrl": "https://www.reuters.com/world/europe/finlands-marin-steps-down-party-leader-2023-04-05/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "08:53 pm",
    //         "title": "Finland's outgoing PM Marin steps down as leader of her party",
    //         "url": "https://www.inshorts.com/en/news/finlands-outgoing-pm-marin-steps-down-as-leader-of-her-party-1680708212224"
    //     },
    //     {
    //         "author": "Srishty Choudhury",
    //         "content": "FedEx on Wednesday said it will fold its businesses that move freight and divisions that offer other services into one organisation in an effort to cut costs and increase efficiency across operations. FedEx aims to cut $4 billion in permanent costs by fiscal 2025-end and was on track to hit $1 billion in permanent cost cuts this fiscal ending May.\n\n\n\n",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "01d3ab238a344d239006269e0e3e6880",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680701132053_650.jpg?",
    //         "readMoreUrl": "https://www.reuters.com/markets/us/fedex-outline-plans-fiscal-2024-2025-cost-reductions-2023-04-05/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts ",
    //         "time": "07:24 pm",
    //         "title": "FedEx to fold operating divisions into 1 organisation to cut costs",
    //         "url": "https://www.inshorts.com/en/news/fedex-to-fold-operating-divisions-into-1-organisation-to-cut-costs-1680702863687"
    //     },
    //     {
    //         "author": "Aishwarya Awasthi",
    //         "content": "The world's 25 richest people are worth a collective $2.1 trillion in 2023, down a combined $200 billion from $2.3 trillion in 2022, Forbes said. Two-thirds of the top 25 are poorer than they were last year. Amazon's Jeff Bezos lost the most as Amazon shares fell by 38%, pulling him out of the number two spot in the list.",
    //         "date": "05 Apr 2023,Wednesday",
    //         "id": "8610fe0478cf46ba9b0cc8db24122df9",
    //         "imageUrl": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/04_apr/5_wed/img_1680705406920_610.jpg?",
    //         "readMoreUrl": null,
    //         "time": "08:50 pm",
    //         "title": "25 richest people's collective worth falls $200 billion: Forbes",
    //         "url": "https://www.inshorts.com/en/news/25-richest-peoples-collective-worth-falls-$200-billion-forbes-1680708007148"
    //     }
    // ]

    return(
        <>
             <div className="bg-white-100">
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
                                        <NewsComponent
                                            key={data.id}
                                            imgSrc={data.imageUrl}
                                            imgAlt={data.imageAlt}
                                            heading={data.author}
                                            date={data.date}
                                            description={data.content}
                                            link={data.readMoreUrl}
                                        />
                                    ))}
                                </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default NewsPage;