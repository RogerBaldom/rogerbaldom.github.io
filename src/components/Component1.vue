<template>
  <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
    <link rel="stylesheet" href="../css/style.css" />
    <div class="site-wrap" id="home-section">
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <div class="site-navbar site-navbar-target" role="banner">
        <div class="container">
          <div class="row align-items-center position-relative">
            <div class="col-3">
              <div class="site-logo">
                <a href="index.html" class="font-weight-bold">{ R B G }</a>
              </div>
            </div>

            <div class="col-9 text-right">
              <span class="d-inline-block d-lg-block">
                <a href="#" class="text-white site-menu-toggle js-menu-toggle py-5 text-white">
                  <span class="icon-menu h3 text-white"></span>
                </a>
              </span>

              <nav class="site-navigation text-right ml-auto d-none d-lg-none" role="navigation">
                <ul class="site-menu main-menu js-clone-nav ml-auto">
                  <li class="active">
                    <a href="index.html" class="nav-link">Home</a>
                  </li>
                  <li>
                    <a href="about.html" class="nav-link">About me</a>
                  </li>
                  <li>
                    <a href="work.html" class="nav-link">Portfolio</a>
                  </li>
                  <li>
                    <a href="contact.html" class="nav-link">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div class="ftco-blocks-cover-1">
        <div
          class="site-section-cover overlay"
          style="background-image: url('../assets/images/developer.jpg')"
        >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-7 text-center">
                <h1 class="mb-4" id="nom21">Roger Baldomà Gómez</h1>
                <p class="mb-4">Full stack developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal hide"
      data-backdrop="static"
      data-keyboard="false"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">Elevator pitch</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              id="tancarModal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="row modal-body">
            <video id="myVideo" width="640" height="400" controls>
              <source
                src="../assets/videos/Elevator-pitch.mp4"
                width="630"
                height="263"
                frameborder="0"
                type="video/mp4"
              />
            </video>
            <div class="time-stamps">
              <div class="row">
                <a class="segonsT" id="primera">0:00</a>
                <p>- Presentation</p>
              </div>
              <div class="row">
                <a class="segonsT" id="segona">0:23</a>
                <p>- Soft skills</p>
              </div>
              <div class="row">
                <a class="segonsT" id="tercera">0:45</a>
                <p>- Hobbies</p>
              </div>
              <div class="row">
                <a class="segonsT" id="quarta">0:55</a>
                <p>- Future plans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-wrap" id="home-section">
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <div class="site-navbar site-navbar-target" role="banner">
        <div class="container">
          <div class="row align-items-center position-relative">
            <div class="col-3">
              <div class="site-logo">
                <a href="index.html" class="font-weight-bold"></a>
              </div>
            </div>

            <div class="col-9 text-right">
              <span class="d-inline-block d-lg-block">
                <a href="#" class="text-white site-menu-toggle js-menu-toggle py-5 text-white">
                  <span class="icon-menu h3 text-white"></span>
                </a>
              </span>

              <nav class="site-navigation text-right ml-auto d-none d-lg-none" role="navigation">
                <ul class="site-menu main-menu js-clone-nav ml-auto">
                  <li class="active">
                    <a href="index.html" class="nav-link">Home</a>
                  </li>
                  <li>
                    <a href="about.html" class="nav-link">About me</a>
                  </li>
                  <li>
                    <a href="work.html" class="nav-link">Portfolio</a>
                  </li>
                  <li>
                    <a href="contact.html" class="nav-link">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section" id="abtme">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-7 mx-auto text-center">
            <h2 class="heading-29190">About me</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6" id="capcalera">
            <img
              alt="Vue logo"
              class="rounded-circle"
              id="rounded-circle"
              src="../assets/images/foto-perfil.png"
            />
            <h3>Student</h3>
            <div>
              <p>
                Hello, my name is Roger Baldomà, I am a Web Applications Developing student.
                This is my portfolio, I hope you like it. I will be updating it, hopefully adding more skills, projects and cool animations!
              </p>

              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >Video</button>
            </div>
          </div>
          <div class="col-md-6">
            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      id="collapsOne"
                    >Hobbies and interests</button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <ul>
                      <li>Technology</li>
                      <li>Videogames</li>
                      <li>Traveling</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >Education</button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <ul>
                      <li>2008-2010: Scientific baccalaureate at IES Montserrat, Barcelona.</li>
                      <li>2017-Present Higher Level Education Cycle of web application development at Centre d’Estudis Politècnics, Barcelona.</li>
                      <li>2019-Present Higher Level Education Cycle of cross-platform application development at Centre d’Estudis Politècnics, Barcelona.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >Experience</button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    I don't have experience in the IT sector yet. But I worked as a waiter in a restaurant for three years and giving private
                    lessons abouts maths, physics and English to ESO and High School students.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFour">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >Languages</button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <ul>
                      <li>Catalan: native</li>
                      <li>Spanish: native</li>
                      <li>English: C1</li>
                      <li>French: basic</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-7 mx-auto text-center">
            <h2 class="heading-29190">Skills</h2>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-6" data-aos="fade-up-right">
            <div id="myModal2" class="modal">
              <span class="close">&times;</span>
              <img class="modal-content" id="img01" />
              <div id="caption"></div>
            </div>

            <h2 class="h4 mb-6">Programming languages</h2>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>JavaScript</span>
                <span class="ml-auto">6,5</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 65%;"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>HTML</span>
                <span class="ml-auto">7</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 70%;"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>CSS</span>
                <span class="ml-auto">6</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 60%;"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>C++</span>
                <span class="ml-auto">5.5</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 55%;"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>C#</span>
                <span class="ml-auto">6</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 60%;"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>Java</span>
                <span class="ml-auto">7</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 70%;"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-md-6" data-aos="fade-up-left">
            <h2 class="h4 mb-6">Frameworks</h2>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>VueJS</span>
                <span class="ml-auto">8</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 80%;"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>Laravel</span>
                <span class="ml-auto">7</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 70%;"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>Angular</span>
                <span class="ml-auto">5</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 50%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>Ionic</span>
                <span class="ml-auto">4</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 40%;"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>.NET</span>
                <span class="ml-auto">6</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 60%;"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-wrap mb-6">
              <div class="d-flex">
                <span>React</span>
                <span class="ml-auto">4</span>
              </div>
              <div class="progress rounded-0" style="height: 7px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 40%;"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div class="card" id="cardSWOT">
            <div class="card-header" id="headingSwot">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseSwot"
                  aria-expanded="false"
                  aria-controls="collapseSwot"
                  id="collapsOne"
                >SWOT analysis</button>
              </h5>
            </div>

            <div
              id="collapseSwot"
              class="collapse"
              aria-labelledby="headingSwot"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div class="col-md-12 text-center" id="swot-container">
                  <div class="col-md-8">
                    <h3>SWOT</h3>
                    <img
                      src="../assets/images/swot_analysis.png"
                      alt="SWOT"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-7 mx-auto text-center">
            <h2 class="heading-29190">Portfolio</h2>
          </div>
        </div>
        <div class="row" id="container-projectes">
          <!--<div class="col-md-6 col-lg-4">
            <a href class="custom-card">
              <div class="card" style="width: 15rem; display: inline-block">
                <img
                  class="card-img-top"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Wrapped with a tag</h5>
                  <p
                    class="card-text"
                  >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </a>
          </div>-->
          <div class="col-md-6 col-lg-4">
            <div
              class="service-29128 text-center"
              href="https://www.google.com/"
              data-aos="fade-right"
            >
              <a
                class="link-projectes"
                href="https://github.com/RogerBaldom/Projecte-OMET-Sant-Cugat-Android"
              >
                <span class="d-block wrap-icon">
                  <span class="icon-desktop_mac"></span>
                </span>
                <h3>OMET Sant Cugat</h3>
                <img src="../assets/images/Projecte-Sant-Cugat.png" class="img-fluid" alt />
                <div style="display: inline-block; text-align: left;">
                  <p>A mobile App developed for the Sant Cugat's town hall that allows people to make public facilities reservations.</p>
                  <br />
                  <p>Developed with:</p>
                  <ul>
                    <li>Java & XML (Android Studio)</li>
                    <li>Retrofit (API calls)</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div
              class="service-29128 text-center"
              href="https://www.google.com/"
              data-aos="fade-up"
            >
              <a
                class="link-projectes"
                href="https://github.com/RogerBaldom/Projecte-OMET-Sant-Cugat-Android"
              >
                <span class="d-block wrap-icon">
                  <span class="icon-desktop_mac"></span>
                </span>
                <h3>OMET Sant Cugat</h3>
                <img src="../assets/images/App-Sant-Cugat-Desktop.jpg" class="img-fluid" alt />
                <div style="display: inline-block; text-align: left;">
                  <p>A desktop App to manage public facilities</p>
                  <br />
                  <p>Developed with:</p>
                  <ul>
                    <li>C#</li>
                    <li>.NET</li>
                    <li>Entity Framework</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="service-29128 text-center" data-aos="fade-left">
              <a
                class="link-projectes"
                href="https://github.com/RogerBaldom/Projecte-Radio-mNACTEC"
              >
                <span class="d-block wrap-icon">
                  <span class="icon-desktop_mac"></span>
                </span>
                <h3>MNACTEC: La Ràdio</h3>
                <img src="../assets/images/mnactec.png" class="img-fluid" alt />
                <div style="display: inline-block; text-align: left;">
                  <p>Web App developed for an exposition at mNACTEC museum in Terrassa. The App includes four minigames, an interactive map (which is currently exposed at the museum) and an interactive presentation about the history of the radio.</p>
                  <br />
                  <p>Developed with:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript & jQuery</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section bg-light" data-aos="fade-up-left">
      <div class="container">
        <div class="col-md-7 mx-auto text-center">
          <h2 class="heading-29190">Contact me</h2>
        </div>
        <h2>Leave a message</h2>
        <div class="row">
          <div class="col-lg-8 mb-5">
            <form action="#" method="post">
              <div class="form-group row">
                <div class="col-md-6 mb-4 mb-lg-0">
                  <label for="firstName">First name</label>
                  <input
                    name="firstName"
                    id="firstName"
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    v-model="contacte.firstName"
                  />
                </div>
                <div class="col-md-6">
                  <label for="secondName">Second name</label>
                  <input
                    name="secondName"
                    id="secondName"
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    v-model="contacte.secondName"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <label for="cemail">E-mail</label>
                  <input
                    name="email"
                    id="cemail"
                    type="email"
                    class="form-control"
                    placeholder="Contact (phone number, email or whatever)"
                    v-model="contacte.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <label for="cmessage">Message</label>
                  <textarea
                    name="message"
                    id="cmessage"
                    class="form-control"
                    placeholder="Write your message."
                    cols="30"
                    rows="10"
                    v-model="contacte.message"
                  ></textarea>
                </div>
              </div>
            </form>
            <section
              v-if="contacte.email != '' && contacte.firstName != '' && contacte.secondName != '' && contacte.message != ''"
            >
              <div>
                <div class="col-md-6 mr-auto">
                  <button
                    class="btn btn-block btn-primary text-white py-3 px-5"
                    @click="enviarMissatge()"
                  >Enviar</button>
                </div>
              </div>
            </section>
          </div>
          <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5">
              <h3 class="text-black mb-4">Contact Info</h3>
              <ul class="list-unstyled footer-link">
                <li class="d-block mb-3">
                  <span class="d-block text-black">Phone:</span>
                  <span>+34 625 41 69 20</span>
                </li>
                <li class="d-block mb-3">
                  <span class="d-block text-black">Email:</span>
                  <span>rogbal212@gmail.com</span>
                </li>
                <li>
                  <span class="d-block text-black">Social media:</span>
                  <div class="row">
                    <a href="https://twitter.com/BaldomaRoger">
                      <img id="tw" src="../assets/images/twitter.png" alt="twitter"/>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
