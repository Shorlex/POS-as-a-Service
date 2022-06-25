

'use strict';

class Navbar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-custom navbar-mainbg fixed-top">
		            <a className="navbar-brand navbar-logo" href="#">
                        <img className="main-logo" src="PACIFYLABS_3-removebg-preview.png" alt="" />
                    </a>
		            <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		            <i className="fas fa-bars text-white"></i>
		            </button>
		            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
			            <ul className="navbar-nav ml-auto">
					        <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
					            <li className="nav-item active">
						            <a className="nav-link" href="#Home"><i className="fas fa-home-alt"></i>Home</a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="#About"><i className="fas fa-user-tie"></i>How it Works</a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="#Features"><i className="fas fa-tools"></i>Features</a>
					            </li>
					            <li className="nav-item">
							            <a className="nav-link" href="#Pricing"><i className="fas fa-certificate"></i>Pricing</a>
					            </li>
			            </ul>
		            </div>
	            </nav>
            </div>
        );
    }
}
 class About extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <section id="Home">
                    <div className="container pt-2 pb-3">
                        <div className="row pt-5 w3-container w3-center w3-animate-zoom">
                            <div className="col-6 ps-5 pt-5 about-col">
                                <h1 className="about-us">
                                <span>Pacifylabs POS</span><br /> Integration Between Business and Payment</h1>
                                <img className="pos-image2" src="actindo_POS.png" alt="" />
                                <p className="about-details">Join the fastest and cheapest transaction ever for everyone</p>
                                <button className="btn btn1">Get Started</button>
                            </div>
                            <div className="col-6">
                                <img className="pos-image" src="actindo_POS.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

class WorkPage extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <section id="About">
                    <div className="container pt-3 pb-3">
                        <div className="pt-5 mt-3 reveal fade-bottom">
                            <h1 className="pos-head"><span>How it Works</span></h1>
                        </div>
                        <div className="row about-row">
                            <div className="col-6 pt-5 reveal fade-left">
                                <p className="pos-details">At Pacifylabs, our POS system is an overall point of sale hardware and software system built to process financial transactions and track sales. It consists of multifunctional tools that can replace traditional cash registers and provides users with advanced, comprehensive features that go beyond calculating transactions to managing inventory.</p>    
                             </div>
                            <div className="col-6 reveal fade-right">
                                <img src="intro-img.png" alt="" className="pos-img" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

class Features extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <section id="Features">
                    <div className="container pt-5 pb-3">
                        <div className="pt-5 reveal fade-bottom">
                            <h1 className="pos-head"><span>Features</span></h1>
                            <p className="pos-detail"> Our POS system is a modern system with amaizing features. Here are some of the features: </p>
                        </div>
                        <div className="row features-row">
                            <div className="col-4 features-details reveal fade-left">
                                <img src="mobile.jpg" alt="" className="features-image" />
                                <hr className="features" />
                                <h3><span>Mobile Accessibility</span></h3>   
                            </div>
                            <div className="col-4 features-details reveal fade-left">
                                <img src="digital-receipt-shutterstock_0.jpg" alt="" className="features-image" />
                                <hr className="features" />
                                <h3><span>Digital Reciept</span></h3>
                            </div>
                            <div className="col-4 features-details reveal fade-left">
                                <img src="admin-user-icon-22.jpg" alt="" className="features-image" />
                                <hr className="features" />
                                <h3><span>Defined Permission and User Account</span></h3>
                            </div>
                        </div>
                        <div className="row features-row">
                            <div className="col-4 features-details reveal fade-right">
                                <img src="analysis and report.jpg" alt="" className="features-image" />
                                <hr className="features" />
                                <h3> <span>Reporting and Analysis</span></h3>
                            </div>
                            <div className="col-4 features-details reveal fade-right">
                                <img src="Offline.png" alt="" className="features-image" />
                                <hr className="features" />
                                <h3><span>Offline Mode</span></h3>
                            </div>
                            <div className="col-4 features-details reveal fade-right">
                                <img src="data-security.jpg" alt="" className="features-image" />
                                <hr className="features" />
                                <h3><span>Data Security</span></h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

