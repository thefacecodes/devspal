import React, { useEffect, useState } from "react";
import devpal from "../assets/images/logo3.png";
import Typewriter from "typewriter-effect";

function Reply({ replyMessage }) {
  return (
    <div className="reply">
      <img
        src={devpal}
        className="h-[30px] w-[72px] object-contain self-start"
        alt=""
      />
      <div className="whitespace-pre-wrap cursor-none">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("...")
              .deleteAll()
              .typeString(replyMessage.trim())
              .changeDelay(1)
              .start();
          }}
          options={{
            delay: 25,
          }}
        />
      </div>
    </div>
  );
}

export default Reply;
