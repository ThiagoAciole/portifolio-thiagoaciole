/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Heart } from "lucide-react";
import { useState } from "react";
import { useLike } from "../../../contexts/LikeContext";
import ImageSlider from "./imagemSlide";
export default function CardPost({ title, description, image }) {
  const [like, setLike] = useState(false);
  const [likeColor, setLikeColor] = useState("gray");
  const { likeCount, incrementLike, decrementLike } = useLike(); // Use o hook personalizado para acessar o contexto de likes
  const [readMore, setReadMore] = useState("line-clamp-4");

  const handleLike = () => {
    setLike(!like);
    if (like) {
      setLikeColor("gray");
      decrementLike(); // Decrementar o contador de likes
    } else {
      setLikeColor("red");
      incrementLike(); // Incrementar o contador de likes
    }
  };

  const handleReadMore = () => {
    setReadMore("");
    if (readMore === "") {
      setReadMore("line-clamp-4");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl border rounded-lg shadow overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="flex flex-row justify-between items-start space-x-2 mt-1 mb-4">
          <div>
            <p className=" text-2xl leading-tight font-bold text-black ">
              {title}
            </p>
            <p
              className={`mt-2 text-slate-500 leading-tight md:text-xs sm:text-xs`}
            >
              @thiagoaciole- 07/11/2023
            </p>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <p className="mt-2 text-slate-500 leading-tight md:text-xs sm:text-xs">
              {likeCount}
            </p>
            <button onClick={handleLike}>
              <Heart color={likeColor} />
            </button>
          </div>
        </div>
        <div className="flex flex-col ">
          <p
            className={`mt-2 text-slate-500 leading-tight md:text-base sm:text-base ${readMore} `}
          >
            {description}
          </p>

          <button
            onClick={handleReadMore}
            className={`text-blue-500 hover:text-blue-700 text-start`}
          >
            Leia mais
          </button>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:shrink-0 flex items-center ">
          <ImageSlider images={image} />
        </div>
      </div>
    </div>
  );
}
