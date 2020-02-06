import Link from 'next/link';

export default () => ( 
    <div>
        <div className="main-navbar">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link href="/index">
                    <a className="nav-link" href="#">Home </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/about">
                    <a className="nav-link" href="#">About</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/projects">
                    <a className="nav-link" href="#">Projects</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link" href="#">Contact<span className="sr-only">(current)</span></a>
                </Link>
            </li>
            </ul>
        </div>
        <div className="contactPage">
            <div className="head-container">
                <h2>References </h2>

            </div>
            <hr/>

            <h5>Danie le Roux from Paarl Gymnasium Primary School</h5>
            <h6>+27 21 872 4505</h6>
            <h6>ontvangs@kleingim.co.za</h6>

            <h5>Wayne Smit from Western Cape Department of Education</h5>
            <h6>+27 72 584 6037</h6>
            <h6>wcsmit@gmail.com</h6>

            <h5>Johan Oosthuizen from Jan van Riebeeck Primary School</h5>
            <h6>+27 21 423 4209</h6>
            <h6>oosie@jvrprim.co.za</h6>

        </div>
        <style jsx>{`
                .main-navbar{
                    background-color: #2f2f2f;
                    justify-content: center;
                    margin: 0;
                    padding: 20px;
                    overflow: hidden;
                }
                ul{
                    list-style-type: none;
                }
                li{
                    float: left;
                    margin:0 30px;
                    text-align: center;
                    font-size: 1.2em
                }
                li a {
                    display: block;
                    color: #9a9a9a;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                }
                li a:hover {
                    background-color: #111;
                }
                .head-container{
                    font-family: monospace;
                    font-size: 2em;
                    display: flex;
                    padding: 20px 
                }
                h5{
                    font-size: 1rem;
                    color: green;
                    padding-left: 15px;

                }
                h6{
                    padding-left: 15px;
                    text-transform: uppercase;
                    line-height: 0;
                }

            
            
            `}
        </style>
    </div>
)