import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const id = useParams();

  useEffect(() => {
    dispatch(fetchStream(id.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id.id]);
  const streams = useSelector((state) => state.streams);
  console.log(streams);

  const actions = (
    <React.Fragment>
      <Link to="/" className="ui button">
        Cancel
      </Link>
      <button
        onClick={() => dispatch(deleteStream(id.id))}
        className="ui negative button"
      >
        Delete
      </button>
    </React.Fragment>
  );
  if (!stream) {
    return <div className="ui active loader"></div>;
  }
  return (
    <Modal
      title="Delete Stream"
      content={`Are you sure you want to delete stream named ${stream.title}?`}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

export default StreamDelete;
