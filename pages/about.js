import Link from 'next/link';

export default () => ( 
    
    <div>
        <div className="main-navbar">
            <ul className="navbar-nav">
                <li>
                    <Link href="/index">
                        <a className="nav-link" href="#">Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a className="nav-link" href="#">About<span className="sr-only">(current)</span></a>
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
        <div className="aboutPage">
            <div className="head-container">
                <h2>About me: </h2>
            </div>
            <hr/>
            <p>
            I am a dedicated and driven 27-year-old leader with a Bachelors of Science. I completed my studies at Cape Peninsula University of Technology (CPUT) at the Wellington Campus in South Africa, of which Mathematics, Biology and Technology serve as majors.</p>
            <p>
            I am a hardworking, disciplined and purposeful person take pride in my work and career. I am confident that I will be an asset to any company.  I have the ability to share in the vision, mission and goals of any company and find a positive approach to daily challenges.
            </p>
            <p>Among my qualities, planning and organizational skills are most definitely my strong points. Organization and leadership serve as my strengths – this will be an asset to any dynamic company. My skills as a leader include that I can set clear goals, but more importantly, execute whatever it takes to reach my set goals. I can delegate and assign tasks and responsibilities, implement decisions, manage finances and budgets, and provide growth and development.</p>
            <p>I am a very sincere and receptive person who always views everything with a positive attitude, ensuring that everything is executed and planned. I believe in and implement the following saying, "I plan my work and work my plan." I possess the ability to deliver quality work within the time limits set.</p>
            <h2>Work Experience:</h2>
            <div className="work">
            <h4>grade 5 teacher,</h4> <h5>Paarl Gimnasium primary school</h5><h5>1 July 2016 – 31 may 2018</h5>
            </div>
            <p>Paarl Gymnasium is a well-known, prestige and well-balanced school, with an excellent sport and academic reputation. I was the grade 5 head-representative, and subsequently had a lot of responsibilities. Among my responsibilities as head-representative, I also acted as the Social Science subject head. As subject head, I had to make sure that the curriculum was implemented correctly by fellow educators and in accordance with the prescribed standards and requirements. I was also responsible for the annual school yearbook and the managing and implementation of all functions around this responsibility. I was involved in a vast amount of important school events, including but not limited to, every debate competition, school concert, swimming gala, athletics, sport day and marketing day. More specifically, I was also the head coach for some netball, tennis and hockey teams.</p>
            <div className="work">
            <h4>grade 4 teacher</h4>
            <h5>jan van riebeeck primary school</h5>
            <h5>1 January 2015 – 30 June 2016</h5></div>
            <p>I was responsible for all aspect involved with grade 4 Mathematics and Social Science. I was responsible for all the community projects and launched a new project called “bread-and-tin cans”. With this project we taught each learner the importance of social responsibility and supporting of communities in need, including assisting less privileged schools with basic food and needs. I was partly responsible for planning and arranging the school’s annual swimming gala, sports events (including netball and athletics). Additional to the aforementioned, I was the head coach of one of the netball teams. Without any additional acknowledgement or recognition, I provided after-school extra math tutoring to learners in need thereof – this is a further reaffirmation of my passion for learners and my will for them to succeed.</p>
            <h2>Hobbies:</h2>
            <h3>Cooking</h3>
            <p>With cooking you can feed yourself, improve your diet and by that your health. Most importantly you can impress your loved ones and any potential dates. Plus you know when you eventually loose it at the office you'll always have a backup profession</p>
            <h3>Hiking</h3>
            <p>There's nothing like that feeling of accomplishment after you climb a high hill or mountain and take in the spectacular view while you slowly catch your breath. I urge anyone to give it a try as soon as they can.</p>

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

            img{
                height: 100px;
                margin: auto;

            }
            .head-container{
                font-family: monospace;
                font-size: 2em;
                display: flex;
                padding: 20px 
            }
            p{
                line-height: 1.5;
                padding: 5px 15px;
                font-size: 1rem;
            }
            h2{
                font-family: monospace;
                font-size: 2em;
                padding: 15px
            }
            h3{
                font-family: monospace;
                font-size: 1.5em;
                padding-left: 15px

            }
            h4{
                padding: 15px;
                text-transform: uppercase;
                font-size: 1rem;
                color: green;

            }
            .work{
                padding-left: 15px;
                text-transform: uppercase;
                line-height: 0;
            }
            
            `}
        </style>
        



    </div>
    
)