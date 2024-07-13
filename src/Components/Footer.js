import React from 'react'

const Footer = () => {
  return (
    <>
    <div class="d-flex flex-column h-100">

{/* <section class="hero text-white py-5 flex-grow-1">
    <div class="container py-4">
        <div class="row">
            <div class="col-lg-6">
                <h1 class="display-4">Bootstrap footer bottom</h1>
                <p class="fst-italic text-muted">Using Bootstrap 5 flexbox utilities, create a footer that always sticks to the bottom of your viewport. Snippet by <a class="text-primary" href="https://bootstrapious.com/" target="_blank">Bootstrapious</a></p>
            </div>
        </div>
    </div>
</section> */}

<footer class="footer w-100 py-4 flex-shrink-0">
    <div class="container py-4">
        <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
                <h5 class="h1 text-white">Contact Us</h5>
                <p class="small text-muted">Email Address - youthgym11@gmail.com</p>
                <p class="small text-muted">Ph no. - +91-8922310912</p>

                <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">youthgym.com</a></p>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Join Us</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#">Get Membership</a></li>
                    <li><a href="#">Get Trail</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="text-white mb-3">Our Address</h5>
                <p class="small text-muted">1/6, Civil Lanes</p>
                <p class="small text-muted">Near Netaji Chawk</p>
                <p class="small text-muted">Ghaziabad, UP</p>
            </div>
        </div>
    </div>
</footer>
</div>
    </>
  )
}

export default Footer
