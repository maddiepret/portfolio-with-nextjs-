import Link from 'next/link';

export default()=> {
    return <div>
                    <div className="main-navbar">
                    <ul className="navbar-nav">
                    <li>
                        <Link href="/">
                            <a className="nav-link" href="#">Home <span>(current)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="nav-link" href="#">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a className="nav-link" href="#">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className="nav-link" href="#">Contact</a>
                        </Link>
                    </li>
                    </ul>
                </div>
                <div className="Landingpage">
                    <h2 className="main-title">Designer, Full Stack Web Developer</h2>
                    <h4 className="main-subtitle">I design and code beautifully simple things, and I love what I do.</h4>
                    <img src="https://pbs.twimg.com/media/CFgNPQhUgAA4SZb.jpg:large" alt="cartoon picture of me" className="myImg"/>

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

                .Landingpage{
                    margin-top: 50px;
                    padding: 20px
                }
                .main-title{
                    line-height: 1.125;
                    text-align: center;
                    font-size: 3.8em;
                    font-family: monospace

                }
                .main-subtitle{
                    line-height: 1.125;
                    font-family: monospace;
                    text-align: center;
                    font-size: 1.8em;
                }
                .myImg{
                    display: block;
                    margin: auto;
                    height: 400px;
                }
            `}
            </style>


            </div>
}
