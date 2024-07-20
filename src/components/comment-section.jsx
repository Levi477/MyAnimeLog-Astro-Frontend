import { createSignal, createEffect, For } from 'solid-js';
import { ALL_COMMENT_API_ADD } from "../constants/URI";

const CommentSection = (props) => {
  const [comments, setComments] = createSignal([]);

  createEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(ALL_COMMENT_API_ADD);
        const data = await response.json();
        if (data.success) {
            console.log(data.comment_data);
          const filteredComments = data.comment_data.flatMap(user => 
            user.comments
              .filter(comment => comment.anime === props.anime)
              .map(comment => ({
                username: user.username,
                ...comment
              }))
          );
          setComments(filteredComments);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  });

  return (
    <div class="bg-slate-200 rounded-lg p-5 m-4 w-full flex-row justify-center items-center">
      {comments().length > 0 ? (
        <ul>
          <For each={comments()}>
            {(comment, index) => (
              <li class="bg-white p-3 m-3 text-black text-left w-full rounded-xl mx-auto shadow-md shadow-slate-500">
                <div class="font-bold text-lg text-orange-500">{comment.username}</div>
                <div>{comment.data}</div>
              </li>
            )}
          </For>
        </ul>
      ) : (
        <p className='text-black font-bold text-xl'>No comments available for this anime.</p>
      )}
    </div>
  );
};

export default CommentSection;