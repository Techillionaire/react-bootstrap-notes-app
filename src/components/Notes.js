

const Notes = () => {
  return (
    <div className="form">
      <div>
        <form className="row g-3">
          <div class="form-floating col-9">
            <textarea class="form-control" placeholder="Enter text" id="floatingTextarea2"  />
          </div>

          <div className="col-3 mr-2">
            <button type="submit" class="btn btn-primary">  SAVE <i class="bi bi-download btn-lg" /></button>
          </div>
        </form>
      </div>

      <div>
        <div class="card">
          <div class="card-header mb-3">
            Notes
          </div>

          <div class="card-body">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div>
              <div>
                <footer class="blockquote-footer">Jan/11/2022</footer>
              </div>
              
              <div className="icon">
                <i class="bi bi-pen text-primary" />
                <i class="bi bi-trash text-danger" />

              </div>

            </div>
            
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Notes
