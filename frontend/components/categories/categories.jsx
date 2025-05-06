import "./categories.css";
export default function Categories() {
  return (
    <section className="featured-categories">
      <div className="section-header">
        <h2>Browse Categories</h2>
        <p>Find everything you need for campus life</p>
      </div>

      <div className="category-grid">
        {/* 4-6 category cards with icons/images */}
        <div className="category-card">
          <div className="category-icon">📚</div>
          <h3>Textbooks</h3>
          <p>New & used course materials</p>
        </div>
        {/* More category cards */}
        <div className="category-card">
          <div className="category-icon">📚</div>
          <h3>Textbooks</h3>
          <p>New & used course materials</p>
        </div>
        <div className="category-card">
          <div className="category-icon">📚</div>
          <h3>Textbooks</h3>
          <p>New & used course materials</p>
        </div>
        <div className="category-card">
          <div className="category-icon">📚</div>
          <h3>Textbooks</h3>
          <p>New & used course materials</p>
        </div>
      </div>
    </section>
  );
}
