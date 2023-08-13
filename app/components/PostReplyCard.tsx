import { PostReplyType } from "../types/postType";
import { Typography } from "@mui/material";

function PostReplyCard({ reply }: { reply: PostReplyType }) {
  return (
    <div className="reply-card">
      <Typography variant="body2" className="reply-text">
        {reply.description}
      </Typography>
      <Typography variant="subtitle2" className="reply-from">
        From: <span>{reply.name}</span>
      </Typography>
      <Typography variant="caption" className="reply-time">
        10 mins ago | July 14, 2023
      </Typography>
    </div>
  );
}

export default PostReplyCard;