class Pricing extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <section id="Pricing">
                    <div className="container pt-3 pb-3">
                        <div className="pt-5 reveal fade-bottom">
                            <h1 className="pos-head"><span>Pricing System</span></h1>
                        </div>
                        <div className="row features-row">
                            <div className="col-4 pricing pb-3 reveal fade-bottom">
                                <h1 className="price-head">Starter</h1>
                                <hr className="price" />
                                <h1 className="price-head">#70,000</h1>
                                <hr className="price" />
                                <div className="row pricing-row">
                                    <div>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> Online</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> Offline</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> transaction</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> POS/Printer</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> Personalized URL</p>
                                    </div>
                                    <div>
                                        <i className="fa fa-check" aria-hidden="true"></i><p />
                                        <i className="fa fa-times" aria-hidden="true"></i><p />
                                        <p className="price-details">100</p>
                                        <i className="fa fa-check" aria-hidden="true"></i><p />
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                </div> 
                                <button className="btn btn2 btn-light" >Subscribe</button>
                            </div>
                            <div className="col-4 pricing pb-3 reveal fade-bottom1">
                                <h1 className="price-head">Standard</h1>
                                <hr className="price" />
                                <h1 className="price-head">#85,000</h1>
                                <hr className="price" />
                                <div className="row pricing-row">
                                    <div>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> Online</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> Offline</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> transaction</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> POS/Printer</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> Personalized URL</p>
                                    </div>
                                    <div>
                                        <i className="fa fa-check" aria-hidden="true"></i><p />
                                        <i className="fa fa-check" aria-hidden="true"></i><p />
                                        <p className="price-details">300</p>
                                        <i className="fa fa-check" aria-hidden="true"></i><p />
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <button className="btn btn2 btn-light" >Subscribe</button>
                            </div>
                            <div className="col-4 pricing pb-3 reveal fade-bottom2">
                                <h1 className="price-head">Premium</h1>
                                <hr className="price" />
                                <h1 className="price-head">#100,000</h1>
                                <hr className="price" />
                                <div className="row pricing-row">
                                    <div>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> Online</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> Offline</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> transaction</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> POS/Printer</p>
                                        <p className="price-details"><i className="fa fa-arrow-right" aria-hidden="true"></i> Personalized URL</p>
                                    </div>
                                    <div>
                                        <i className="fa fa-check" aria-hidden="true"></i><p />
                                        <i className="fa fa-check" aria-hidden="true"></i><p />
                                        <p className="price-details">Unlimited</p>
                                        <i className="fa fa-check" aria-hidden="true"></i><p />
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <button className="btn btn2 btn-light" >Subscribe</button>
                            </div>
                        </div>
                    </div>
                    </section>
            </div>
        );
    }
}

class Footer extends React.Component{
        constructor(){
            super()
        }
        render(){
            return (
                <div>
                    <footer>
                        <div className="container-fluid footer pt-5 ps-5 pb-1 mt-5">
                            <div className="row footer-row">
                                <div>
                                    <h4 className="footer-head">Features</h4><br />
                                    <p className="footer-details">Mobile Accessibilty</p>
                                    <p className="footer-details">Data Security</p>
                                    <p className="footer-details">Offline Mode</p>
                                    <p className="footer-details">Digital Reciept</p>
                                    <p className="footer-details">Permission and User Account</p>
                                </div>
                                <div>
                                    <h5 className="footer-head">Help and Support</h5><br />
                                    <p className="footer-details">Help Center</p>
                                    <p className="footer-details">FAQs</p>
                                </div>
                                <div>
                                    <h5 className="footer-head">Company</h5><br />
                                    <p className="footer-details">About</p>
                                    <p className="footer-details">Contact us</p>
                                    <p className="footer-details">Pricing</p>
                                </div>
                            </div>
                            <hr className="foot" />
                            <div className="copy">
                                <p className="copyright">&copy; 2022. Pacifylabs Technology. All rights reserved</p>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }
}

class ThemeBtn extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="theme-btn">
                <i className="fa fa-adjust" aria-hidden="true"></i>
            </div>
        );
    }
} 

 class Start extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
        <Navbar />
        <About />
        <WorkPage />
        <Features />
        <Pricing />
        <Footer />
        <ThemeBtn />
        </div>
    );
  }
}



ReactDOM.render(<Start />, document.getElementById('input-field'));