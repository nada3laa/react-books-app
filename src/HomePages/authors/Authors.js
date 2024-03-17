import {useState} from 'react'
import {authors} from '../../data/authors'

 function Authors() {
  const [search, setSearch] = useState("");
  return (
    <section className="authors ">
    <div className="authors-search-wrapper">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        type="search"
        placeholder="Search in authors"
      />
    </div>
    <div className="authors-wrapper ">
      {authors
        .filter(a => a.name.toLowerCase().includes(search))
        .map((author) => (
          <div key={author.id} className="author wow fadeInUp">
            <img
              src={author.image}
              alt={author.name}
              className="author-img "
            />
            <h2 className="author-name wow fadeInUp">{author.name}</h2>
          </div>
        ))}
    </div>
  </section>
  )
}
export default Authors;
