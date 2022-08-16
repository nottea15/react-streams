import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = () => {
  const id = useParams();

  const onSubmit = (formValues) => {
    dispatch(editStream(id.id, formValues));
  };

  useEffect(() => {
    dispatch(fetchStream(id.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id.id]);

  if (!stream) {
    return <div className="ui active loader"></div>;
  }
  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={{ title: stream.title, description: stream.description }}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default StreamEdit;
