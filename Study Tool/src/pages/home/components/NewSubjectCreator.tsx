import { useState } from "react"

export default function NewSubjectCreator(){
  const [newSubject, setNewSubject] = useState<string>()

  return(
    <div className="flex w-full h-screen backdrop-blur-md justify-center items-center">
      <div className="w-fit h-fit border-2 rounded border-secondary">
        <div className="flex w-full h-full bg-background rounded">
          <div className="flex flex-col w-full h-full rounded m-6">
            <input className="bg-secondary/50 text-text-dark placeholder:text-text border-2 border-secondary outline-none mb-4 w-full h-10 px-4 rounded" type="" placeholder="Image Upload"/>
            <input className="bg-secondary/50 text-text-dark placeholder:text-text border-2 border-secondary outline-none w-full h-10 px-4 rounded" type="text" placeholder="Subject" onChange={(e) => setNewSubject(e.target.value)}/>

            <div>
              <div className="text-text font-semibold mb-4 mt-8">Preview:</div>
              <div className= {`relative h-[308px] w-[300px] mb-4`}>
                  <div className="flex relative h-2/5 w-full">
                      <div className="absolute z-10 w-full h-full bg-gradient-to-t from-black/90"/>
                      <img className="absolute h-full w-full object-cover rounded-t-3xl rounded-b-sm" src="https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg"/>
                      <div className=" z-20 relative flex w-full translate-y-6 justify-end items-end mr-6">
                        <div className="absolute z-30 outer-box p-4">
                          <div className="z-40 text-text text-box text-xl font-bold">{newSubject}</div>
                        </div>
                      </div>
                  </div>
                  <li className="bg-gradient-to-t from-secondary w-full pl-4 h-3/5 rounded-b-3xl rounded-t-sm text-text-light">
                    Unit X
                  </li>
              </div>
              <div className="flex justify-center">
                <button className="button-primary">CONFIRM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}