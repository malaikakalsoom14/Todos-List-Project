import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {

  return (

<nav
 className="navbar navbar-expand-lg"
 style={{
    background: "linear-gradient(to right, lightpink, lightpurple)",
    padding: "15px 25px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
  }}
>

<div className="container-fluid">
<a
  className="navbar-brand"
  href="/"
  style={{
  color: "darkpink",
  fontWeight: "bold",
  fontSize: "28px"
 }}
 >
   {props.title}
  </a>

<button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
   data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>

<span className="navbar-toggler-icon"></span>
</button>

<div
  className="collapse navbar-collapse"
  id="navbarSupportedContent"
    >

<ul className="navbar-nav ms-auto mb-2 mb-lg-0">

  <li className="nav-item mx-2">

<a
  className="nav-link active"
  aria-current="page"
  href="/"
  style={{
  color: "darkpink",
   fontWeight: "600"
 }}
    >
      Home
</a>

   </li>

<li className="nav-item mx-2">

  <a
className="nav-link"
href="/"
 style={{
  color: "darkpink",
 fontWeight: "600"
 }}
     >
       About
      </a>

</li>

</ul>

  {
 props.searchBar ?

 <form className="d-flex ms-3">

  <input
  className="form-control me-2"
  type="search"
 placeholder="Search Tasks..."
    aria-label="Search"
   style={{
 borderRadius: "12px",
  border: "1px solid lightpink"
    }}
    />

   <button
      className="btn"
   type="submit"
   style={{
    backgroundColor: "#ff66a3",
   color: "white",
    border: "none",
   borderRadius: "12px",
  padding: "8px 16px"
     }}
    >
   Search
   </button>
 </form>
 : ""}

  

        </div>

      </div>

    </nav>
  )
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}