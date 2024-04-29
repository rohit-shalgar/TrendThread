import {Fragment} from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown-logo.svg';
import {Outlet, Link} from 'react-router-dom';
import './navigation.styles.css';

const Navigation = () => {
	return (
		<Fragment>
			<div className = 'navigation'>
				<Link className = 'logo-container' to = '/'>
					<CrwnLogo className = 'logo'/>
				</Link>
				<Link className = 'navigation-container' to = '/shop'>
					SHOP
				</Link>
				<Link className='sign-in-container' to='/sign-in'>
					SIGN IN
				</Link>
			</div>
			<Outlet />
		</Fragment>
	)
}
export default Navigation;