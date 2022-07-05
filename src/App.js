import Data from './Data/Data.json'
import './App.css';
import image from './Data/Image.jpg';
import author from './Data/author.jpg';
function App() {
  return (
    <div >
      <h1 className="display-4 fw-bold">{Data.title}</h1>
      <p className="fw-normal d-flex">{Data.type} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="align-self-center mx-1 bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
</svg></p>
      <div className='space'>
      </div>
      <div className='d-flex justify-content-between'>
        
          <div className="same">
            
              <p className="lh-base fs-4">{Data.description}</p>
              <p className="fs-3 my-3 title d-flex"><img className="align-self-center mx-2" src={author} />{Data.author}</p>
              <div>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="mx-2">{Data.rating} total reviews for this teacher</span>
              </div>
              <div>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="mx-2">{Data.reviews} reviews for this class</span>
              </div>
              <p className="fs-4 my-2">Completed by {Data.completed} learners</p>
              <div className="my-3 d-flex align-items-center">
              <button type="button" className="btn btn-primary active rounded-5 " data-bs-toggle="button" aria-pressed="true">See Class Schedule &gt;</button>
              <div className="mx-5 d-flex save "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-1 align-self-center bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg><p className='align-self-center title'>Save</p></div>
              
              <div className="mx-5 d-flex align-items-center save"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-1 bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg><p className='align-self-center title'>Share</p></div>
              </div>
          </div>
          <div className="same mx-3">
            <img src={image} />
          </div>
        
      </div>
    </div>
  );
}

export default App;
