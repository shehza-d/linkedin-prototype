import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [toggleRefresh, setToggleRefresh] = useState(true);

  return (
    <>
      <p>helloo</p>
      {loading ? (
        <div className="loadingDiv">
          loading...
          {/* <img src={loadingGif} className="loadingGif" alt="Loading" /> */}
        </div>
      ) : null}
      {err ? <div className="errDiv">{err}</div> : null}
    </>
  );
}
