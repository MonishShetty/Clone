import React from 'react'
import './home.css'
export default function home() {
  const viewornot=()=>{
    let ele=document.getElementsByClassName('card')[0].style.visibility
     console.log(ele)
        if(ele=='visible'){
        ele='hidden'

      }
      else {
        ele='visible'


        
      }
      document.getElementsByClassName('card')[0].style.visibility=ele
      console.log(document.getElementsByClassName('card')[0].style.visibility)
      
  }
  return (
    <div>
        <div className='parent'>
        <nav class="navbar navbar-light bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><div class="brandname">Brand Name</div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
<div  class="headingcontainer ">
    <div class=" heading mh-100">
    Enabling brands to flow with change in order to grow &#128640;
    </div>
  </div>
  </div>
  <div className='buttons'>
  <ul className='bul'>
    <li className='bli bli1'><button class="button"><span>Less Go </span></button> <button class="button"><span>Details </span></button> </li>
    <li className='bli  justtext'><pre> Web Design / Imaging / Marketing </pre></li>
  </ul>
  </div>
  <div className='lastcontainer'> 
  <div className='mainbox'>
    <div className='mainheading'>
      We propel results-driven growth
    </div>
    <div className='mainpara'>Making the transition to a results-driven culture can be what sets a business apart from its competitors. By sharing ideas and company goals, companies can create empowered employees who are focused on improving themselves and the business they work for. A results-driven culture doesn’t just breed hard workers; it creates impactful collaborators.</div>
    <button className='button viewbutton' onClick={()=>viewornot()}>View Details</button>
  </div>
  <div className='secondbox'>
  <div id='cardid' className='card'>
  <img className='profileimage' src='https://media.istockphoto.com/id/939009426/photo/hard-work-determination-persistence-creates-a-boss.jpg?s=612x612&w=0&k=20&c=UNQjlmuc1prPyfF1cLlJh6qCCpdDZ_uzfvhkOmoVgXk='></img>
  <h1 class="title">John Doe</h1>
  <p class="title">CEO & Founder</p>
  <p class="title">Brand Name</p>
  <img title='STEPS TOWARDS SUCCESS' className='secondimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNk8u6KxM-17ZdqeA5vKcH5mS26Bv4ROl6LGofWObogiAOnGjEMrNWOgx_tF-keTqjzs&usqp=CAU'></img>
</div>

  </div>
  </div>
    </div>
  )
}
