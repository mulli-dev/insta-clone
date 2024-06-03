import { HiOutlineDotsVertical } from "react-icons/hi";
//import LikeSection from './LikeSection';
//import CommentSection from './CommentSection';

export default function Post({ post }) {
  return (
    <div className="bg-white border rounded-md my-7">
      <div className="flex items-center p-5 border-b border-gray-100">
        <img
          src={post.profileImg}
          alt={post.username}
          className="object-cover h-12 p-1 mr-3 border rounded-full"
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <HiOutlineDotsVertical className="h-5 cursor-pointer" />
      </div>
      <img
        src={post.image}
        alt={post.caption}
        className="object-cover w-full"
      />

      <p className="p-5 truncate">
        <span className="mr-2 font-bold">{post.username}</span>
        {post.caption}
      </p>
    </div>
  );
}
