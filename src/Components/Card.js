import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

function Card(probs) {
    let likedCourses=probs.likedCourses;
    let setLikedCourses=probs.setLikedCourses;
    let description=probs.value.description;

    function likeUnlink(value) {
        if(likedCourses.includes(value)){
            setLikedCourses(prev=>prev.filter((prevalue)=>{return prevalue!==value;}));
            toast.warning("Like Removed")
            
        }else{
            setLikedCourses(prev=>[...prev,value])
            toast.success("Liked")
        }
    }

    return (
    <div className='flex flex-col max-w-[250px] bg-slate-800  bg-transparent text-white text-left rounded-lg overflow-hidden'>
        <div className="relative">
            <img src={probs.value.image.url} alt={probs.value.image.alt}/>
            <button type="button" className=' rounded-full bg-white w-50 h-50 absolute right-1 -bottom-3 p-1' onClick={()=>{likeUnlink(probs.value.id)}}>

            {!likedCourses.includes(probs.value.id)?<FcLikePlaceholder size="30"/>:<FcLike size="30"/>}
        
            </button>
        </div>
        <h2 className='px-3 text-md font-semibold'>{probs.value.title}</h2>
        <p className='px-3 pt-1 pb-3 text-sm'>{description.length>100 ? description.substring(0,100)+"...":description}</p>
    </div>
 )
}

export default Card;