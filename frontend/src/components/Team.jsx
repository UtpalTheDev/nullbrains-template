import {FaTwitter,FaGithub} from "react-icons/fa"

export function Team(){
    const bgColor=['bg-blue-50', 'bg-green-50', 'bg-red-50', 'bg-green-50', `bg-green-50`, `bg-red-50`, 'bg-indigo-50', 'bg-green-50']
    const team=[
        {
            name:"Freddy Smith",
            pos: "CEO and Founder",
            img:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name:"Carl Jones",
            pos: "CTO and Co-Founder",
            img:"https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name:"Susan Peterson",
            pos: "Marketing Directory",
            img:"https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name:"Tommy Barnes",
            pos: "Designer",
            img:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name:"Ron Jenson",
            pos: "Senior Developer",
            img:"https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxwZW9wbGV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name:"Pete Tompkins",
            pos: "Web Developer",
            img:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE1fHxwZW9wbGV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name:"Kelly Richards",
            pos: "Sales Manager",
            img:"https://images.unsplash.com/photo-1620075225255-8c2051b6c015?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzgxfHxwZW9wbGV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name:"Alexis Jordan",
            pos: "Affiliate Manager",
            img:"https://images.unsplash.com/photo-1583058905141-deef2de746bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA2fHxwZW9wbGV8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },

    ]
    return(
        <div className="min-h-100 sm:min-h-152 flex flex-col pl-2 py-4 sm:pt-6 sm:pb-20">
            <div className="sm:px-12 lg:pl-40 text-blue-500 text-sm">
                OUR TEAM
            </div>
            <div className="flex justify-between sm:pl-12 lg:pl-40 ">
                <div className="text-xl font-medium sm:text-3xl max-w-sm self-end pr-2">
                    An Incredible Team of amazing individuals
                </div>
                <div className="w-52 sm:w-80 h-16 sm:h-20 bg-blue-50 rounded-l-full"></div>
            </div>
            <div className="px-2 py-2 sm:py- sm:px-40 flex flex-wrap justify-center">
                {
                    team.map((person,index)=>{
                        return(
                            <div key={person.name}className=" w-44 h-64 sm:w-60 sm:h-80 m-2 text-center p-2 sm:my-3">
                                <div className={`p-5 ${bgColor[index]} rounded-l-full rounded-br-full`}>
                                    <div className=" rounded-full">
                                        <img src={person.img} className="rounded-full"/>
                                    </div>
                                </div>
                                <div className="pt-2">{person.name}</div>
                                <div className="text-blue-500">   {person.pos}
                                </div>
                                <div className="flex justify-center text-gray-300 text-2xl pt-1">
                                    <FaTwitter className="mx-1"/>
                                    <FaGithub className="mx-1"/>
                                    </div>
                            </div>
                        )
                    })
                }

            </div>
            
        </div>
    )
}