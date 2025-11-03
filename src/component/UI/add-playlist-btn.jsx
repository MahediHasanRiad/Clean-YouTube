function AddPlayListBtn({ playlistLink, submitPlaylist, value }) {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-end">
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-outline-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          ADD Playlist
        </button>
      </div>
      
      {/* Modal */}
      <div 
        className="modal fade" 
        id="exampleModal" 
        tabIndex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Playlist
              </h1>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modal" 
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="playlist-link" className="col-form-label">
                    Playlist Link:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="playlist-link" 
                    onChange={playlistLink}
                    value={value}
                    placeholder="Enter YouTube playlist URL"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-dismiss="modal"
                onClick={submitPlaylist}
              >
                Add Playlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPlayListBtn;