import React, { useContext, useEffect } from "react";
import Form from "../components/Form";
import Loader from "../components/Loader";
import Notes from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Home = () => {
  const { notes, loading, fetchNotes, removeNote } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Form />
      <hr />
      {loading && <Loader />}
      {notes.length ? (
        <Notes notes={notes} onRemove={removeNote} />
      ) : loading ? null : (
        <p style={{ textAlign: "center" }}>No notes!!!</p>
      )}
    </>
  );
};

export default Home;
