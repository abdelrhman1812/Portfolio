import { Link } from 'react-router-dom';
import odyImage from '../../Assets/images/Sidebar/Abdelrhman.jpeg';

export default function Sidebar() {

    return <>


        <aside>
            <div className="logo">
                <figure>
                    <img src={odyImage} alt="Abdelrhman" />
                    <figcaption>
                        <h2>Abdelrhman</h2>
                    </figcaption>
                </figure>

            </div>
            <div className="icons">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>

            <div className="links">
                <ul>
                    <li>
                        <Link to={''} className='active'>
                            <i className='fa fa-home '></i>
                            <span className=''>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            <i className='fa fa-user'></i>
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            <i className='fa fa-book'></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={''}>
                            <i className='fa fa-phone'></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>

    </>

}
