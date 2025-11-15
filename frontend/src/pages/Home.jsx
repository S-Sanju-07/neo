import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Smart Study Planner</h1>
        <p>Plan your studies and stay on track effortlessly with our intelligent scheduling system.</p>
        
        <a href="/dashboard" className="cta-button">
          Get Started Now
        </a>
        
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📚</span>
            <h3>Smart Scheduling</h3>
            <p>AI-powered study plans tailored to your goals and availability.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Progress Tracking</h3>
            <p>Monitor your learning journey with detailed analytics and insights.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⏰</span>
            <h3>Time Management</h3>
            <p>Optimize your study sessions with intelligent time blocking.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;