import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1>Welcome to My Website</h1>
          <p>This is my awesome website built with React!</p>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>We are a company dedicated to creating amazing web experiences.</p>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: example@email.com</p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; 