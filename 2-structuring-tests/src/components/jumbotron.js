export default function Jumbotron() {
  return (
    <header
      style={{
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h3 style={{ fontSize: "1.5rem" }}>Logo</h3>

        <nav>
          <ul style={{ fontSize: "1.5rem" }}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <main
        style={{
          marginTop: "260px",
          backgroundColor: "rgba(248, 249, 250, .5)",
        }}
      >
        <h1>Welcome to our site!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          ducimus vitae maiores aperiam quos sequi rem nulla nobis distinctio
          accusamus, cumque, eius quasi doloribus delectus natus voluptates
          aspernatur non dolores.
        </p>
        <p>
          <button href="#">Get Started</button>
        </p>
      </main>
    </header>
  );
}
