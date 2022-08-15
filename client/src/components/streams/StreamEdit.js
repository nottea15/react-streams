import React from "react";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ fetchStream }) => {
  const id = useParams();
  // const { fetchStream } = props.fetchStream;

  useEffect(() => {
    fetchStream(id.id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const stream = useSelector((state) => state.streams[id.id]);
  console.log(stream);

  if (!stream) {
    return <div className="ui active loader"></div>;
  }
  return <div>{stream.title}</div>;
};

export default connect(null, { fetchStream })(StreamEdit);