/*var vid = document.getElementById('myVideo');
if(vid){
  var prova = document.getElementById('primera');
  prova.addEventListener('click', function(ev) {
      vid.currentTime = 22;
  });
}
/*var vid = document.getElementById("myVideo");*/

/*document.querySelector('#myVideo').addEventListener('click', function(ev){
  this.currentTime = 22;
});*/

/*function funcioProva() { 
  vid.currentTime = 22;
} */

/*document.querySelector('#myVideo').addEventListener('click', function(ev){
  this.currentTime = 22;
});*/

function setCurTime() {
  vid.currentTime = 22;
}

export default {
  data: function() {
    return {
      contacte: {
        firstName: "",
        secondName: "",
        email: "",
        message: ""
      }
    };
  },

  methods: {
    enviarMissatge() {
      axios
        .post("https://test-fee70.firebaseio.com/missatges.json", this.contacte)
        .then(response => console.log(response))
        .then((this.contacte = {}))
        .catch(error => console.log(error));
    }
  },

  created() {
    let ckeditor = document.createElement("script");
    ckeditor.setAttribute("src", "../js/prova.js");
    document.head.appendChild(ckeditor);
  }
};
</script>

<style>

@import '../css/style.css';
.heading-29190 {
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 30px;
}
.heading-29190:before,
.heading-29190:after {
  position: absolute;
  content: "";
  width: 50px;
  height: 2px;
  background: #000;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 0;
}
.heading-29190:before {
  bottom: -6px;
  width: 80px;
}

