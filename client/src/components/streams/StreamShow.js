import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";
import flv from "flv.js";

const StreamShow = () => {
  const id = useParams();
  const videoRef = useRef();
  let player = null;

  const buidPlayer = () => {
    if (player || !stream) {
      return;
    }

    player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id.id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
  };

  useEffect(() => {
    dispatch(fetchStream(id.id));
    buidPlayer();

    return () => {
      console.log("unmount");
      player.destroy();
    };
  }, []);

  useEffect(() => {
    buidPlayer();
  });

  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id.id]);
  if (!stream) {
    return <div className="ui active loader"></div>;
  }
  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
