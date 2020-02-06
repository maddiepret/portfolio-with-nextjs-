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
                <Link href="/">
                    <a className="nav-link" href="#">Projects<span className="sr-only">(current)</span></a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/contact">
                    <a className="nav-link" href="#">Contact</a>
                </Link>
            </li>
            </ul>
        </div>
        <div>
            <div className="head-container">
                <h2>Projects</h2>
                <img src="https://mattfarley.ca/img/hero.svg" alt="projects"/>
            </div>
            <hr/>
            <div>
                <div className="projects">
                <h3>Check out my Github page</h3>
                    <a href="https://github.com/maddiepret"><img src="https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png" alt="github-logo" className="project-img"/></a>
                    
                    <h3>Check out my Tetris game</h3>
                    <a href="https://infinite-fjord-45291.herokuapp.com/"><img src="https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6d/ad/f7/6dadf7a0-ae79-0f60-74a9-c0c5ebb43f41/source/512x512bb.jpg" alt="tetris-image" className="project-img"/></a>

                </div>
            </div>

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
            img{
                margin: auto;
            }
            .projects{
                display: flex;
                padding-left: 20%
            }
            .project-img{
                height: 200px;
                padding:60px
            }

        
            
            `}
        </style>
        
    </div>
)