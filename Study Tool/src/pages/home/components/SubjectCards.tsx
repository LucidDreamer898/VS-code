import { useState } from "react"
import { Calendar, Calendar2Fill, CalendarFill, PlusSquareFill } from "react-bootstrap-icons"
import NewSubjectCreator from "./NewSubjectCreator";

export default function SubjectCards() {

    const [createSubject, setCreateSubject] = useState(false);

    const subjectCards: subjectInfo[] = [
        {
            image: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg",
            subject: "Algebra 2",
            units: "Unit 1,2,3,4",
        },
        {
            image: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg",
            subject: "Biology",
            units: "unit 1",
        },
        {
            image: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg",
            subject: "History",
            units: "Unit 1,2,3,4",
        },
        {
            image: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg",
            subject: "Ochestra",
            units: "Unit 1,2,3,4",
        },
    ]

    return(
        <div className="flex h-screen justify-center w-full overflow-auto">
            <div className={`flex w-full h-full absolute z-40 ${createSubject == false ? "invisible" : "visible"}`}>
                <NewSubjectCreator/>
            </div>

            <div className="flex w-4/5 flex-wrap mt-32">
                {[...subjectCards, ...subjectCards].map((subject) => (
                    <div className="flex justify-center w-1/3 pb-16">
                    <div className="relative h-[308px] w-[300px]">
                        <div className="flex relative h-2/5 w-full">
                            <div className="absolute z-10 w-full h-full bg-gradient-to-t from-black/90"/>
                            <img className="absolute h-full w-full object-cover rounded-t-3xl rounded-b-sm" src={subject.image}/>
                            <div className=" z-20 relative flex w-full translate-y-6 justify-end items-end mr-6">
                                <div className="absolute z-30 outer-box p-4">
                                    <div className="z-40 text-text text-box text-xl font-bold">{subject.subject}</div>
                                </div>
                            </div>
                        </div>
                        <li className="bg-gradient-to-t from-secondary w-full pl-4 h-3/5 rounded-b-3xl rounded-t-sm text-text-light">
                            {subject.units}
                        </li>
                    </div>
                </div>
                ))}
            </div>

            <button className="absolute z-30 bottom-8 left-8 text-5xl text-primary/90"><CalendarFill/></button>
            <div className="absolute z-30 bottom-8 right-8 text-6xl text-primary/90"><PlusSquareFill/></div>
            <button className="absolute z-40 bottom-8 right-8 text-6xl text-primary/90 hover:glow" onClick={() => (setCreateSubject(true))}><PlusSquareFill/></button>
        </div>
    )
}