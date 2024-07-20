import { createEffect, createSignal } from "solid-js"
import { BASE_USER_API_ADD } from "../constants/URI"

const addRating = (props) => {

    const [hasUpdated,setHasUpdated] = createSignal(false);
    localStorage.setItem('hasUpdated',hasUpdated())

    createEffect(() => {
        setHasUpdated(localStorage.getItem('hasUpdated'))
    })
    return(
        <div className="bg-orange-400 p-4 m-3 rounded-2xl flex-row flex-wrap ">
        <button 
        className="bg-white p-2 mx-3 rounded-full text-black px-4 text-xl font-extrabold hover:bg-slate-100 transition-transform duration-300 hover:scale-150"
        onClick={async (e) => {

            if(hasUpdated()){
                await fetch(BASE_USER_API_ADD + `${localStorage.getItem('username')}/rating`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({anime: props.anime,rating: 1})
                })
                setHasUpdated(false)
            }
            else{
                await fetch(BASE_USER_API_ADD + `${localStorage.getItem('username')}/rating`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({anime: props.anime,rating: 1})
                })
                setHasUpdated(true)
            }
        }}
        >1</button>
        <button 
        className="bg-white p-2 mx-3 rounded-full text-black px-4 text-xl font-extrabold hover:bg-slate-100 transition-transform duration-300 hover:scale-150"
        onClick={async (e) => {
            await fetch(BASE_USER_API_ADD + `${localStorage.getItem('username')}/rating`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({anime: props.anime,rating: 2})
            })
            setHasUpdated(true)

        }}
        >2</button>
        <button 
        className="bg-white p-2 mx-3 rounded-full text-black px-4 text-xl font-extrabold hover:bg-slate-100 transition-transform duration-300 hover:scale-150"
        onClick={async (e) => {
            await fetch(BASE_USER_API_ADD + `${localStorage.getItem('username')}/rating`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({anime: props.anime,rating: 3})
            })
            setHasUpdated(true)

        }}
        >3</button>
        <button 
        className="bg-white p-2 mx-3 rounded-full text-black px-4 text-xl font-extrabold hover:bg-slate-100 transition-transform duration-300 hover:scale-150"
        onClick={async (e) => {
            await fetch(BASE_USER_API_ADD + `${localStorage.getItem('username')}/rating`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({anime: props.anime,rating: 4})
            })
            setHasUpdated(true)

        }}
        >4</button>
        <button 
        className="bg-white p-2 mx-3 rounded-full text-black px-4 text-xl font-extrabold hover:bg-slate-100 transition-transform duration-300 hover:scale-150"
        onClick={async (e) => {
            await fetch(BASE_USER_API_ADD + `${localStorage.getItem('username')}/rating`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({anime: props.anime,rating: 5})
            })
            setHasUpdated(true)

        }}
        >5</button>
        </div>
    )
}

export default addRating;