.site-navbar {
  margin-bottom: 0px;
  z-index: 1999;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem;
}
@media (max-width: 991.98px) {
  .site-navbar {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
.site-navbar .toggle-button {
  position: absolute;
  right: 0px;
}
.site-navbar .site-logo {
  margin: 0;
  padding: 0;
  font-size: 1.7rem;
}
.site-navbar .site-logo a {
  color: #fff;
}
@media (max-width: 991.98px) {
  .site-navbar .site-logo {
    float: left;
    position: relative;
  }
}
.site-navbar .site-navigation.border-bottom {
  border-bottom: 1px solid white !important;
}
.site-navbar .site-navigation .site-menu {
  margin: 0;
  padding: 0;
  margin-bottom: 0;
}
.site-navbar .site-navigation .site-menu .active {
  color: #01d28e !important;
}
.site-navbar .site-navigation .site-menu a {
  text-decoration: none !important;
  display: inline-block;
}
.site-navbar .site-navigation .site-menu > li {
  display: inline-block;
}
.site-navbar .site-navigation .site-menu > li > a {
  margin-left: 15px;
  margin-right: 15px;
  padding: 20px 0px;
  color: #fff !important;
  display: inline-block;
  text-decoration: none !important;
}
.site-navbar .site-navigation .site-menu > li > a:hover {
  color: #01d28e;
}
.site-navbar .site-navigation .site-menu > li.active > a {
  color: #01d28e !important;
}
.site-navbar .site-navigation .site-menu .has-children {
  position: relative;
}
.site-navbar .site-navigation .site-menu .has-children > a {
  position: relative;
  padding-right: 20px;
}
.site-navbar .site-navigation .site-menu .has-children > a:before {
  position: absolute;
  content: "\e313";
  font-size: 16px;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-family: "icomoon";
}
.site-navbar .site-navigation .site-menu .has-children .dropdown {
  visibility: hidden;
  opacity: 0;
  top: 100%;
  position: absolute;
  text-align: left;
  border-top: 2px solid #01d28e;
  -webkit-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  padding: 0px 0;
  margin-top: 20px;
  margin-left: 0px;
  background: #fff;
  -webkit-transition: 0.2s 0s;
  -o-transition: 0.2s 0s;
  transition: 0.2s 0s;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown.arrow-top {
  position: absolute;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown.arrow-top:before {
  display: none;
  bottom: 100%;
  left: 20%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown.arrow-top:before {
  border-color: rgba(136, 183, 213, 0);
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown a {
  text-transform: none;
  letter-spacing: normal;
  -webkit-transition: 0s all;
  -o-transition: 0s all;
  transition: 0s all;
  color: #000 !important;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown a.active {
  color: #01d28e !important;
  background: #f8f9fa;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown > li {
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 200px;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown > li > a {
  padding: 9px 20px;
  display: block;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li
  > a:hover {
  background: #f8f9fa;
  color: #ced4da;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > a:before {
  content: "\e315";
  right: 20px;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > .dropdown,
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > ul {
  left: 100%;
  top: 0;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:hover
  > a,
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:active
  > a,
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:focus
  > a {
  background: #f8f9fa;
  color: #ced4da;
}
.site-navbar .site-navigation .site-menu .has-children:hover > a,
.site-navbar .site-navigation .site-menu .has-children:focus > a,
.site-navbar .site-navigation .site-menu .has-children:active > a {
  color: #01d28e;
}
.site-navbar .site-navigation .site-menu .has-children:hover,
.site-navbar .site-navigation .site-menu .has-children:focus,
.site-navbar .site-navigation .site-menu .has-children:active {
  cursor: pointer;
}
.site-navbar .site-navigation .site-menu .has-children:hover > .dropdown,
.site-navbar .site-navigation .site-menu .has-children:focus > .dropdown,
.site-navbar .site-navigation .site-menu .has-children:active > .dropdown {
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
  margin-top: 0px;
  visibility: visible;
  opacity: 1;
}

.site-mobile-menu {
  width: 300px;
  position: fixed;
  right: 0;
  z-index: 2000;
  padding-top: 20px;
  background: #fff;
  height: calc(100vh);
  -webkit-transform: translateX(110%);
  -ms-transform: translateX(110%);
  transform: translateX(110%);
  -webkit-box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.offcanvas-menu .site-mobile-menu {
  -webkit-transform: translateX(0%);
  -ms-transform: translateX(0%);
  transform: translateX(0%);
}
.site-mobile-menu .site-mobile-menu-header {
  width: 100%;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close {
  float: right;
  margin-top: 8px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close span {
  font-size: 30px;
  display: inline-block;
  padding-left: 10px;
  padding-right: 0px;
  line-height: 1;
  cursor: pointer;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close span:hover {
  color: #ced4da;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo {
  float: left;
  margin-top: 10px;
  margin-left: 0px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a {
  display: inline-block;
  text-transform: uppercase;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a img {
  max-width: 70px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a:hover {
  text-decoration: none;
}
.site-mobile-menu .site-mobile-menu-body {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
  padding: 0 20px 20px 20px;
  height: calc(100vh - 52px);
  padding-bottom: 150px;
}
.site-mobile-menu .site-nav-wrap {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
}
.site-mobile-menu .site-nav-wrap a {
  padding: 10px 20px;
  display: block;
  position: relative;
  color: #212529;
}
.site-mobile-menu .site-nav-wrap a:hover {
  color: #01d28e;
}
.site-mobile-menu .site-nav-wrap li {
  position: relative;
  display: block;
}
.site-mobile-menu .site-nav-wrap li .nav-link.active {
  color: #01d28e;
}
.site-mobile-menu .site-nav-wrap li.active > a {
  color: #01d28e;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse {
  position: absolute;
  right: 0px;
  top: 10px;
  z-index: 20;
  width: 36px;
  height: 36px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse:hover {
  background: #f8f9fa;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse:before {
  font-size: 12px;
  z-index: 20;
  font-family: "icomoon";
  content: "\f078";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(-180deg);
  -ms-transform: translate(-50%, -50%) rotate(-180deg);
  transform: translate(-50%, -50%) rotate(-180deg);
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse.collapsed:before {
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.site-mobile-menu .site-nav-wrap > li {
  display: block;
  position: relative;
  float: left;
  width: 100%;
}
.site-mobile-menu .site-nav-wrap > li > a {
  padding-left: 20px;
  font-size: 20px;
}
.site-mobile-menu .site-nav-wrap > li > ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.site-mobile-menu .site-nav-wrap > li > ul > li {
  display: block;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > a {
  padding-left: 40px;
  font-size: 16px;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul {
  padding: 0;
  margin: 0;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul > li {
  display: block;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul > li > a {
  font-size: 16px;
  padding-left: 60px;
}
.site-mobile-menu .site-nav-wrap[data-class="social"] {
  float: left;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 5em;
}
.site-mobile-menu .site-nav-wrap[data-class="social"] > li {
  width: auto;
}
.site-mobile-menu .site-nav-wrap[data-class="social"] > li:first-child a {
  padding-left: 15px !important;
}

.sticky-wrapper {
  position: relative;
  z-index: 100;
  width: 100%;
  position: absolute;
  top: 0;
}
.sticky-wrapper .site-navbar {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.sticky-wrapper .site-navbar {
  background: #fff;
}
.sticky-wrapper .site-navbar ul li a {
  color: rgba(255, 255, 255, 0.7) !important;
}
.sticky-wrapper .site-navbar ul li a.active {
  color: #fff !important;
}
.sticky-wrapper.is-sticky .site-navbar {
  background: #fff;
  -webkit-box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2);
}
.sticky-wrapper.is-sticky .site-navbar .site-logo a {
  color: #01d28e;
}
.sticky-wrapper.is-sticky .site-navbar ul li a {
  color: #000 !important;
}
.sticky-wrapper.is-sticky .site-navbar ul li a.active {
  color: #01d28e !important;
}
.sticky-wrapper .shrink {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
@media (max-width: 991.98px) {
  .sticky-wrapper .shrink {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
  }
}

.section {
  padding-top: 10%;
  padding-bottom: 10%;
}

a.custom-card,
a.custom-card:hover {
  color: inherit;
}

.time-stamps {
  margin: 2rem;
  text-align: center;
}

a.segonsT {
  color: blue;
}

#capcalera {
  text-align: center;
  display: inline-block;
}

#rounded-circle {
  height: 200px;
  width: 200px;
}

#prova323 {
  text-align: right;
}

.link-projectes {
  color: inherit;
  flex: 1;
}

.link-projectes:hover {
  color: inherit;
}

#container-projectes {
  display: flex;
}

.col-md-6.col-lg-4 {
  border-style: solid;
  border-color: black;
  border-width: thin;
  flex: 1;
  margin-left: 1rem;
  margin-right: 1rem;
}

#swot-container {
  margin-top: 3rem;
}

#nom21 {
  color: rgb(184, 63, 83);
}

#tw {
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
}

#cardSWOT {
  margin-top: 3rem;
}

.ftco-blocks-cover-1 {
  background-image: url('../assets/images/developer.jpg');
}
</style>