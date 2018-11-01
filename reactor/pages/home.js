import React, { Fragment } from 'react'
import Logo from './logo'

const Home = () => (
	<Fragment>
		<div className="video__wrapper">
			<div className="video__overlay" />
			<div className="video__content">
				<div className="logo__main">
					<Logo />
				</div>
				<div className="m-t-20">
					<div className="caption__small">
						<p className="caption__small--para">23rd to 25th August, 2019. </p>
						<p className="caption__small--para uppercase">Goa, India</p>
					</div>
					<h3 className="content__desc">react india</h3>
					<h2 className="content__title">first international conference</h2>
					<div className="content__button">
						<a href="#">BE A SPONSOR</a>
					</div>
				</div>
			</div>
			{/* <div className="banner__content--main">
				<div className="banner__venue">
					<p className="m-0">23rd to 25th August, 2019.</p>
					<p className="m-0">GOA, INDIA</p>
				</div>
				<h3 className="caption-desc">REACT INDIA </h3>
				<h2 className="caption-title" className="m-t-10">
					FIRST INTERNATIONAL CONFERENCE
				</h2>
				<div className="slide-btn" className="m-t-10">
					<a className="animated fadeInUpBig" href="#">
						BE A SPONSOR
					</a>
					<a className="animated fadeInUpBig" href="#">
						Sponshorship
					</a>
				</div>
			</div> */}
			<div className="video__main">
				<video autoPlay loop muted>
					<source src="https://www.dropbox.com/s/eeb5sl6xp3xbt94/video_2.mp4?dl=1" type="video/mp4" />
					Please use a video supported browser
				</video>
			</div>
		</div>
		{/*End Slider Area*/}
		{/*Start About Area*/}
		<div className="about-area">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title">
							<span className="subtitle">Greetings &amp; Welcome</span>
							<h2 className="f-weight-700 margin-0">About the Conference</h2>
							<div className="bordershep" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 order-last order-md-first">
						<div className="about-text">
							<p className="first-text">
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
							<p>
								There are many variations of passages of Lorem Ipsum available, but the majority have
								suffered alteration in some form, by injected humour or at randomised words which don't
								look even slightly believable. If you are an going to use a passage of Lorem Ipsum, you
								need to be sure there isn't anything embarrassing hidden in the middle of text.
							</p>
							<div className="buttons">
								<button type="button" disabled className="mr_btn_fill">
									EARLY BIRD TICKETS COMING SOON
								</button>
							</div>
						</div>
					</div>
					<div className="col-md-6 order-first order-md-last d-flex align-self-center">
						<div className="aboutusvideo">
							<div className="img">
								<img className="img-fluid" src="assets/images/aboutimg-2.jpg" alt="" />
								<a
									className="venobox vbox-item"
									data-vbtype="video"
									data-autoplay="true"
									href="https://www.youtube.com/watch?v=ct-mHwAb3g4"
								>
									<i className="fa fa-play" style={{ transform: 'translate(14%, 93%)' }} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*End About Area*/}
		<section className="conferences">
			<div className="overlay" />
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<span className="subtitle">Be a Part of</span>
							<h2>React India 2019</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
						{/*End Heading Title*/}
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="text-center">
							<p className="date">22nd - 24th AUGUST | GOA, INDIA | 2019 EDITION</p>
							{/*<div class="timer" id="countdown"></div>*/}
						</div>
					</div>
				</div>
			</div>
		</section>
		{/*Start Company Info Area*/}
		<section className="schedule_area" />
		{/*End Company Info Area*/}

		{/*Start Testimonial Area*/}
		<section className="testimonial-area">
			<div className="overlay" />
			{/*Start Container*/}
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<span className="subtitle">Our</span>
							<h2 className="f-weight-700 margin-0">Partners</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
						{/*End Heading Title*/}
					</div>
				</div>
				{/*Start Testimonial Carousel*/}
				<div className="testimonial owl-carousel owl-loaded owl-drag" id="home-testimonial">
					{/*Start Testimonial Item*/}
					{/*End Testimonial Item*/}

					<div className="owl-nav disabled">
						<div className="owl-prev">prev</div>
						<div className="owl-next">next</div>
					</div>
					<div className="owl-dots">
						<div className="owl-dot active">
							<span />
						</div>
						<div className="owl-dot">
							<span />
						</div>
					</div>
				</div>
				{/*End Testimonial Carousel*/}
			</div>
			{/*End Container*/}
		</section>
		{/*End Testimonial Area*/}
		{/* Start Speakers Area */}
		<div className="speaker_area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<span className="subtitle">Our</span>
							<h2 className="f-weight-700 margin-0">Awesome Speakers</h2>
							<div className="bordershep" />
							<p>
								There are many variations of passages of Lorem Ipsum available but the at majority have
								suffered alteration in some dummy.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk1.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-github" />
												<i className="fa fa-twitter" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="#">
									<h4>Mamunur Rashid</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-xl-3">
						<div className="speaker">
							<div className="sk-img">
								<div className="img">
									<img className="img-fluid" src="assets/images/speakers/sk2.jpg" alt="" />
									<div className="overlay d-flex justify-content-center">
										<div className="slink">
											<a href="#">
												<i className="fa fa-github" />
												<i className="fa fa-twitter" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sk-content">
								<a href="#">
									<h4>Melisa Lund</h4>
								</a>
								<p>Founder, Edita</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* End Speakers Area */}

		{/*Start Latest News Area*/}
		<section className="latest-news-area">
			{/*Start Container*/}
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						{/*Start Heading Title*/}
						<div className="heading-title text-center">
							<h2 className="f-weight-700 margin-0">Organized by</h2>
							<div className="bordershep" />
							<a target="_blank" href="geekabyte.tech">
								<img src="assets/images/geekabyte-web.png" />
							</a>
						</div>
						{/*End Heading Title*/}
					</div>
				</div>
			</div>
			{/*End Container*/}
		</section>
	</Fragment>
)

export default Home
