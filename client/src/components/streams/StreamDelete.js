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
    console.log(stream);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const stream = useSelector((state) => state.streams[id.id]);
  const dispatch = useDispatch();

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
