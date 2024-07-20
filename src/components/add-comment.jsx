import { BASE_USER_API_ADD } from "../constants/URI";
import { createSignal } from "solid-js";

const addComment = (props) => {
    const [comment,setComment] = createSignal("");

    return (
    <div className="w-full flex-row">
        <div className="bg-slate-200 rounded-lg p-3 m-3 mx-auto w-full text-black">
            <textarea 
            cols={4} 
            className="w-full p-3 rounded-xl" 
            value={comment()} 
            placeholder="Add a comment here ...."
            onChange={(e) => {
                setComment(e.target.value)
            }}
            /> 
        </div>
        <button 
        className=" bg-blue-400 hover:bg-blue-500 p-3 rounded-lg text-white "
        onClick={async () => {
            await fetch(BASE_USER_API_ADD +`${localStorage.getItem('username')}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ anime : props.anime, comment: comment() }),
            });

            setComment("");
        }}
        >Add</button>
    </div>
    )

}

export default addComment;