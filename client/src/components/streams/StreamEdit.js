import React from "react";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = ({ fetchStream, editStream }) => {
  const id = useParams();

  const onSubmit = (formValues) => {
    editStream(id.id, formValues);
  };

  useEffect(() => {
    fetchStream(id.id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

export default connect(null, { fetchStream, editStream })(StreamEdit);
