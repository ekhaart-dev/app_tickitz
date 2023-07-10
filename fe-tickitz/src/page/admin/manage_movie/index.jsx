import React from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Cards from "../../component/cards";
import Cards2 from "../../component/cards2";
import { Link } from "react-router-dom";

function Manage_Movie() {
  return (
    <>
      <Header />
      <div className="section">
        <div className="banner-movie">
          <img src="/assets/img/banner-movie/banner-1.png" alt="" />
        </div>
        <div className="movie-detail">
          <div className="movie-title">
            <h2>Spider-Man: Homecoming</h2>
            <h5>Adventure, Action, Sci-Fi</h5>
          </div>
          <div className="movie-info">
            <div className="movie-sub-info">
              <div>
                <h6>Release date</h6>
                <h5>June 28, 2017</h5>
              </div>
              <div>
                <h6>Duration</h6>
                <h5>2 hours 13 minutes </h5>
              </div>
            </div>
            <div className="movie-sub-info">
              <div>
                <h6>Directed by</h6>
                <h5>Jon Watss</h5>
              </div>
              <div>
                <h6>Casts</h6>
                <h5>Tom Holland, Michael Keaton, Robert Downey Jr., ...</h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="movie-desc">
            <h5>Synopsis</h5>
            <p>
              Thrilled by his experience with the Avengers, Peter returns home,
              where he lives with his Aunt May, under the watchful eye of his
              new mentor Tony Stark, Peter tries to fall back into his normal
              daily routine - distracted by thoughts of proving himself to be
              more than just your friendly neighborhood Spider-Man - but when
              the Vulture emerges as a new villain, everything that Peter holds
              most important will be threatened.
            </p>
          </div>
        </div>
      </div>
      {/* Section 1 - Head End */}
      {/* Section 2 - Now Showing Movie Start */}
      <div className="section-movie">
        <div className="title">Showtimes and Tickets</div>
        <div className="date-place">
          <div className="date">
            <input type="date" name id />
          </div>
          <div className="place">
            <input type="text" placeholder="Purwokerto" />
          </div>
        </div>
        <div className="place-card">
          <div className="card">
            <div className="wrapper">
              <div className="brand">
                <img src="/assets/img/logo/ebv.id 2.png" alt="" />
              </div>
              <div className="name-brand">
                <h3>ebv.id</h3>
                <h6>Whatever street No.12, South Purwokerto</h6>
              </div>
            </div>
            <hr />
            <div className="time">
              <div>08:30am</div>
              <div>10:30pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div>$10.00/seat</div>
            </div>
            <a>
              <button>Book Now</button>
            </a>
          </div>
          <div className="card">
            <div className="wrapper">
              <div className="brand">
                <img src="/assets/img/logo/CineOne21 2.png" alt="" />
              </div>
              <div className="name-brand">
                <h3>CineOne21</h3>
                <h6>Downcare street No. 21, East Purwokerto</h6>
              </div>
            </div>
            <hr />
            <div className="time">
              <div>08:30am</div>
              <div>10:00pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:00pm</div>
              <div>06:00pm</div>
              <div>08:00pm</div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div>$10.00/seat</div>
            </div>
            <a>
              <button>Book Now</button>
            </a>
          </div>
          <div className="card">
            <div className="wrapper">
              <div className="brand">
                <img src="/assets/img/logo/hiflix 2.png" alt="" />
              </div>
              <div className="name-brand">
                <h3>hiflix Cinema</h3>
                <h6>Colonel street No. 2, East Purwokerto</h6>
              </div>
            </div>
            <hr />
            <div className="time">
              <div>08:30am</div>
              <div>10:00pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:00pm</div>
              <div>06:00pm</div>
              <div>08:00pm</div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div>$10.00/seat</div>
            </div>
            <a>
              <button>Book Now</button>
            </a>
          </div>
        </div>
        <div className="place-card">
          <div className="card">
            <div className="wrapper">
              <div className="brand">
                <img src="/assets/img/logo/ebv.id 2.png" alt="" />
              </div>
              <div className="name-brand">
                <h3>ebv.id</h3>
                <h6>Whatever street No.12, South Purwokerto</h6>
              </div>
            </div>
            <hr />
            <div className="time">
              <div>08:30am</div>
              <div>10:30pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div>$10.00/seat</div>
            </div>
            <a>
              <button>Book Now</button>
            </a>
          </div>
          <div className="card">
            <div className="wrapper">
              <div className="brand">
                <img src="/assets/img/logo/CineOne21 2.png" alt="" />
              </div>
              <div className="name-brand">
                <h3>CineOne21</h3>
                <h6>Downcare street No. 21, East Purwokerto</h6>
              </div>
            </div>
            <hr />
            <div className="time">
              <div>08:30am</div>
              <div>10:00pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:00pm</div>
              <div>06:00pm</div>
              <div>08:00pm</div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div>$10.00/seat</div>
            </div>
            <a>
              <button>Book Now</button>
            </a>
          </div>
          <div className="card">
            <div className="wrapper">
              <div className="brand">
                <img src="/assets/img/logo/hiflix 2.png" alt="" />
              </div>
              <div className="name-brand">
                <h3>hiflix Cinema</h3>
                <h6>Colonel street No. 2, East Purwokerto</h6>
              </div>
            </div>
            <hr />
            <div className="time">
              <div>08:30am</div>
              <div>10:00pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:00pm</div>
              <div>06:00pm</div>
              <div>08:00pm</div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div>$10.00/seat</div>
            </div>
            <a>
              <button>Book Now</button>
            </a>
          </div>
        </div>
        <div className="place-card">
          <div className="card">
            <div className="wrapper">
              <div className="brand">
                <img src="/assets/img/logo/ebv.id 2.png" alt="" />
              </div>
              <div className="name-brand">
                <h3>ebv.id</h3>
                <h6>Whatever street No.12, South Purwokerto</h6>
              </div>
            </div>
            <hr />
            <div className="time">
              <div>08:30am</div>
              <div>10:30pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div>$10.00/seat</div>
            </div>
            <a>
              <button>Book Now</button>
            </a>
          </div>
          <div className="card">
            <div className="wrapper">
              <div className="brand">
                <img src="/assets/img/logo/CineOne21 2.png" alt="" />
              </div>
              <div className="name-brand">
                <h3>CineOne21</h3>
                <h6>Downcare street No. 21, East Purwokerto</h6>
              </div>
            </div>
            <hr />
            <div className="time">
              <div>08:30am</div>
              <div>10:00pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:00pm</div>
              <div>06:00pm</div>
              <div>08:00pm</div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div>$10.00/seat</div>
            </div>
            <a>
              <button>Book Now</button>
            </a>
          </div>
          <div className="card">
            <div className="wrapper">
              <div className="brand">
                <img src="/assets/img/logo/hiflix 2.png" alt="" />
              </div>
              <div className="name-brand">
                <h3>hiflix Cinema</h3>
                <h6>Colonel street No. 2, East Purwokerto</h6>
              </div>
            </div>
            <hr />
            <div className="time">
              <div>08:30am</div>
              <div>10:00pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:00pm</div>
              <div>06:00pm</div>
              <div>08:00pm</div>
            </div>
            <div className="price">
              <h5>Price</h5>
              <div>$10.00/seat</div>
            </div>
            <a>
              <button>Book Now</button>
            </a>
          </div>
        </div>
        <div className="view-all">view more</div>
      </div>
      <Footer />
    </>
  );
}

export default Manage_Movie;
