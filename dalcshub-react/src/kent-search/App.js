import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>CourseFinder</h1>
        <nav>
          <a href="/main">Main Feed</a>
          <a href="/subscriptions">Subscriptions</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>

      <h1>Main Feed</h1>

      <main>
        <div className="Filters">
          <label>Filter by:</label>
          <input type="text" placeholder="Enter specific course details... (case sensitive)" />
          <button
            // search functionality
            onClick={() => {
              let searchTerm = document.querySelector("input").value;
              let resultExists = false;

              document.querySelectorAll(".Course").forEach((element) => {
                if (element.innerHTML.includes(searchTerm)) {
                  element.style.display = "block";
                  resultExists = true;
                } else {
                  element.style.display = "none";
                }
              });

              if (resultExists) {
                document.querySelector(".NoSearch").style.display = "none";
              } else {
                document.querySelector(".NoSearch").style.display = "block";
              }
            }}
          >
            Search
          </button>
          <button
            onClick={() => {
              document.querySelectorAll(".Course").forEach((element) => {
                element.style.display = "block";

                document.querySelector("input").value = "";
                document.querySelector(".NoSearch").style.display = "none";
              });
            }}
          >
            Clear
          </button>
        </div>

        <div className="Course">
          <h2>CSCI 1105</h2>
          <h3>Introduction to Programming</h3>
          <p>Instructor: Dr. Savannah Williams</p>
          <p>Offerings: Fall/Winter/Summer</p>
          <p>Status: Ongoing for Summer 2023/2024</p>
          <button>Course Feed</button>
        </div>
        <div className="Course">
          <h2>CSCI 1110</h2>
          <h3>Introduction to Computer Science</h3>
          <p>Instructor: Dr. Jack Ma</p>
          <p>Offerings: Fall/Winter/Summer</p>
          <p>Status: Ongoing for Summer 2023/2024</p>
          <button>Course Feed</button>
        </div>
        <div className="Course">
          <h2>CSCI 1107</h2>
          <h3>Social Computing</h3>
          <p>Instructor: Dr. Sarah Moore</p>
          <p>Offerings: Fall/Winter</p>
          <p>Status: Begins in Fall 2023/2024</p>
          <button>Course Feed</button>
        </div>
        <div className="Course">
          <h2>CSCI 1108</h2>
          <h3>Experimental Robotics</h3>
          <p>Instructor: Dr. Josephine Richards</p>
          <p>Offerings: Fall/Winter</p>
          <p>Status: Begins in Fall 2023/2024</p>
          <button>Course Feed</button>
        </div>
        <div className="Course">
          <h2>CSCI 1120</h2>
          <h3>Introduction to Computer Systems</h3>
          <p>Instructor: Dr. Paul Fisher</p>
          <p>Offerings: Fall/Winter/Summer</p>
          <p>Status: Ongoing for Summer 2023/2024</p>
          <button>Course Feed</button>
        </div>
        <div className="Course">
          <h2>CSCI 1170</h2>
          <h3>Introduction to Web Development and Design</h3>
          <p>Instructor: Dr. Jason Marklee</p>
          <p>Offerings: Fall/Winter</p>
          <p>Status: Begins in Fall 2023/2024</p>
          <button>Course Feed</button>
        </div>

        <div className="NoSearch">
          <p>No results found, please try another search query.</p>
        </div>
      </main>

      <footer>
        <p>CourseFinder</p>
        <p>Copyright &copy; 2021 Kent Xern Chew.</p>
      </footer>
    </div>
  );
}

export default App;
